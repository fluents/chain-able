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
const isBoolean = require('./is/boolean')
const isNumber = require('./is/number')
const isString = require('./is/string')
const isDate = require('./is/date')
const isUndefined = require('./is/undefined')
const isNullOrUndefined = require('./is/nullOrUndefined')
const isArray = require('./is/array')
const isMap = require('./is/map')
const isSet = require('./is/set')
const isSymbol = require('./is/symbol')
const isAsyncish = require('./is/asyncish')
const isFunction = require('./is/function')
const isObj = require('./is/obj')
const ObjectKeys = require('./util/keys')
const hasOwnProperty = require('./util/hasOwnProperty')
const toS = require('./is/toS')
const reduce = require('./reduce')
const toarr = require('./to-arr')
const dot = require('./dot')
// const props = require('./util/props')
// const emptyTarget = require('./dopemerge/emptyTarget')

// const ENV_DEBUG = true
const ENV_DEBUG = false

function isPrimitive(node) {
  return (
    isNullOrUndefined(node) ||
    isString(node) ||
    isNumber(node) ||
    isBoolean(node)
  )
}
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

const isObjOrArr = x => isObj(x) || isArray(x)

// need some thin wrapper around values to go up and down path
//
//
// const ValueObject = {
//   node: value,
//   kind: typeof,
//   isRoot: false,
//   isLeaf: false,
//   isPrimitive: false,
//   branches: [],
//   isFirst: false,
//   isLast: false,
//   parent: {},
// }
//
// class It {
//   constructor(x) {
//     // this.tree = {
//     // parent: {},
//     // }
//
//     // this.root = x
//
//     // this.previous = x
//     this.current = x
//
//     this.depth = 0
//     this.all = new Set()
//     // this.path
//     // this.key
//   }
//
//   get node() {
//     return this.current
//   }
//
//   addBranch() {}
//
//   // for updating
//   branchHead() {}
//
//   goUp() {
//     this.depth--
//   }
//   goDown(current) {
//     this.parent = this.current
//     this.depth++
//     this.current = current
//   }
//   // not needed but conceptually
//   // goNext() {}
//
//   find() {}
//   path() {}
// }
// const it = x => new It(x)

