// conditionals
/* eslint complexity: "OFF" */

// inlined rollup
/* eslint import/max-dependencies: "OFF" */

// one file
/* eslint max-lines: "OFF" */

// debug conditionals
/* eslint max-depth: "OFF" */

const isObjNotNull = require('./is/objNotNull')
const isRegExp = require('./is/regexp')
const isError = require('./is/error')
const isTrue = require('./is/true')
const isDate = require('./is/date')
const isUndefined = require('./is/undefined')
const isArray = require('./is/array')
const isMap = require('./is/map')
const isSet = require('./is/set')
const isSymbol = require('./is/symbol')
const isAsyncish = require('./is/asyncish')
const isObj = require('./is/obj')
const isPrimitive = require('./is/primitive')
const isNull = require('./is/null')
const ObjectKeys = require('./util/keys')
const reduce = require('./reduce')
const toarr = require('./to-arr')
const dotSet = require('./dot/set')
const emptyTarget = require('./dopemerge/emptyTarget')
const copy = require('./traversers/copy')
const eq = require('./traversers/_eq')
const addPoolingTo = require('./cache/pooler')
// const props = require('./util/props')

// const ENV_DEBUG = require('./env/debug')
// const ENV_DEBUG = true
const ENV_DEBUG = false

function isIteratable(node) {
  // ez ones
  if (isObj(node) || isArray(node)) return true

  const notIteratable =
    isPrimitive(node) ||
    isRegExp(node) ||
    isDate(node) ||
    isSymbol(node) ||
    isAsyncish(node) ||
    // isNative(node) ||
    isError(node)

  if (notIteratable) return false
  else return true

  // if (isNullOrUndefined(node)) {
  // }
  // else if (isString(node)) {
  // }
  // else if (isNumber(node)) {
  // }
  // else if (isBoolean(node)) {
  // }
  // else if (isRegExp(node)) {
  // }
  // else if (isDate(node)) {
  // }
  // else if (isSymbol(node) || isAsyncish(node)) {
  // }
  // else if (isNative(node)) {
  // }
  // else {
  //   return true
  // }
  // return false
}

// function isSpecial(x) {
//   // isPromise(x) ||
//   return isSymbol(x) || isError(x) ||
//   //  || isGenerator(x)
// }

/**
 * {@link https://github.com/wmira/object-traverse/blob/master/index.js }
 * {@link https://www.npmjs.com/browse/keyword/traverse }
 * {@link https://www.npmjs.com/package/tree-walk }
 * {@link https://www.npmjs.com/package/1tree }
 * {@link https://www.npmjs.com/package/pathway }
 * {@link https://www.npmjs.com/package/@mojule/tree }
 *
 * --------------------
 *
 * if needed, clone
 *
 * first things to check are number/string/boolean/null/undefined
 *
 * then check non-iteratables
 * symbol, promise,
 *
 * then check conversions
 * - map, set
 *
 * then check empties
 * - obj
 * - fn
 *
 * -------
 *
 * numbers f-or first/last
 * and as a sort of hash like
 * 1 + 2 + 4 = ISLEAF & ISROOT ?
 *
 * Array
 *
 * Object Function Date Error Map Set
 *
 * String
 * Number NaN Infinity
 * Boolean
 *
 *
 * null undefined
 *
 * Promise Symbol
 *
 * ----
 *
 * @emits before
 * @emits pre
 * @emits post
 * @emits after
 */

/**
 * @class
 * @desc Traverse class, pooled
 * @alias IterAteOr
 * @member Traverse
 * @constructor
 * @since 5.0.0
 *
 * @param {Traversable} iteratee value to iterate, clone, copy, check for eq
 * @param {Object | undefined} [config] wip config for things such as events or configs
 *
 * @extends pooler
 * @see traverse
 * @TODO make this a trie OR a linked-list
 *
 * @example
 *
 *    new Traverse([1])
 *    new Traverse([], {})
 *
 */
function Traverse(iteratee, config) {
  // always cleared when done anyway
  this.parents = new Set()

  this.iteratee = iteratee
  this.parent = iteratee
  this.root = iteratee

  this.path = []
  this.key = undefined
  this.isAlive = true
  this.isCircular = false
  this.isLeaf = false
  this.isRoot = true

  // iterates +1 so start at 0
  this.depth = -1

  // to pass in the events (as commented below) without messing up scope?
  // if (config.on) this.on = config.on
  return this
}

