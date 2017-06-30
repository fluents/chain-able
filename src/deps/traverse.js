/* eslint no-new-wrappers: "off" */
/* eslint eqeqeq: "off" */
/* eslint func-style: "off" */
/* eslint complexity: "off" */
const isObjStrict = require('./is/objStrict')
const isRegExp = require('./is/regexp')
const isError = require('./is/error')
const isBoolean = require('./is/boolean')
const isNumber = require('./is/number')
const isString = require('./is/string')
const isDate = require('./is/date')
const isUndefined = require('./is/undefined')
const isArray = require('./is/array')
const isMap = require('./is/map')
const isSet = require('./is/set')
const argumentor = require('./argumentor')
const ObjectKeys = require('./util/keys')
const hasOwnProperty = require('./util/hasOwnProperty')
const getPrototypeOf = require('./util/getPrototypeOf')
const reduce = require('./reduce')
const toarr = require('./to-arr')

/**
 * @param {Array | Object | any} xs
 * @param {Function} fn
 * @TODO: unexpectedly breaks things iterating
 * if you are relying on internal functionality
 * (such as .path, .get, .value...) with map & set
 *
 * @NOTE if there is .forEach on the obj already, use it
 * otherwise, call function for each
 *
 */
var forEach = function(xs, fn) {
  if (xs.forEach) xs.forEach(fn)
  else for (let i = 0; i < xs.length; i++) fn(xs[i], i, xs)
}

/**
 * {@link https://sourcemaking.com/design_patterns/chain_of_responsibility chainofresponsibility}
 *
 * @param {Traversable} obj object to traverse
 *
 * @constructor
 *
 * @example
 *
 *    traverse({})
 *    //=> new Traverse(obj)
 *
 */
var traverse = function(obj) {
  return new Traverse(obj)
}
module.exports = traverse

/**
 * @func
 * @class TraverseJS
 * @classdesc Traverse and transform objects by visiting every node on a recursive walk.
 * @prop {any} value
 *
 * @category traverse
 * @memberOf Traverse
 * @see deps/traverse
 * @category traverse
 * @types traverse
 * @tests traverse/*
 *
 * @TODO: symbol, map, set
 * @tutorial https://github.com/substack/js-traverse
 *
 * @param {Traversable} obj any traversable value
 *
 * @example
 *
 *   traverse({})
 *   //=> Traverser
 *
 */
function Traverse(obj) {
  this.value = obj
}

/**
 * @desc Get the element at the array path.
 *
 * @param  {Array<string>} ps paths
 * @return {any} value at dot-prop
 *
 * @memberOf Traverse
 * @see this.forEach
 * @todo hasOwnProperty
 */
Traverse.prototype.get = function(ps) {
  let node = this.value
  for (let i = 0; i < ps.length; i++) {
    const key = ps[i]
    if (!node || !hasOwnProperty(node, key)) {
      node = undefined
      break
    }
    node = node[key]
  }
  return node
}

/**
 * @desc Return whether the element at the array path exists.
 *
 * @param  {Array<string>} pathsArray paths
 * @return {boolean} has element at path
 *
 * @memberOf Traverse
 * @see hasOwnProperty
 *
 * @example
 *
 *    traverse({eh: true}).has(['eh'])
 *    //=> true
 *
 * @example
 *
 *    traverse({eh: true}).has(['canada'])
 *    //=> false
 *
 *
 * @example
 *
 *    traverse([0]).has([2])
 *    //=> false
 *
 */
Traverse.prototype.has = function(pathsArray) {
  let node = this.value
  for (let i = 0; i < pathsArray.length; i++) {
    const key = pathsArray[i]
    if (!node || !hasOwnProperty(node, key)) {
      return false
    }
    node = node[key]
  }
  return true
}

/**
 * @desc Set the element at the array path to value.
 *
 * @param  {Array<string>} arrayPath paths
 * @param  {any} value any value to assign to the element @ the path
 * @return {any} value passed in
 *
 * @memberOf Traverse
 * @see deps/dot
 */
