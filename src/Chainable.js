/* eslint dot-notation: "OFF" */

const ENV_DEVELOPMENT = require('./deps/env/dev')
const SymbolIterator = require('./deps/symbols/iterator')
const SymbolInstance = require('./deps/symbols/instance')
const SymbolPrimitive = require('./deps/symbols/primitive')
const isPrototypeOf = require('./deps/is/prototypeOf')
const isMap = require('./deps/is/map')
const isSet = require('./deps/is/set')
const isNull = require('./deps/is/null')
const isUndefined = require('./deps/is/undefined')
const isString = require('./deps/is/string')
const isFunction = require('./deps/is/function')
const isFalse = require('./deps/is/false')
const ownPropertyIs = require('./deps/is/ownPropertyIs')
const noop = require('./deps/util/noop')
const ObjectKeys = require('./deps/util/keys')
const ObjectDefine = require('./deps/util/define')
const ignored = require('./deps/meta/ignored')
const castSetToArray = require('./deps/cast/setToArray')
const ArrayFrom = require('./deps/util/from')
const keyValueToIterator = require('./deps/cast/keyValueToIterator')
const castIteratorToArray = require('./deps/cast/iteratorToArray')
const hasOwnPropertyFlipped = require('./deps/flipped/hasOwnPropertyFlipped')
const preAllocate = require('./deps/array/preAllocate')
const when = require('./deps/fp/when')
const composer = require('./compose/composer')

const hasStore = hasOwnPropertyFlipped('store')
const hasDestructor = hasOwnPropertyFlipped('destructor')

// @TODO change from `||` to if else
const shouldClear = (key, property) =>
  !ignored(key) &&
  (isMap(property) || isSet(property) || hasStore(property))

const hasConstructMethod = ownPropertyIs('construct', isFunction)
const hasDestructorMethod = ownPropertyIs('destructor', isFunction)

// @TODO would just be `always(prop(name))`
function valueMethod(name) {
  return function() {
    return this[name]
  }
}

// const SymbolFor = x => x // Symbol.for
// const ChainSymbol = SymbolFor('⛓')
// const ChainExtendedSymbol = SymbolFor('🍬')