/**
 * @desc find parent,
 *       is there a parent
 *       above the current depth
 *       with the same value,
 *       making it circular?
 *
 * @memberOf Traverse
 * @since 5.0.0
 * @private
 *
 * @param  {number} depth current depth, to find parent >=
 * @param  {parent} value parent value to find
 * @return {boolean} hasParent
 *
 * @example
 *
 *    var obj = {eh: ['eh']}
 *    traverse(obj).addParent(0, obj)
 *
 */
Traverse.prototype.hasParent = function(depth, value) {
  // or array
  if (!isObj(value)) return false
  return this.parents.has(value)
}

/**
 * @desc add parent, to prevent circular iterations
 * @memberOf Traverse
 * @since 5.0.0
 * @private
 *
 * @param  {number} depth current depth, to add parent to >=
 * @param  {parent} value parent value to add
 * @return {void}
 *
 * @example
 *
 *    var obj = {eh: ['eh']}
 *    traverse(obj).addParent(0, obj)
 *
 */
Traverse.prototype.addParent = function(depth, value) {
  if (!isObj(value)) return
  if (this.parents.size >= 100) this.clear()
  this.parents.add(value)
}

/**
 * @desc remove all parents, reset the map
 *
 * @memberOf Traverse
 * @since 5.0.0
 * @private
 *
 * @return {void}
 *
 * @example
 *
 *    var obj = {eh: ['eh']}
 *    traverse(obj).forEach((key, value, t) => {
 *       t.parents
 *       //=> Set([obj])
 *       t.clear()
 *       t.parents
 *       //=> Set[]
 *    })
 *
 */
Traverse.prototype.clear = function() {
  if (!isUndefined(this.parents)) this.parents.clear()
}

/**
 * @memberOf Traverse
 * @since 5.0.0
 * @private
 *
 * @param  {number} depth current depth, to find parents >=
 * @param  {parent} value parent value to remove
 * @return {void}
 *
 * @example
 *
 *    var obj = {eh: ['eh']}
 *    traverse(obj).removeParent(0, obj)
 *
 */
Traverse.prototype.removeParent = function(depth, value) {
  this.parents.delete(value)
}

/**
 * @desc this is the main usage of Traverse
 * @memberOf Traverse
 * @since 3.0.0
 * @version 5.0.0
 *
 * @param  {Function} cb callback for each iteration
 * @return {*} mapped result or original value, depends how it is used
 *
 * @example
 *
 *    traverse([1, 2, 3]).forEach((key, value) => console.log({[key]: value}))
 *    //=> {'0': 1}
 *    //=> {'1': 2}
 *    //=> {'2': 3}
 *
 */
Traverse.prototype.forEach = function iterateForEach(cb) {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('\n forEach \n')
  }

  const result = this.iterate(cb)

  // TODO: HERE, WHEN THIS IS ADDED, CAN BREAK SOME TESTS? SCOPED PARENTS MAP?
  Traverse.release(this)

  return result
}

/**
 * @desc stop the iteration
 * @modifies this.isAlive = false
 * @memberOf Traverse
 *
 * @return {void}
 *
 * @example
 *
 *   traverse({eh: true, arr: []}).forEach((key, val, t) => {
 *      if (isArray(val)) this.stop()
 *   })
 *
 */
Traverse.prototype.stop = function stop() {
  this.isAlive = false
  // this.release()
}

/**
 * @TODO skip 1 branch
 * @version 5.0.0
 * @since 3.0.0
 * @memberOf Traverse
 *
 * @return {void}
 *
 * @example
 *
 *    traverse([1, 2, 3, [4]]).forEach((key, val, t) => {
 *      if (isArray(val)) t.skip()
 *    })
 *
 */
Traverse.prototype.skip = function skip() {
  this.skipBranch = true
}