Traverse.prototype.set = function(arrayPath, value) {
  let node = this.value
  let i = 0
  for (; i < arrayPath.length - 1; i++) {
    const key = arrayPath[i]
    if (!hasOwnProperty(node, key)) node[key] = {}
    node = node[key]
  }
  node[arrayPath[i]] = value
  return value
}

/**
 * @desc Execute fn for each node in the object and return a new object with the results of the walk. To update nodes in the result use this.update(value).
 *
 * @method
 * @memberOf Traverse
 * @see walk
 * @param  {Function} cb fn for each node in the object
 * @return {any}
 *
 * @example
 *    var {traverse} = require('chain-able')
 *
 *    var obj = {a: 1, b: 2, c: [3, 4]}
 *    obj.c.push(obj)
 *
 *    var scrubbed = traverse(obj).map(function(x) {
 *      if (this.circular) this.remove()
 *    })
 *    console.dir(scrubbed)
 *    //=> { a: 1, b: 2, c: [ 3, 4 ] }
 */
Traverse.prototype.map = function(cb) {
  return walk(this.value, cb, true)
}

/**
 * @desc Execute fn for each node in the object but unlike .map(), when this.update() is called it updates the object in-place.
 *       executes a provided function once for each traversed element.
 *
 * @param  {Function} callback provided callback function
 * @return {any} this.value
 *
 * @memberOf Traverse
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 *  @example
 *
 *     var {traverse} = require('chain-able')
 *
 *     var obj = [5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}]
 *     traverse(obj).forEach(function(x) {
 *       if (x < 0) this.update(x + 128)
 *     })
 *
 *     console.dir(obj)
 *     //=> [ 5, 6, 125, [ 7, 8, 126, 1 ], { f: 10, g: 115 } ]
 *
 */
Traverse.prototype.forEach = function(callback) {
  this.value = walk(this.value, callback, false)
  return this.value
}

/**
 * @desc applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
 *       calls cb for each loop that is .notRoot
 *       defaults initial value to `this.value`
 *
 * @param  {Function} cb callback forEach
 * @param  {Object | Array | any} init initial value
 * @return {Object | Array | any}
 *
 * @see https://en.wikipedia.org/wiki/Fold_(higher-order_function)
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * @memberOf Traverse
 *
 * @example
 *
 *    var {traverse} = require('chain-able')
 *
 *    var obj = {
 *      a: [1, 2, 3],
 *      b: 4,
 *      c: [5, 6],
 *      d: {e: [7, 8], f: 9},
 *    }
 *
 *    var leaves = traverse(obj).reduce(function(acc, x) {
 *      if (this.isLeaf) acc.push(x)
 *      return acc
 *    }, [])
 *
 *    console.dir(leaves)
 *    //=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 *
 */
Traverse.prototype.reduce = function(cb, init) {
  const skip = arguments.length === 1
  let acc = skip ? this.value : init
  this.forEach(function(x) {
    if (!this.isRoot || !skip) {
      acc = cb.call(this, acc, x)
    }
  })
  return acc
}

/**
 * @desc Return an Array of every possible non-cyclic path in the object. Paths are Arrays of string keys.
 * @return {Array<string>}
 * @memberOf Traverse
 * @tests traverse/keys
 */
Traverse.prototype.paths = function() {
  const acc = []
  this.forEach(function(x) {
    acc.push(this.path)
  })
  return acc
}

/**
 * @desc Return an Array of every node in the object.
 * @memberOf Traverse
 * @return {Array<any>}
 */
Traverse.prototype.nodes = function() {
  const acc = []
  this.forEach(function(x) {
    acc.push(this.node)
  })
  return acc
}

/**
 * @desc Create a deep clone of the object.
 *
 * @return {any}
 *
 * @memberOf Traverse
 *
 * @example
 *    const {traverse, eq} = require('chain-able')
 *
 *    const obj = {eh: true, canada: [1]}
 *    const cloned = traverse(obj).clone()
 *    cloned.eh = false
 *    eq(cloned, obj)
 *    //=> false
 *
 */