// @TODO make this a trie OR a linked-list
const makeIterator = () => {
  // always cleared when done anyway
  // const parents = new Map()
  const parents = new Set()
  // const parentKeys = []
  const hasParent = (depth, value) => {
    if (!isObjOrArr(value)) return false

    // return Array.from(parents.values()).indexOf(value) !== -1
    // const keys = Array.from(parents.keys())
    // console.log('___pk', {keys})
    // for (let k = 0; k < keys.length; k++) {
    //   const key = keys[k]
    //   const matches =
    //     depth.includes(key) || (key.includes && key.includes(depth))
    //   console.log({key, matches, depth})
    //   // .has(value)
    //   if (matches) {
    //     let has = false
    //     parents.get(key).forEach(haz => {
    //       if (value === haz) has = true
    //     })
    //     return has
    //   }
    // }

    // for (let i = depth; i >= depth; i--) {
    // if (parents.get(i).has(value)) return true
    // }

    // return false
    return parents.has(value)
  }
  const addParent = (depth, value) => {
    if (!isObjOrArr(value)) return
    if (parents.size >= 100) parents.clear()

    // if (!parents.has(depth)) parents.set(depth, new Set())
    // parents.get(depth).add(value)

    parents.add(value)
  }
  // (isObjOrArr(value) ? parents.add(value) : parents.add(value))
  // const removeLastParent = () => parents.delete(lastParent)
  const clearParents = (depth, value) => parents.clear()

  // parents.forEach(parent => (parent.has(value) ? parent.delete(value) : null))
  // parents.delete(value)
  const removeParent = (depth, value) => parents.delete(value)

  // const pps = []
  // const ppHas = value => {
  //   for (let i = 0; i < pps.length; i++) {
  //     if (pps[i] === value) {
  //       return true
  //     }
  //   }
  // }
  // const ppAdd = value => pps.push(value)
  // const ppPop = () => pps.pop()

  /**
   * @param       {Traversable} iteratee
   * @param       {Object | undefined} [config] wip config for things such as events or configs
   * @constructor
   */
  function ItOrAteOr(iteratee, config) {
    this.iteratee = iteratee
    this.parent = iteratee
    this.root = iteratee
    // this.tree = it(iteratee)

    this.path = []

    // @HACK @FIXME @TODO remove, not needed, compat
    // this.path = this.path

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

  ItOrAteOr.prototype.forEach = function iterateForEach(cb) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('\n forEach \n')
    }

    const result = this.iterate(cb)

    // TODO: HERE, WHEN THIS IS ADDED, CAN BREAK SOME TESTS? SCOPED PARENTS MAP?
    this.done()

    return result
  }

  /**
   * @modifies this.isAlive = false
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
  ItOrAteOr.prototype.stop = function stop() {
    this.isAlive = false
    // this.done()
  }

  /**
   * @TODO skip 1 branch
   * @return {void}
   */
  ItOrAteOr.prototype.skip = function skip() {
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
  ItOrAteOr.prototype.checkIteratable = function check(node) {
    this.isIteratable = isIteratable(node)
    // just put these as an array?
    if (isTrue(this.isIteratable)) {
      // native = leaf if not root
      this.isLeaf = false

      if (hasParent(this.path.join('.'), node)) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('circular___________', {node, path: this.path})
        }
        this.isCircular = true
      }
      // else if (ppHas(node)) {
      //   if (ENV_DEBUG) {
      //     console.log('PPHAS!!!!!!!!!!!', {node, path: this.path})
      //   }
      //   this.isCircular = true
      // }
      else {
        addParent(this.path.join('.'), node)
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
   * @since 2.0.0
   * @param {undefined | Object} [arg] optional obj to use, defaults to this.iteratee
   * @return {void}
   *
   * @example
   *
   *    traverse([0]).forEach((key, val, it) => it.remove())
   *    //=> []
   *
   */
  ItOrAteOr.prototype.remove = function removes(arg) {
    let obj = arg || this.iteratee

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log({parent: this.parent})
    }

    removeParent(obj)

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
   * @since 2.0.0
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
  ItOrAteOr.prototype.update = function update(value) {
    // if (!isUndefined(this.iteratee)) {
    //   this.iteratee[this.key] = value
    // }
    // // dot.set(this.iteratee, this.key, value)
    dot.set(this.root, this.path, value)
    // dot.set(this.iteratee, this.path, value)

    // dot.set(this.iteratee, this.key, value)
    // console.log({traverser: this})

    // @NOTE think about this more, but updating can change structure
    // if (isTrue(clear)) clearParents()
  }

  ItOrAteOr.prototype.clear = clearParents

  ItOrAteOr.prototype.done = function done() {
    // throw new Error('how')
    // this.iteratee = undefined
    // this.key = undefined
    // this.isCircular = undefined
    // this.isLeaf = undefined
    // this.isAlive = undefined
    // this.path = undefined

    clearParents()
  }

  /* prettier-ignore */
  /**
   * @TODO handler for Set & Map so they can be skipped or traversed, for example when cloning...
   * @TODO add hook to add custom checking if isIteratable
   * @TODO deal with .isRoot if needed
   * @TODO examples with clone and stop
   *
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
  ItOrAteOr.prototype.iterate = function iterate(on) {
    // require('fliplog').bold(this.path.join('.')).data(parents).echo()
    // require('fliplog').bold(this.path.join('.')).data(parents.keys()).echo()

    /* istanbul ignore next : dev */
    if (ENV_DEBUG) {
      console.log('\n...iterate...\n')
    }

    if (parents.size >= 100) {
      clearParents()
    }

    if (this.isAlive === false) {
      /* istanbul ignore next : dev */
      if (ENV_DEBUG) {
        console.log('DEAD')
      }

      return this.done()
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
    addParent(this.depth, node)
    // ppAdd(node)

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
    else if (nodeIsObj && ObjectKeys(node).length === 0) {
      // eqValue(node, )
      on.call(this, this.key, node, this)
      this.iteratee = node
    }
    // --------------------

    else if (nodeIsObj || nodeIsArray) {
      this.depth = this.path.length

      // if (isTrue(this.isRoot)) this.isRoot = false

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

          return this.done()
        }

        // @NOTE: look above add prev add parent
        // addParent(this.depth, node)
        // ppAdd(node)


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
        }


        // console.log('----------------- post ----------', node)


        // @event
        if (!isUndefined(this.onPost)) {
          // eslint-disable-next-line no-useless-call
          this.onPost(this)
        }

        // cleanup, backup 1 level
        this.path.pop()

        // ppPop()
        removeParent(node)
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

  // is smaller
  // function onEvent(property) {
  //   return function(fn) {
  //     this[property] = function
  //   }
  // }
  // when it's some sort of itertable object, loop it further
  // @TODO: need to handle these better without totally messing with bad scope
  ItOrAteOr.prototype.pre = function(fn) {
    this.onPre = fn
  }
  ItOrAteOr.prototype.post = function(fn) {
    this.onPost = fn
  }
  ItOrAteOr.prototype.before = function(fn) {
    this.onBefore = fn
  }
  ItOrAteOr.prototype.after = function(fn) {
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
  ItOrAteOr.prototype.clone = clone

  /**
   * @todo ugh, how to clone better with *recursive* objects?
   * @param  {any} src wip
   * @return {any} wip
   */
  ItOrAteOr.prototype.copy = copy

  // end factory
  return ItOrAteOr
}

/* prettier-ignore */
function copy(src) {
  if (isObjNotNull(src)) {
    let dst

    // if (isPrimitive(src)) {
    // if (isNullOrUndefined(src)) {
    //   dst = src
    // }

    // @TODO @IMPORTANT @FIXME @!IMPORTANT - COVER THIS OR NOT?
    // for string value number boolean objects...
    // if (isString(src)) {
    //   dst = src + ''
    // }
    // else if (isNumber(src)) {
    //   dst = src + 0
    // }
    // else if (isBoolean(src)) {
    //   dst = !!src
    // }
    // else

    // lists... <- needs to have dot-prop support on Map/Set
    // if (isMap(src)) {
    //   dst = new Map()
    //   const obj = reduce(src)
    //   // src.clear()
    //   ObjectKeys(obj).forEach(key => dst.set(key, obj[key]))
    //   return dst
    // }
    // else if (isSet(src)) {
    //   dst = new Set()
    //   // could clone here too
    //   const obj = toarr(src)
    //   // src.clear()
    //   obj.forEach(value => dst.add(value))
    //   return dst
    // }

    // ------
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
      dst = new Error(src.message)
      dst.stack = src.stack
    }
    else {
      dst = Object.create(Object.getPrototypeOf(src))
    }

    // @TODO: copy descriptor
    // eslint-disable-next-line
      for (var prop in src) {
      dst[prop] = src
      // const desc = Object.getOwnPropertyDescriptor(src, prop)
      // Object.defineProperty(dst, prop, desc)
    }
    return dst
  }
  else {
    // require('fliplog').red('is NOT OBJ').echo()
    return src
  }
}

function clone(arg) {
  const obj = isUndefined(arg) ? this.iteratee : arg
  if (isPrimitive(obj)) return obj
  let cloned = isArray(obj) ? [] : {}
  let current = cloned

  traverse(obj).forEach((key, value, traverser) => {
    // t.isRoot
    if (key === null) return
    // require('fliplog').bold(key).data({value, traverser, current}).echo()
    // if (isSet(value)) {
    //   const copied = copy(value)
    //   dot.set(current, traverser.path, copied)
    //
    //   // require('fliplog')
    //   //   .red('copy:')
    //   //   .data({value, path: traverser.path, current, copied})
    //   //   .exit()
    // }

    let copied = copy(value)
    if (traverser.isCircular && isArray(value)) copied = value.slice(0)
    dot.set(current, traverser.path, copied)

    // current[key] = traverser.copy(value)
    // if (isObj(value)) current = current[key]
  })

  return cloned
}

/* prettier-ignore */
/**
 * @since 4.1.0
 *
 * @protected
 * @TODO !!!!!! USE ENUM FLAGS ON LOOSE TO ALLOW MORE CONFIG FOR ==, COMPARATOR, VALUEOF, walk proto (check ownProps...)...
 *
 * @param  {*} x compare to y
 * @param  {*} y compare to x
 * @param  {boolean | number} [loose=false] use == checks when typof !=
 * @return {boolean}
 *
 * @example
 *    eqValue(1, 1) //=> true
 *    eqValue('1', 1) //=> false
 *    eqValue('1', 1, true) //=> true
 *    eqValue({}, {}) //=> true
 */
function eqValue(x, y, loose) {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('eqValue', {x, y, loose})
  }

  // if (x === y) {
  //   if (ENV_DEBUG) {
  //     console.log('===', {x, y})
  //   }
  //   // noop
  // }
  // else

  if (isNullOrUndefined(x) || isNullOrUndefined(y)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('null or undef !=', {x, y})
    }

    if (x !== y) {
      return false
    }
  }
  else if (typeof x !== typeof y) {
    // eslint-disable-next-line
    if (isTrue(loose) && x == y) {
      // ignore
    }
    else {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('typeof !=', {x, y})
      }

      return false
    }
  }
  else if (isObjNotNull(x)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('isObjNotNull', {x})
    }

    // if (isArray(x)) {
    //   if (x.length !== y.length) {
    //     return false
    //   }
    // }

    // @NOTE .toString will be covered for functions and regexes in objStrict
    if (isRegExp(x) || isRegExp(y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('regexp', {x, y})
      }

      if (!x || !y || x.toString() !== y.toString()) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('regexp !=', {x, y})
        }

        return false
      }
    }
    else if (isDate(x) || isDate(y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('dates', {x, y})
      }

      if (!isDate(x) || !isDate(y) || x.getTime() !== y.getTime()) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('!= dates', {x, y})
        }

        return false
      }
    }
    else if (isError(x) || isError(y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('isError', {x, y})
      }

      if (!isError(x) || !isError(y) || x.stack !== y.stack) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('!= errors', {x, y})
        }

        return false
      }
    }
    else if (isArray(x) && !isArray(y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('isArray(x) || isArray(y)!')
      }

      return false
    }
    else if (!isArray(x) && isArray(y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('!isArray(x) && isArray(y):')
      }

      return false
    }
    else {
      // @NOTE it will traverse through values if they are == here
      const xKeys = ObjectKeys(x)
      const yKeys = ObjectKeys(y).length

      if (xKeys.length !== yKeys) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('!= obj key length', {xKeys, yKeys})
        }

        return false
      }

      for (let k = 0; k < xKeys.length; k++) {
        if (!hasOwnProperty(y, xKeys[k])) {
          /* istanbul ignore next: dev */
          if (ENV_DEBUG) {
            console.log('!= obj property', {y, val: xKeys[k]})
          }

          return false
        }
      }
    }
  }
  else if (toS(x) === toS(y) && x !== y) {
    // isString(x) || isBoolean(x) || isNumber(x) || isIterator(x)
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('same str types - diff values', {s: toS(x), x, y})
    }

    return false
  }
  else if (toS(x) !== toS(y)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('diff str types', {x: toS(x), y: toS(y)})
    }

    return false
  }

  // go deeper
  else if (isFunction(x) || isFunction(y)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('isFunction(x) && isFunction(y):')
      console.log(x.toString())
      console.log(y.toString())
    }

    if (!x || !y || x.toString() !== y.toString()) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('x.toString() !== y.toString()', x.toString() !== y.toString())
      }
      return false
    }
    else {
      return true
    }
  }

  else if (isObj(x) && isObj(y)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('isObj(x) && isObj(y):')
    }

    return false
  }
  // else {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('eqeqeq:', {[toS(x) + 'X']: x, [toS(y) + 'Y']: y})
  }
  return true
  // }
}