/* prettier-ignore */
/**
 * @TODO move into the wrapper? if perf allows?
 *
 * @desc checks whether a node is iteratable
 *       @modifies this.isIteratable
 *       @modifies this.isLeaf
 *       @modifies this.isCircular
 *
 * @memberOf Traverse
 * @protected
 *
 * @param  {*} node value to check
 * @return {void}
 *
 * @example
 *
 *    .checkIteratable({eh: true})
 *    //=> this.isLeaf = false
 *    //=> this.isCircular = false
 *    //=> this.isIteratable = true
 *
 *    .checkIteratable({} || [])
 *    //=> this.isLeaf = true
 *    //=> this.isCircular = false
 *    //=> this.isIteratable = false
 *
 *    var circular = {}
 *    circular.circular = circular
 *    .checkIteratable(circular)
 *    //=> this.isLeaf = false
 *    //=> this.isCircular = true
 *    //=> this.isIteratable = true
 *
 */
Traverse.prototype.checkIteratable = function check(node) {
  this.isIteratable = isIteratable(node)
  // just put these as an array?
  if (isTrue(this.isIteratable)) {
    // native = leaf if not root
    this.isLeaf = false
    const path = this.path.join('.')

    if (this.hasParent(path, node)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('circular___________', {node, path: this.path})
      }
      this.isCircular = true
    }
    else {
      this.addParent(path, node)
      this.isCircular = false
    }
  }
  else {
    // ---
    this.isLeaf = true
    this.isCircular = false
  }
}

/* prettier-ignore */
/**
 * Remove the current element from the output.
 * If the node is in an Array it will be spliced off.
 * Otherwise it will be deleted from its parent.
 *
 * @memberOf Traverse
 * @version 5.0.0
 * @since 2.0.0
 *
 * @param {undefined | Object} [arg] optional obj to use, defaults to this.iteratee
 * @return {void}
 *
 * @example
 *
 *    traverse([0]).forEach((key, val, it) => it.remove())
 *    //=> []
 *
 */
Traverse.prototype.remove = function removes(arg) {
  let obj = arg || this.iteratee

  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log({parent: this.parent})
  }

  this.removeParent(obj)

  if (isUndefined(obj)) {
    // throw new Error('why?')
  }
  else if (isArray(obj)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('traverse:remove:array', obj, this.key)
    }

    obj.splice(this.key, 1)
  }
  else if (isObjNotNull(obj)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('traverse:remove:obj', this.key)
    }

    delete obj[this.key]
  }

  if (isObjNotNull(this.parent)) {
    delete this.parent[this.key]

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('traverse:remove:parent', this.key)
    }
  }
  if (isObjNotNull(this.iteratee)) {
    delete this.iteratee[this.key]

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('traverse:remove:iteratee', this.key)
    }
  }

  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('traverse:remove:', this.key, {obj, iteratee: this.iteratee})
  }
}

/**
 * @desc update the value for the current key
 * @version 5.0.0
 * @since 2.0.0
 * @memberOf Traverse
 *
 * @param  {*} value this.iteratee[this.key] = value
 * @return {void}
 *
 * @example
 *
 *    traverse({eh: true})
 *    .forEach((key, val, traverser) => {
 *       if (this.isRoot) return
 *       traverser.update(false)
 *    })
 *    //=> {eh: false}
 *
 */
Traverse.prototype.update = function update(value) {
  dotSet(this.root, this.path, value)
}

/**
 * @desc mark the iteration as done, clear the map
 * @NOTE this recycles the instance in the pooler to re-use allocated objects
 * @memberOf Traverse
 * @private
 * @since 5.0.0
 *
 * @return {void}
 *
 * @see Traverse.iterate
 *
 * @example
 *
 *  traverse([]).destructor()
 *
 */
Traverse.prototype.destructor = function destructor() {
  // throw new Error('how')
  // this.iteratee = undefined
  // this.key = undefined
  // this.isCircular = undefined
  // this.isLeaf = undefined
  // this.isAlive = undefined
  // this.path = undefined

  this.clear()
}

