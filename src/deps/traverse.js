const isObjStrict = require('./is/objStrict')
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
// const isFalse = require('./is/false')
const isSet = require('./is/set')
const isSymbol = require('./is/symbol')
const isAsyncish = require('./is/asyncish')
const isFunction = require('./is/function')
const isNative = require('./is/native')
const isObj = require('./is/obj')
const ObjectKeys = require('./util/keys')
const hasOwnProperty = require('./util/hasOwnProperty')
const isObjLoose = require('./is/objLoose')
const isEqEq = require('./is/eqeq')
const toS = require('./is/toS')
const reduce = require('./reduce')
const toarr = require('./to-arr')
const dot = require('./dot')
const props = require('./util/props')

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
  const notIteratable =
    isPrimitive(node) ||
    isRegExp(node) ||
    isDate(node) ||
    isSymbol(node) ||
    isAsyncish(node) ||
    // isNative(node) ||
    isError(node)

  const isIteratables = isObj(node) || isArray(node)
  if (isIteratables) return true
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

const makeIterator = () => {
  // always cleared when done anyway
  const parents = new Set()
  const hasParent = (depth, value) => isObjOrArr(value) && parents.has(value)
  const addParent = (depth, value) => {
    if (!isObjOrArr(value)) return
    if (parents.size >= 100) parents.clear()
    parents.add(value)
  }
  // (isObjOrArr(value) ? parents.add(value) : parents.add(value))
  // const removeLastParent = () => parents.delete(lastParent)
  const clearParents = (depth, value) => parents.clear()
  const removeParent = (depth, value) => parents.delete(value)

  // should be inheriting
  function ItOrAteOr(iteratee, config) {
    this.iteratee = iteratee
    this.parent = iteratee

    this.paths = []

    // @HACK @FIXME @TODO remove, not needed, compat
    this.path = this.paths

    this.key = undefined

    // @TODO: benchmark with just 1 set
    // this.parents = new Set()

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
    if (ENV_DEBUG) {
      console.log('\n forEach \n')
    }

    const result = this.iterate(cb)

    // TODO: HERE, WHEN THIS IS ADDED, CAN BREAK SOME TESTS? SCOPED PARENTS MAP?
    this.done()

    return result
  }
  ItOrAteOr.prototype.stop = function stop() {
    this.isAlive = false
    // this.done()
  }

  // @TODO skip 1 branch
  ItOrAteOr.prototype.skip = function skip() {
    this.skip = true
  }

  /* prettier-ignore */
  ItOrAteOr.prototype.checkIteratable = function check(node) {
    this.isIteratable = isIteratable(node)
    // just put these as an array?
    if (isTrue(this.isIteratable)) {
    // native = leaf if not root
      this.isLeaf = false

      if (hasParent(this.depth, node)) {
        this.isCircular = true
      }
      else {
        addParent(this.depth, node)
        this.isCircular = false
      }
    }
    else {
    // ---
      this.isLeaf = true
    // require('fliplog').data(node).echo()
    }
  }

  /* prettier-ignore */
  /**
 * Remove the current element from the output.
 * If the node is in an Array it will be spliced off.
 * Otherwise it will be deleted from its parent.
 * @return {void}
 * @example
 *
 *    traverse([0]).forEach((key, val, it) => it.remove())
 *    //=> []
 *
 */
  ItOrAteOr.prototype.remove = function removes(arg) {
    let obj = arg || this.iteratee

    console.log({parent: this.parent})
    removeParent(obj)

    if (isUndefined(obj)) {
      throw new Error('why?')
    }
    else if (isArray(obj)) {
      if (ENV_DEBUG) {
        console.log('traverse:remove:array', obj, this.key)
      }

      obj.splice(this.key, 1)
    }
    else if (isObjStrict(obj)) {
      if (ENV_DEBUG) {
        console.log('traverse:remove:obj', this.key)
      }

      delete obj[this.key]
    }

    if (isObjStrict(this.parent)) {
      delete this.parent[this.key]
      if (ENV_DEBUG) {
        console.log('traverse:remove:parent', this.key)
      }
    }
    if (isObjStrict(this.iteratee)) {
      delete this.iteratee[this.key]
      if (ENV_DEBUG) {
        console.log('traverse:remove:iteratee', this.key)
      }
    }
    if (ENV_DEBUG) {
      console.log('traverse:remove:', this.key, {obj, iteratee: this.iteratee})
    }
  }
  ItOrAteOr.prototype.update = function update(value) {
    if (!isUndefined(this.iteratee)) {
      this.iteratee[this.key] = value
    }
  }

  ItOrAteOr.prototype.done = function done() {
    // throw new Error('how')
    // this.iteratee = undefined
    // this.key = undefined
    // this.isCircular = undefined
    // this.isLeaf = undefined
    // this.isAlive = undefined
    // this.paths = undefined

    clearParents()
  }

  // @TODO deal with .isRoot if needed
  /* prettier-ignore */
  ItOrAteOr.prototype.iterate = function iterate(on) {
    if (ENV_DEBUG) {
      console.log('\n...iterate...\n')
    }

    if (parents.size >= 30) {
      clearParents()
    }

    if (this.isAlive === false) {
      if (ENV_DEBUG) {
        console.log('DEAD')
      }

      return this.done()
    }

    let node = this.iteratee

    if (isMap(node)) {
      node = reduce(node)
    }
    else if (isSet(node)) {
      node = toarr(node)
    }

    addParent(this.depth, node)

    const nodeIsArray = isArray(node)
    const nodeIsObj = nodeIsArray || isObj(node)

    // ---

    // if (!isUndefined) this.before(node)
    if (ENV_DEBUG) {
      // const str = require('pretty-format')({nodeIsObj, nodeIsArray, node})
      // console.log(str)
      console.log({nodeIsObj, nodeIsArray, node})
    }
    if (ENV_DEBUG) {
      // require('fliplog').verbose(1).data({nodeIsObj, nodeIsArray, node}).echo()
    }

    if (isTrue(this.isRoot)) {
      on.call(this, null, node, this)
      this.isRoot = false
    }

    // console.log(node, parents)

    // --------------------
    // @TODO: IF OBJWITHOUTKEYS, IF ARRAY WITHOUT LENGTH...
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
      this.depth = this.paths.length

      // if (isTrue(this.isRoot)) this.isRoot = false

      // @TODO SAFETY WITH `props(node)` <- fixes Error
      let keys = nodeIsArray ? node : ObjectKeys(node)

      if (ENV_DEBUG) {
        console.log({keys})
      // require('fliplog').verbose(1).data({keys}).echo()
      }

      // @event
      if (!isUndefined(this.before)) this.before()

      this.checkIteratable(node)
      // require('fliplog').verbose(1).data(this).echo()

      // @loop
      for (let key = 0; key < keys.length; key++) {
      // --- safety ---
        if (this.isAlive === false) {
          if (ENV_DEBUG) {
            console.log('DEAD')
          }
          return this.done()
        }
        addParent(this.depth, node)

        // @event
        if (!isUndefined(this.pre)) this.pre()

        // ----- setup our data ----

        // to make it deletable
        this.parent = node

        this.key = nodeIsArray ? key : keys[key]

        if (ENV_DEBUG) {
          console.log('alive', this.key)
        }

        const value = node[this.key]

        this.checkIteratable(value)
        // addParent(value)

        // @NOTE: can go forward-backwards if this is after the nested iterating
        this.paths.push(this.key)
        this.depth = this.paths.length

        // ----- continue events, loop deeper when needed ----

        on.call(this, this.key, value, this)

        // require('fliplog').data(parents).echo()
        // require('fliplog').data(this).echo()

        // handle data
        if (isTrue(this.isCircular)) {
          if (ENV_DEBUG) {
            console.log('(((circular)))', this.key)
          }
          // on.call(this, this.key, value, this)
          this.paths.pop()
          // break
          continue
          // return
        }

        // &&
        if (isTrue(this.isIteratable)) {
          if (ENV_DEBUG) {
            console.log('(((iteratable)))', this.key)
          }

          this.iteratee = value
          this.iterate(on)
        }

        // @event
        if (!isUndefined(this.post)) this.post()

        // cleanup, backup 1 level
        this.paths.pop()
        removeParent(node)
      }

      // this.paths.pop()
      this.depth = this.paths.length
    }
    else {
      on.call(this, this.depth, node, this)
    }

    // @NOTE: careful
    removeParent(node)
    // this.parent = this.iteratee // node

    // @event
    if (!isUndefined(this.after)) this.after(node)
    this.paths.pop()

    return this.iteratee
  }

  // when it's some sort of itertable object, loop it further

  // @TODO: need to handle these better without totally messing with bad scope
  // ItOrAteOr.onPre = function(fn) {
  //   this.pre = fn
  // }
  // ItOrAteOr.onPost = function(fn) {
  //   this.post = fn
  // }
  // ItOrAteOr.onBefore = function(fn) {
  //   this.before = fn
  // }
  // ItOrAteOr.onAfter = function(fn) {
  //   this.after = fn
  // }

  // merge with dopemerge?
  ItOrAteOr.prototype.clone = function clone(arg) {
    const obj = this.iteratee || arg
    if (isPrimitive(obj)) return obj
    let cloned = isArray(obj) ? [] : {}
    let current = cloned

    traverse(obj).forEach((key, value, traverser) => {
      if (key === null) return
      current[key] = traverser.copy(value)
      if (isObj(value)) current = current[key]
    })

    return cloned
  }

  // ugh, how to clone better with *recursive* objects?
  /* prettier-ignore */
  ItOrAteOr.prototype.copy = function copy(src) {
    if (isObjStrict(src)) {
      let dst

      // if (isPrimitive(src)) {
      // if (isNullOrUndefined(src)) {
      //   dst = src
      // }
      // for string value number boolean objects...
      if (isString(src)) {
        dst = src + ''
      }
      else if (isNumber(src)) {
        dst = src + 0
      }
      else if (isBoolean(src)) {
        dst = !!src
      }
      // lists...
      else if (isMap(src)) {
        dst = reduce(src)
      }
      else if (isSet(src)) {
        dst = toarr(src)
      }

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
      // dst[prop] = src
        const desc = Object.getOwnPropertyDescriptor(src, prop)
        Object.defineProperty(dst, prop, desc)
      }
      return dst
    }
    else {
    // require('fliplog').red('is NOT OBJ').echo()
      return src
    }
  }
  return ItOrAteOr
}
/**
 * @protected
 * @TODO !!!!!! USE ENUM FLAGS ON LOOSE TO ALLOW MORE CONFIG FOR ==, COMPARATOR, VALUEOF, walk proto (check ownProps...)...
 * @param  {*} x compare to y
 * @param  {*} y compare to x
 * @param  {boolean | number} [loose=false] use == checks when typof !=
 * @return {boolean}
 */
