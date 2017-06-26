/* eslint no-new-wrappers: "off" */
/* eslint eqeqeq: "off" */
/* eslint func-style: "off" */
/* eslint complexity: "off" */
const isPureObj = require('./is/pureObj')
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
const isEqEq = require('./is/eqeq')
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
 * @desc if there is .forEach on the obj already, use it
 * otherwise, call function for each
 */
var forEach = function(xs, fn) {
  if (xs.forEach) xs.forEach(fn)
  else for (let i = 0; i < xs.length; i++) fn(xs[i], i, xs)
}

/**
 * @param {Traversable} obj
 * @constructor
 */
var traverse = function(obj) {
  return new Traverse(obj)
}
module.exports = traverse

/**
 * @TODO: symbol, map, set
 * @tutorial https://github.com/substack/js-traverse
 * @classdesc Traverse.js
 * @param {Traversable} obj
 * @prop {any} value
 */
function Traverse(obj) {
  this.value = obj
}

/**
 * @see this.forEach
 * @todo hasOwnProperty
 * @param  {Array<string>} ps paths
 * @return {any} value at dot-prop
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
 * @see hasOwnProperty
 * @param  {Array<string>} ps paths
 * @return {boolean}
 */
Traverse.prototype.has = function(ps) {
  let node = this.value
  for (let i = 0; i < ps.length; i++) {
    const key = ps[i]
    if (!node || !hasOwnProperty(node, key)) {
      return false
    }
    node = node[key]
  }
  return true
}

/**
 * @see    dot-prop
 * @param  {Array<string>} ps paths
 * @param  {any} value
 * @return {any} value passed in
 */
Traverse.prototype.set = function(ps, value) {
  let node = this.value
  let i = 0
  for (; i < ps.length - 1; i++) {
    const key = ps[i]
    if (!hasOwnProperty(node, key)) node[key] = {}
    node = node[key]
  }
  node[ps[i]] = value
  return value
}

/**
 * @see walk
 * @param  {Function} cb
 * @return {any}
 */
Traverse.prototype.map = function(cb) {
  return walk(this.value, cb, true)
}

/**
 * @param  {Function} cb
 * @return {any} this.value
 */
Traverse.prototype.forEach = function(cb) {
  this.value = walk(this.value, cb, false)
  return this.value
}

/**
 * @desc   calls cb for each loop that is not root
 *         defaults initial value to `this.value`
 * @param  {Function} cb
 * @param  {Object | Array | any} init
 * @return {Object | Array | any}
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
 * @return {Array<string>}
 */
Traverse.prototype.paths = function() {
  const acc = []
  this.forEach(function(x) {
    acc.push(this.path)
  })
  return acc
}

/**
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
 * @return {any}
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

    if (isPureObj(src)) {
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
 * @param  {any}   root
 * @param  {Function} cb
 * @param  {boolean}   immutable
 * @return {any}
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

    const state = {
      node,
      node_,
      path: [].concat(path),
      parent: parents[parents.length - 1],
      parents,
      key: path.slice(-1)[0],
      isRoot: path.length === 0,
      level: path.length,
      circular: null,
      /**
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
       * @param  {boolean} stopHere
       * @return {void}
       */
      delete(stopHere) {
        delete state.parent.node[state.key]
        if (stopHere) keepGoing = false
      },
      /**
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
      before(fn) {
        modifiers.before = fn
      },
      after(fn) {
        modifiers.after = fn
      },
      pre(fn) {
        modifiers.pre = fn
      },
      post(fn) {
        modifiers.post = fn
      },
      stop() {
        alive = false
      },
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
      if (isPureObj(state.node)) {
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
    if (isPureObj(state.node) && !state.circular) {
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
 * @TODO   does not respect ObjectDescriptors
 * @NOTE   wicked ternary
 * @param  {any} src
 * @return {any}
 */
function copy(src) {
  // require('fliplog').data(src).bold('copying').echo()
  if (isPureObj(src)) {
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