/* prettier-ignore */
/**
 * @TODO handler for Set & Map so they can be skipped or traversed, for example when cloning...
 * @TODO add hook to add custom checking if isIteratable
 * @TODO deal with .isRoot if needed
 * @TODO examples with clone and stop
 *
 * @memberOf Traverse
 * @protected
 * @sig on(key: null | Primitive, val: any, instance: Traverse): any
 *
 * @param  {Function} on callback fn for each iteration
 * @return {*} this.iteratee
 *
 * @example
 *
 *    iterate([])
 *    //=> []
 *    //=> on(null, [])
 *
 * @example
 *
 *    iterate([1])
 *    //=> [1]
 *    //=> on(null, [1])
 *    //=> on('1', 1)
 *
 * @example
 *
 *    //primitive - same for any number, string, symbol, null, undefined
 *    iterate(Symbol('eh'))
 *    //=> Symbol('eh')
 *    //=> on(Symbol('eh'))
 *
 * @example
 *
 *    var deeper = {eh: 'canada', arr: [{moose: true}, 0]}
 *    iterate(deeper)
 *    //=> deeper // returns
 *    //=> on(null, deeper, this) // root
 *
 *    //=> on('eh', 'canada', this) // 1st branch
 *
 *    //=> on('arr', [{moose: true}, 0], this)
 *    //=> on('arr.0', [{moose: true}], this)
 *    //=> on('arr.0.moose', true, this)
 *    //=> on('arr.1', [0], this)
 *
 *
 */
Traverse.prototype.iterate = function iterate(on) {
  /* istanbul ignore next : dev */
  if (ENV_DEBUG) {
    // require('fliplog')
    // .bold(this.path.join('.'))
    // .data(parents.keys())
    // .echo()
    console.log('\n...iterate...\n')
  }

  if (this.isAlive === false) {
    /* istanbul ignore next : dev */
    if (ENV_DEBUG) {
      console.log('DEAD')
    }

    return Traverse.release(this)
  }

  let node = this.iteratee

  // convert to iteratable
  if (isMap(node)) {
    node = reduce(node)
  }
  else if (isSet(node)) {
    node = toarr(node)
  }

  // @TODO: maybe only right before sub-loop
  this.addParent(this.depth, node)

  const nodeIsArray = isArray(node)
  const nodeIsObj = nodeIsArray || isObj(node)

  // ---

  // @event
  if (!isUndefined(this.onBefore)) {
    // eslint-disable-next-line no-useless-call
    this.onBefore(this)
  }

  /* istanbul ignore next : dev */
  if (ENV_DEBUG) {
    // const str = require('pretty-format')({nodeIsObj, nodeIsArray, node})
    // require('fliplog').verbose(1).data({nodeIsObj, nodeIsArray, node}).echo()
    // console.log(node, parents)
    // console.log(str)
    console.log({nodeIsObj, nodeIsArray, node})
  }

  /**
   * call as root, helpful when we
   * - iterate something with no keys
   * - iterate a non-iteratable (symbol, error, native, promise, etc)
   */
  if (isTrue(this.isRoot)) {
    on.call(this, null, node, this)
    this.isRoot = false
  }


  // --------------------
  // IF OBJWITHOUTKEYS, IF ARRAY WITHOUT LENGTH...
  if (nodeIsArray && node.length === 0) {
    on.call(this, this.key, node, this)
    this.iteratee = node
  }
  // @TODO use !objWithKeys ?
  else if (nodeIsObj && ObjectKeys(node).length === 0) {
    // eqValue(node, )
    on.call(this, this.key, node, this)
    this.iteratee = node
  }
  // --------------------

  else if (nodeIsObj || nodeIsArray) {
    this.depth = this.path.length

    // @TODO SAFETY WITH `props(node)` <- fixes Error
    let keys = nodeIsArray ? node : ObjectKeys(node)

    /* istanbul ignore next : dev */
    if (ENV_DEBUG) {
      console.log({keys})
      // require('fliplog').verbose(1).data(this).echo()
    }

    // @event
    // if (!isUndefined(this.onBefore)) this.onBefore()

    // @NOTE: safety here
    // this.checkIteratable(node)

    // const last = keys[keys.length - 1]

    // @loop
    for (let key = 0; key < keys.length; key++) {
      // --- safety ---
      if (this.isAlive === false) {
        /* istanbul ignore next : dev */
        if (ENV_DEBUG) {
          console.log('DEAD')
        }

        return Traverse.release(this)
      }

      // @NOTE: look above add prev add parent
      // addParent(this.depth, node)


      // ----- setup our data ----

      // to make it deletable
      if (node !== this.iteratee) this.parent = node

      this.key = nodeIsArray ? key : keys[key]
      // this.isLast = key === last

      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('alive', this.key)
      }

      // @event
      if (!isUndefined(this.onPre)) {
        // eslint-disable-next-line no-useless-call
        this.onPre(this)
      }


      const value = node[this.key]

      this.checkIteratable(value)
      // addParent(value)
      const pathBeforeNesting = this.path.slice(0)

      // @NOTE: can go forward-backwards if this is after the nested iterating
      this.path.push(this.key)
      this.depth = this.path.length

      // ----- continue events, loop deeper when needed ----

      on.call(this, this.key, value, this)

      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        // require('fliplog').data(parents).echo()
        // require('fliplog').data(this).echo()
      }

      // handle data
      if (isTrue(this.isCircular)) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('(((circular)))', this.key)
        }

        // on.call(this, this.key, value, this)
        // this.path.pop()
        this.path = pathBeforeNesting

        // this.isCircular = false
        // break
        continue
        // return
      }


      // &&
      if (isTrue(this.isIteratable)) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('(((iteratable)))', this.key)
        }

        this.iteratee = value
        this.iterate(on)
        this.path = pathBeforeNesting
      }

      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        if (this.isIteratable === false) {
          console.log('not iteratable', this.key)
        }

        console.log('----------------- post ----------', node)
      }

      // @event
      if (!isUndefined(this.onPost)) {
        // eslint-disable-next-line no-useless-call
        this.onPost(this)
      }

      // cleanup, backup 1 level
      this.path.pop()

      this.removeParent(node)
    }

    // this.path.pop()
    this.depth = this.path.length
  }
  else {
    // this.isLast = false
    on.call(this, this.depth, node, this)
  }

  // @NOTE: careful
  // removeParent(node)

  // @NOTE: just for .after ?
  this.iteratee = node

  // @event
  if (!isUndefined(this.onAfter)) {
    // eslint-disable-next-line no-useless-call
    this.onAfter(this)
  }

  this.path.pop()

  return this.iteratee
}