/* prettier-ignore */
function eqValue(x, y, loose) {
  // console.log({node, y})
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
      if (ENV_DEBUG) {
        console.log('typeof !=', {x, y})
      }

      return false
    }
  }
  else if (isObjStrict(x)) {
    if (ENV_DEBUG) {
      console.log('isObjStrict', {x})
    }
    // if (isArray(x)) {
    //   if (x.length !== y.length) {
    //     return false
    //   }
    // }
    // @NOTE .toString will be covered for functions and regexes in objStrict
    if (isRegExp(x) || isRegExp(y)) {
      if (ENV_DEBUG) {
        console.log('regexp', {x, y})
      }

      if (!x || !y || x.toString() !== y.toString()) {
        if (ENV_DEBUG) {
          console.log('regexp !=', {x, y})
        }

        return false
      }
    }
    else if (isDate(x) || isDate(y)) {
      if (ENV_DEBUG) {
        console.log('dates', {x, y})
      }

      if (!isDate(x) || !isDate(y) || x.getTime() !== y.getTime()) {
        if (ENV_DEBUG) {
          console.log('!= dates', {x, y})
        }

        return false
      }
    }
    else if (isError(x) || isError(y)) {
      if (ENV_DEBUG) {
        console.log('isError', {x, y})
      }

      if (!isError(x) || !isError(y) || x.stack !== y.stack) {
        if (ENV_DEBUG) {
          console.log('!= errors', {x, y})
        }

        return false
      }
    }
    else if (isArray(x) && !isArray(y)) {
      if (ENV_DEBUG) {
        console.log('isArray(x) || isArray(y)!')
      }

      return false
    }
    else if (!isArray(x) && isArray(y)) {
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
        if (ENV_DEBUG) {
          console.log('!= obj key length', {xKeys, yKeys})
        }

        return false
      }

      for (let k = 0; k < xKeys.length; k++) {
        if (!hasOwnProperty(y, xKeys[k])) {
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
function eq(a, b, loose, scoped = false) {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('\n')
  }

  let equal = true
  let node = b

  let _node = b

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

    if (isObjStrict(node))  {
      _node = node
      node = node[traverser.key]
    }

    // node = node ? node[traverser.key] : node

    let x = node
    x = dot.get(b, traverser.paths.join('.'), b)

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

// eslint-disable-next-line
// debugger
// const eeeeq = eq(new Error(''), 1)
// console.log(eeeeq)

// -------------------------------------
// -------------------------------------
// -------------------------------------