// @TODO add back option to send args to parent
const ComposeChainable = (Target, parentArgs) => {
  /* istanbul ignore next: dev */
  if (ENV_DEVELOPMENT) {
    if (!Target || !Target.prototype) {
      console.log({Target})
      // throw new TypeError('did not have a super class / target base')
    }
  }

  /**
   * @desc Trait class that can inherit any class passed into compose, extended by ChainedMap & ChainedSet
   *
   * @member Chainable
   * @class Chainable
   * @category Chainable
   * @type {Chainable}
   *
   * @prop {Chainable | any} parent
   * @prop {string} className
   *
   * {@link https://github.com/iluwatar/java-design-patterns/tree/master/chain chain-pattern}
   * @see {@link chain-pattern}
   *
   * @see ChainedMap
   * @see ChainedSet
   *
   * @tests Chainable
   * @types Chainable
   *
   */


  /**
   * @since 0.0.1
   * @memberOf Chainable
   *
   * @param {Chainable | any | ParentType} parent ParentType
   * @constructor
   *
   * @example
   *
   *    class ChainedMap extends Chainable {}
   *    const map = new ChainedMap()
   *    map.className
   *    //=> ChainedMap
   *
   */

  // var Chainable = (function(superClass) {
  //   console.log('@TODO!!! ADD POOLED CACHE, ADD DESTRUCTOR, DESTRUCTOR NEEDS TO CALL META')
  //   // Chainable,
  //   // console.log(superClass)
  //   function _Chainable(parent) {
  //     console.log({parent, superClass})
  //     if (isFunction(superClass)) {
  //       console.log('super is fn', {superClass, parent})
  //       if (isUndefined(parentArgs)) {
  //         superClass.call(this, parent)
  //       }
  //       else {
  //         superClass.call(this)
  //       }
  //     }

  //     // @TODO remove this if
  //     // if (parent)
  //     if (hasConstructMethod(this)) this.construct(parent)
  //     // .bind(this, true)
  //     if (!hasDestructor(this)) this.destructor = this.clear
  //     this.className = this.constructor.name
  //     this.parent = parent
  //     // @NOTE needed by babel & ts, buble is not-compat
  //     return this
  //   }
  //   Object.defineProperty(_Chainable, ChainSymbol, {value: ChainSymbol})
  //   // _Chainable[ChainSymbol] = ChainSymbol
  //   return _Chainable
  //   // if (isUndefined(superClass)) {
  //   //   ChainableObject.create(Parent)
  //   // }
  // })

  // constructor(parent) {
  //   if (isUndefined(parentArgs)) super()
  //   else super(parent)
  //
  //   // @TODO remove this
  //   if (parent) this.parent = parent
  //   if (hasConstructMethod(this)) this.construct(parent)
  //
  //   this.className = this.constructor.name
  //   this.destructor = this.clear // .bind(this, true)
  //
  //   // @NOTE needed by babel & ts, buble is not-compat
  //   return this
  // }

  class Chainable extends Target {
    constructor(parent) {
      super()

      if (hasConstructMethod(this)) this.construct(parent)
      this.className = this.constructor.name
      this.parent = parent
    }
  }

  Chainable.prototype.destructor = function() {
    if (hasDestructorMethod(Target.prototype)) {
      Target.prototype.destructor.call(this)
    }
    this.clear()
    this.parent = undefined
  }

  // pre-initialize type && allocation?
  Chainable.prototype.className = Chainable.constructor.name
  // Chainable.prototype.construct = noop
  // Chainable.prototype.destructor = noop

  // @TODO
  // https://github.com/facebook/immutable-js/blob/master/src/Hash.js
  // http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  // observe on every `set` ?
  Chainable.hashCode = function() {
    // this.store.size
    // this.className
  }


  /**
   * @desc Iterator for looping values in the store
   *
   * @memberOf Chainable
   * @since 0.5.0
   * @version 5.0.0 <- uses.keys > keys(entries())
   *
   * @type {generator}
   * @return {Object} {value: undefined | any, done: true | false}
   *
   * @NOTE assigned to a variable so buble ignores it
   *
   *
   * @see https://github.com/sindresorhus/quick-lru/blob/master/index.js
   * @see https://stackoverflow.com/questions/36976832/what-is-the-meaning-of-symbol-iterator-in-this-context
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
   * @see this.store
   * @tests iteration
   *
   * @example
   *
   *    const chain = new Chain().set('eh', 1)
   *    for (var [key, val] of chain) console.log({[key]: val})
   *    //=> {eh: 1}
   *
   * @example
   *
   *    *[Symbol.iterator](): void { for (const item of this.store) yield item }
   *
   * @example
   *
   *    const {ChainedSet} = require('chain-able')
   *    const set = new ChainedSet()
   *    set.add('eh')
   *
   *    for (const arr of set) {
   *      const [key, val] = arr
   *
   *      key
   *      //=> 0
   *
   *      val
   *      //=> 'eh'
   *
   *      arr.length
   *      //=> 2
   *    }
   *
   */
  Chainable.prototype[SymbolIterator] = function() {
    return keyValueToIterator(this.keys(), this.values(), this.store.size)
  }

  /**
   * @desc for ending nested chains
   * @since 0.4.0
   * @memberOf Chainable
   *
   * @return {Chainable | any}
   *
   * @see Chainable.parent
   * @see FactoryChain
   *
   * @example
   *
   *    const parent = 'eh'
   *    const child = newChain(parent)
   *    child.end()
   *    //=> 'eh'
   *
   */
  Chainable.prototype.end = valueMethod('parent')

  /**
   * @see fp/when
   * @type {Function}
   */
  Chainable.prototype.when = when

  /**
   * @desc clears the map,
   *       goes through this properties,
   *       calls .clear if they are instanceof Chainable or Map
   *
   * @memberOf Chainable
   * @since 4.0.0 (moved only to Chainable, added option to clear this keys)
   * @since 0.4.0 (in ChainedMap)
   * @since 0.3.0 (in Chainable)
   *
   * @param {boolean | undefined} [clearPropertiesThatAreChainLike=true] checks properties on the object, if they are `chain-like`, clears them as well
   * @return {Chainable} @chainable
   *
   * @see https://github.com/fliphub/flipchain/issues/2
   * @see ChainedSet
   * @see ChainedMap
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear map-clear}
   * @see {@link map-clear}
   *
   * @example
   *
   *    const chain = new Chain()
   *    chain.set('eh', 1)
   *    chain.entries()
   *    //=> {eh: 1}
   *    chain.clear()
   *    chain.entries()
   *    //=> {}
   *
   */
  Chainable.prototype.clear = function(clearPropertiesThatAreChainLike = false) {
    this.store.clear()

    if (isFalse(clearPropertiesThatAreChainLike)) return this

    // @TODO
    // filterMap(this, (value, key) => {
    //   if (shouldClear(key, value)) value.clear()
    // })

    const keys = ObjectKeys(this)
    for (let k = 0; k < keys.length; k++) {
      const key = keys[k]
      const property = this[key]
      if (shouldClear(key, property)) this[key].clear()
    }

    return this
  }

  /**
   * @desc calls .delete on this.store.map
   * @since 0.3.0
   * @memberOf Chainable
   *
   * @param {Primitive} key on a Map: key referencing the value. on a Set: the index
   * @return {Chainable}
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete mozilla-map-delete}
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete mozilla-set-delete}
   * @see {@link mozilla-map-delete}
   * @see {@link mozilla-set-delete}
   * @see ChainedSet
   * @see ChainedMap
   *
   * @example
   *
   *    const chain = new Chain()
   *    chain.set('eh', 1)
   *    chain.get('eh')
   *    //=> 1
   *
   *    chain.delete('eh', 1)
   *    chain.get('eh')
   *    //=> undefined
   *
   */
  Chainable.prototype['delete'] = function(key) {
    this.store.delete(key)
    return this
  }

  /**
   * @desc checks whether the store has a value for a given key
   * @memberOf Chainable
   * @since 0.3.0
   *
   * @param {any} keyOrValue key when Map, value when Set
   * @return {boolean} `this.store.has(keyOrValue)`
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has mozilla-map-has}
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has mozilla-set-has}
   * @see {@link mozilla-map-has}
   * @see {@link mozilla-set-has}
   *
   * @example
   *
   *   const chain = new Chain()
   *   chain.set('eh', 1).has('eh')
   *   //=> true
   *   chain.has('canada')
   *   //=> false
   *
   */
  Chainable.prototype.has = function(keyOrValue) {
    return this.store.has(keyOrValue)
  }

  /**
   * @desc spreads the entries from ChainedMap.store.values
   *       allocates a new array, adds the values from the iterator
   *
   * @memberOf Chainable
   * @since 0.4.0
   *
   * @return {Array<any>} toArr(this.store.values())
   *
   * @NOTE look at Chainable.constructor to ensure not to use `new Array...`
   * @NOTE moved from ChainedMap and ChainedSet to Chainable @2.0.2
   * @NOTE this was [...] & Array.from(this.store.values())
   *
   * {@link https://kangax.github.io/compat-table/es6/#test-Array_static_methods compat-array-static-methods}
   * {@link https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array set-to-array}
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values mozilla-map-values}
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values mozilla-set-values}
   *
   * @see {@link mozilla-map-values}
   * @see {@link mozilla-set-values}
   * @see {@link compat-array-static-methods}
   * @see {@link set-to-array}
   *
   *
   * @example
   *
   *  const chain = new Chain()
   *  chain.set('eh', 1)
   *  chain.values()
   *  //=> [1]
   *
   */
  Chainable.prototype.values = function() {
    return ArrayFrom(this.store.values())
  }

  /**
   * @desc symbol method for toString, toJSON, toNumber
   * @memberOf Chainable
   * @since 1.0.2
   * @version 2
   *
   * @param {string} hint enum[default, string, number]
   * @return {Primitive}
   *
   * {@link http://2ality.com/2015/09/well-known-symbols-es6.html#default-tostring-tags well-known-symbols-es6}
   * @see {@link well-known-symbols-es6}
   *
   * @example
   *
   *  const chain = new Chain()
   *  chain.toNumber = () => 1
   *  +chain;
   *  //=> 1
   *  chain + 1
   *  //=>
   *
   * @example
   *
   *  const chain = new Chain()
   *  chain.toString = () => 'eh'
   *  chain + ''
   *  //=> 'eh'
   *
   */
  Chainable.prototype[SymbolPrimitive] = function(hint) {
    /* prettier-ignore */
    /**
     * hint === 'number'
     * `s`tring is 115
     * `n`umber is 110
     * 110 & 4 = 1
     * 115 & 4 = 0
     *
     * if (hint === 'string' && this.toJSON) return this.toJSON()
     * else if (hint === 'number' && this.toNumber) return this.toNumber()
     */
    if (hint === 'number' && this.toNumber) return this.toNumber()

    // hint === 'string'
    if (this.toJSON) return this.toJSON()

    // hint === 'default'
    return this.toString()
  }

  /**
   * @memberOf Chainable
   * @name length
   * @method length
   * @readonly
   * @since 0.5.0
   * @see ChainedMap.store
   * @return {number}
   * @example for (var i = 0; i < chain.length; i++)
   */
  ObjectDefine(Chainable.prototype, 'length', {
    enumerable: false,
    get() {
      return this.store.size
    },
  })
  ObjectDefine(Chainable.prototype, SymbolInstance, {
    enumerable: false,
    value: instance =>
      instance &&
      (isPrototypeOf(Chainable.prototype, instance) || hasStore(instance)),
  })

  // return function(parent) {
  //   const instance = new Chainable(parent)
  //   // console.log({instance}, instance.end)
  //   return instance
  // }

  return Chainable
}

/**
 * @since 3.0.0
 * @func
 * @example
 *
 *  class Target {}
 *  const TargetChain = Chainable.compose(Target)
 *  const chain = new TargetChain()
 *  chain instanceof Target
 *  //=> true
 *
 */
const c = composer(ComposeChainable, noop)

module.exports = c