// is smaller, but probably slower
// function onEvent(property) {
//   return function(fn) {
//     this[property] = function
//   }
// }

// when it's some sort of itertable object, loop it further
// @TODO: need to handle these better without totally messing with bad scope
Traverse.prototype.pre = function(fn) {
  this.onPre = fn
}
Traverse.prototype.post = function(fn) {
  this.onPost = fn
}
Traverse.prototype.before = function(fn) {
  this.onBefore = fn
}
Traverse.prototype.after = function(fn) {
  this.onAfter = fn
}

// -----------------------

/**
 * @TODO merge with dopemerge?
 * @TODO needs tests converted back for this (observe tests do cover somewhat)
 *
 * @param  {*} arg defaults to this.iteratee
 * @return {*} cloned
 *
 * @example
 *
 *   var obj = {}
 *   var cloned = traverse().clone(obj)
 *   obj.eh = true
 *   eq(obj, cloned)
 *   //=> false
 *
 */
Traverse.prototype.clone = clone

/**
 * @todo ugh, how to clone better with *recursive* objects?
 * @param  {any} src wip
 * @return {any} wip
 */
Traverse.prototype.copy = copy

/**
 * @desc clone any value
 * @version 5.0.0
 * @since 4.0.0
 * @memberOf Traverse
 * @extends copy
 * @extends Traverse
 *
 * @param  {*} arg argument to clone
 * @return {*} cloned value
 *
 * @see dopemerge
 * @example
 *
 *    var obj = {eh: true}
 *    clone(obj) === obj //=> false
 *
 *    var obj = {eh: true}
 *    var obj2 = clone(obj)
 *    obj.eh = false
 *    console.log(obj2.eh) //=> true
 *
 */
function clone(arg) {
  const obj = isUndefined(arg) ? this.iteratee : arg
  if (isPrimitive(obj)) return obj
  let cloned = emptyTarget(obj)
  let current = cloned

  traverse(obj).forEach((key, value, traverser) => {
    // t.isRoot
    if (isNull(key)) return

    let copied = copy(value)
    if (traverser.isCircular && isArray(value)) copied = value.slice(0)
    dotSet(current, traverser.path, copied)

    // current[key] = traverser.copy(value)
    // if (isObj(value)) current = current[key]
  })

  return cloned
}

// @TODO could just have traverse = Traverse.getPooled ?
addPoolingTo(Traverse)
function traverse(value) {
  return Traverse.getPooled(value)
}

module.exports = traverse
module.exports.eq = eq(traverse)
module.exports.clone = clone
module.exports.copy = copy