Traverse.prototype.clone = function() {
  let parents = []
  let nodes = []

  return (function clone(src) {
    for (let i = 0; i < parents.length; i++) {
      if (parents[i] === src) {
        return nodes[i]
      }
    }

    if (isObjStrict(src)) {
      let dst = copy(src)

      parents.push(src)
      nodes.push(dst)

      forEach(ObjectKeys(src), key => {
        dst[key] = clone(src[key])
      })

      parents.pop()
      nodes.pop()
      return dst
    }
    else {
      return src
    }
  })(this.value)
}

/**
 * @func
 *
 * @param  {any} root root node
 * @param  {Function} cb callback for each
 * @param  {boolean} immutable should mutate or not
 * @return {any}
 *
 * @see traverse.forEach
 */
function walk(root, cb, immutable) {
  let path = []
  let parents = []
  let alive = true

  /**
   * @emits before
   * @emits pre
   * @emits post
   * @emits after
   *
   * @param  {any} node_
   * @return {State} see types
   */
  return (function walker(node_) {
    // both are objs with properties that get changed but
    const node = immutable ? copy(node_) : node_
    const modifiers = {}
    let keepGoing = true

    /**
     * Each method that takes a callback has a context (its this object) with these attributes:
     * @prop {boolean} isRoot @alias isNotRoot Whether or not the present node is a leaf node (has no children)
     * @type {Object}
     */
    const state = {
      /**
       * The present node on the recursive walk
       * @type {Array}
       */
      node,
      /**
       * @see traverse.context.node
       * @protected
       * @type {Array}
       */
      node_,
      /**
       * An array of string keys from the root to the present node
       * @type {Array}
       */
      path: [].concat(path),
      /**
       * The context of the node's parent. This is undefined for the root node.
       * @type {undefined | Primitive}
       */
      parent: parents[parents.length - 1],
      parents,
      /**
       * The name of the key of the present node in its parent. This is undefined for the root node.
       * @type {undefined | Primitive}
       */
      key: path.slice(-1)[0],
      /**
       * Whether the present node is the root node
       * @type {Boolean}
       */
      isRoot: path.length === 0,
      /**
       * Depth of the node within the traversal
       * @type {number}
       */
      level: path.length,
      /**
       * If the node equals one of its parents, the circular attribute is set to the context of that parent and the traversal progresses no deeper.
       * @type {null | boolean}
       */
      circular: null,
      /**
       * Set a new value for the present node.
       * All the elements in value will be recursively traversed unless stopHere is true.
       *
       * @param  {Function} x
       * @param  {boolean} stopHere
       * @return {void}
       */
      update(x, stopHere) {
        if (!state.isRoot) {
          state.parent.node[state.key] = x
        }
        state.node = x
        if (stopHere) keepGoing = false
      },
      /**
       * Delete the current element from its parent in the output. Calls delete even on Arrays.
       * @param  {boolean} stopHere
       * @return {void}
       */
      delete(stopHere) {
        delete state.parent.node[state.key]
        if (stopHere) keepGoing = false
      },
      /**
       * Remove the current element from the output. If the node is in an Array it will be spliced off. Otherwise it will be deleted from its parent.
       * @param  {boolean} stopHere
       * @return {void}
       */
      remove(stopHere) {
        // @NOTE safety
        if (isUndefined(state.parent)) {
          return
        }
        else if (isArray(state.parent.node)) {
          state.parent.node.splice(state.key, 1)
        }
        else {
          delete state.parent.node[state.key]
        }
        if (stopHere) keepGoing = false
      },
      keys: null,
      /**
       * Call this function before any of the children are traversed.
       * You can assign into this.keys here to traverse in a custom order.
       * @param  {Function} fn
       * @return {any}
       */
      before(fn) {
        modifiers.before = fn
      },
      /**
       * Call this function after any of the children are traversed.
       * @param  {Function} fn
       * @return {any}
       */
      after(fn) {
        modifiers.after = fn
      },
      /**
       * Call this function before each of the children are traversed.
       * @param  {Function} fn
       * @return {any}
       */
      pre(fn) {
        modifiers.pre = fn
      },
      /**
       * Call this function after each of the children are traversed.
       * @param  {Function} fn
       * @return {any}
       */
      post(fn) {
        modifiers.post = fn
      },
      /**
       * @modifies alive
       * @protected
       * @return {void}
       */
      stop() {
        alive = false
      },
      /**
       * @modifies keepGoing
       * @protected
       * @return {void}
       */
      block() {
        keepGoing = false
      },
    }

    if (!alive) return state

    /**
     * @desc updates if needed:
     *       @modifies keys
     *       @modifies circular
     *       @modifies isLeaf
     *       @modifies notLeaf
     *       @modifies notRoot
     * @return {void}
     */
    function updateState() {
      if (isObjStrict(state.node)) {
        if (!state.keys || state.node_ !== state.node) {
          state.keys = ObjectKeys(state.node)
        }

        // @NOTE was ==
        state.isLeaf = state.keys.length === 0

        for (let i = 0; i < parents.length; i++) {
          if (parents[i].node_ === node_) {
            state.circular = parents[i]
            break
          }
        }
      }
      else {
        state.isLeaf = true
        state.keys = null
      }

      state.notLeaf = !state.isLeaf
      state.notRoot = !state.isRoot
    }

    updateState()

    // @NOTE added last `,state` arg to not have it have to use `this`,
    // but broke some things so moved to another fn
    //
    // use return values to update if defined
    let ret = cb.call(state, state.node)
    if (!isUndefined(ret) && state.update) state.update(ret)

    if (modifiers.before) modifiers.before.call(state, state.node)

    if (!keepGoing) return state

    // when it's some sort of itertable object, loop it further
    if (isObjStrict(state.node) && !state.circular) {
      parents.push(state)

      updateState()

      forEach(state.keys, (key, i) => {
        path.push(key)

        if (modifiers.pre) modifiers.pre.call(state, state.node[key], key)

        const child = walker(state.node[key])
        if (immutable && hasOwnProperty(state.node, key)) {
          state.node[key] = child.node
        }

        // @NOTE was ==
        child.isLast = i === state.keys.length - 1
        child.isFirst = i === 0

        if (modifiers.post) modifiers.post.call(state, child)

        path.pop()
      })
      parents.pop()
    }

    if (modifiers.after) modifiers.after.call(state, state.node)

    return state
  })(root).node
}

