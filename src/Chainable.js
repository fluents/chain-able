const Iterator = require('./deps/symbols/iterator')
const Instance = require('./deps/symbols/instance')
const Primitive = require('./deps/symbols/primitive')
const isPrototypeOf = require('./deps/is/prototypeOf')
const isMap = require('./deps/is/map')
const isSet = require('./deps/is/set')
const isUndefined = require('./deps/is/undefined')
const isFunction = require('./deps/is/function')
const isString = require('./deps/is/string')
const isFalse = require('./deps/is/false')
const ObjectKeys = require('./deps/util/keys')
const ObjectDefine = require('./deps/define')
const ignored = require('./deps/ignored')
const ENV_DEVELOPMENT = require('./deps/env/dev')

// @TODO change from `||` to if else
const shouldClear = (key, property) =>
  !ignored(key) &&
  (isMap(property) || isSet(property) || (property && property.store))

const ComposeChainable = Target => {
  /* istanbul ignore next: dev */
  if (ENV_DEVELOPMENT) {
    if (!Target || !Target.prototype) {
      console.log({Target})
      throw new TypeError('did not have a super class / target base')
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
   */
  class Chainable extends Target {
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
    constructor(parent) {
      super()
      if (parent) this.parent = parent
      this.className = this.constructor.name
    }

    /**
     * @desc Iterator for looping values in the store
     *
     * @memberOf Chainable
     * @since 0.5.0
     *
     * @type {generator}
     * @return {Object} {value: undefined | any, done: true | false}
     *
     * @NOTE assigned to a variable so buble ignores it
     * @see https://github.com/sindresorhus/quick-lru/blob/master/index.js
     * @see https://stackoverflow.com/questions/36976832/what-is-the-meaning-of-symbol-iterator-in-this-context
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
     * @tests iteration
     * @see this.store
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
    [Iterator]() {
      const values = this.values()
      const size = this.store.size
      const entries = this.entries ? this.entries() : 0
      const keys = entries === 0 ? new Array(size) : ObjectKeys(entries)

      return {
        i: 0,
        next() {
          let i = this.i
          let key = i
          const val = values[i]
          if (entries) key = keys[i]

          // done - no more values, or iteration reached size
          if ((isUndefined(key) && isUndefined(val)) || size <= i) {
            return {value: undefined, done: true}
          }

          this.i++

          // return
          return {value: [key, val], done: false}
        },
      }
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
    end() {
      return this.parent
    }

    /**
     * @desc when the condition is true,
     *       trueBrancher is called,
     *       else, falseBrancher is called
     *
     * @memberOf Chainable
     * @since 4.0.0 <- added string-as-has(condition)
     * @since 2.0.0
     *
     * @param  {boolean | string} condition when string, checks this.get
     * @param  {Function} [trueBrancher=Function] called when true
     * @param  {Function} [falseBrancher=Function] called when false
     * @return {Chainable} @chainable
     *
     * @example
     *
     *
     *  const prod = process.env.NODE_ENV === 'production'
     *  chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
     *
     *
     */
    when(condition, trueBrancher, falseBrancher) {
      if (condition) {
        if (isFunction(trueBrancher)) {
          if (isString(condition)) {
            if (this.get(condition)) {
              trueBrancher(this)
            }
          }
          else {
            trueBrancher(this)
          }
        }
      }
      else if (isFunction(falseBrancher)) {
        falseBrancher(this)
      }

      return this
    }

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
    clear(clearPropertiesThatAreChainLike) {
      this.store.clear()

      if (isFalse(clearPropertiesThatAreChainLike)) return this

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
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
     * @see ChainedSet
     * @see ChainedMap
     *
     * @example
     *
     *    const chain = new Chain()
     *    chain.set('eh', 1)
     *    chain.get('eh')
     *    // => 1
     *    chain.delete('eh', 1)
     *    chain.get('eh')
     *    // => undefined
     *
     */
    delete(key) {
      this.store.delete(key)
      return this
    }

    /**
     * @since 0.3.0
     * @memberOf Chainable
     *
     * @param {any} keyOrValue key when Map, value when Set
     * @return {boolean}
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
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
    has(keyOrValue) {
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
    values() {
      const allocated = new Array(this.store.size)
      let i = 0
      this.store.forEach(v => (allocated[i++] = v))
      return allocated

      // const size = this.store.size
      // const allocated = new Array(size)
      // // .forEach((value, index) => {
      //
      // const values = this.store.values()
      //
      // for (let index = 0; index < size; index++) {
      //   // const value = values[index]
      //   const value = values.next().value
      //   // console.log({value, index, values})
      //   allocated[index] = value
      // }
      //
      // return allocated
    }

    /**
     * @see http://2ality.com/2015/09/well-known-symbols-es6.html#default-tostring-tags
     * @since 1.0.2
     *
     * @memberOf Chainable
     *
     * @param {string} hint enum[default, string, number]
     * @return {Primitive}
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
    [Primitive](hint) {
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
  }

  const ChainPrototype = Chainable.prototype

  /**
   * @memberOf Chainable
   * @name length
   * @method length
   * @readonly
   * @since 0.5.0
   * @example for (var i = 0; i < chain.length; i++)
   * @see ChainedMap.store
   * @return {number}
   */
  ObjectDefine(ChainPrototype, 'length', {
    enumerable: false,
    get() {
      return this.store.size
    },
  })
  ObjectDefine(ChainPrototype, Instance, {
    enumerable: false,
    value: instance =>
      instance && (isPrototypeOf(ChainPrototype, instance) || instance.store),
  })

  return Chainable
}

const c = ComposeChainable(class {})

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
c.compose = ComposeChainable

module.exports = c