/* prettier-ignore */
function eq(a, b, loose, scoped) {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('\n')
  }

  let equal = true
  let node = b

  // @TODO can be helpful? for left to right in 1 traverse for faster eq?
  // let _node = b

  const instance = traverse(a)
  const notEqual = () => {
    // throw new Error()
    equal = false
    instance.stop()
  }

  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('eq?')
  }

  instance.forEach(function(key, y, traverser) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('eq: iterating:')
    }

    // BREAKS ANY BUT OBJ
    // if (!isObjLoose(node)) {
    //   node = _node
    //   return notEqual()
    // }
    // else {
    //   _node = node
    // }

    if (isObjNotNull(node))  {
      // _node = node
      node = node[traverser.key]
    }

    // node = node ? node[traverser.key] : node

    let x = node
    x = dot.get(b, traverser.path.join('.'), b)

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log({key, y, x, a, b})
    }

    const eqv = eqValue(x, y, loose)

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log({eqv})
    }

    if (eqv === false) {
      // equal
      notEqual()
    }
    // }
  })

  if (equal === false && scoped === false) return eq(b, a, loose, true)
  else return equal
}

function traverse(value) {
  const ItOrAteOr = makeIterator()
  return new ItOrAteOr(value)
}

module.exports = traverse
module.exports.eq = eq
module.exports.clone = clone
module.exports.copy = copy