/**
 * @func
 * @TODO   does not respect ObjectDescriptors
 * @NOTE   wicked ternary
 * @param  {any} src
 * @return {any}
 */
function copy(src) {
  // require('fliplog').data(src).bold('copying').echo()
  if (isObjStrict(src)) {
    let dst

    // require('fliplog').underline('is obj').echo()
    if (isMap(src)) {
      dst = reduce(src.entries())
    }
    else if (isSet(src)) {
      dst = toarr(src)
    }
    if (isArray(src)) {
      dst = []
    }
    else if (isDate(src)) {
      dst = new Date(src.getTime ? src.getTime() : src)
    }
    else if (isRegExp(src)) {
      dst = new RegExp(src)
    }
    else if (isError(src)) {
      dst = {message: src.message}
    }
    else if (isBoolean(src)) {
      dst = new Boolean(src)
    }
    else if (isNumber(src)) {
      dst = new Number(src)
    }
    else if (isString(src)) {
      dst = new String(src)
    }
    else {
      //if (Object.create && Object.getPrototypeOf)
      dst = Object.create(getPrototypeOf(src))
    }
    // else if (src.constructor === Object) {
    //   dst = {}
    // }
    // else {
    //   // @NOTE: only happens if above getPrototypeOf does not exist
    //   var proto = (src.constructor && src.constructor.prototype) ||
    //   src.__proto__ || {}
    //   var T = function() {}
    //   T.prototype = proto
    //   dst = new T()
    // }

    forEach(ObjectKeys(src), key => {
      dst[key] = src[key]
    })
    return dst
  }
  else {
    // require('fliplog').red('is NOT OBJ').echo()
    return src
  }
}

/**
 * @desc adds methods to Traverser
 */
forEach(ObjectKeys(Traverse.prototype), key => {
  traverse[key] = function(obj) {
    const t = new Traverse(obj)

    // args = argumentor.apply(null, arguments).slice(1)
    return t[key].apply(t, argumentor.apply(null, arguments).slice(1))
  }
})
