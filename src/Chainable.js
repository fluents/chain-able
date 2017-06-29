const Iterator = require('./deps/symbols/iterator')
const Instance = require('./deps/symbols/instance')
const Primitive = require('./deps/symbols/primitive')
const isPrototypeOf = require('./deps/is/prototypeOf')
const isMap = require('./deps/is/map')
const isSet = require('./deps/is/set')
const isUndefined = require('./deps/is/undefined')
const isString = require('./deps/is/string')
const ObjectKeys = require('./deps/util/keys')
const ObjectDefine = require('./deps/define')
const ignored = require('./deps/ignored')
const ENV_DEVELOPMENT = require('./deps/env/dev')

const shouldClear = (key, property) =>
  !ignored(key) &&
  (isMap(property) || isSet(property) || (property && property.store))

const C = SuperClass => {
  /* istanbul ignore next: dev */
  if (ENV_DEVELOPMENT) {
    if (!SuperClass || !SuperClass.prototype) {
      console.log({SuperClass})
      throw new TypeError('did not have a super class / target base')
    }
  }

  /**
   * @class
   * @type {Chainable}
   * @prop {Chainable | any} parent
   * @prop {string} className
   */
  class Chainable extends SuperClass {
    /**
     * @param {Chainable | any | ParentType} parent ParentType
     * @constructor
     */
    constructor(parent) {
      super()
      if (parent) this.parent = parent
      this.className = this.constructor.name
    }

    /**
     * @since 0.5.0
     * @see this.store
     * @type {generator}
     * @return {Object} {value: undefined | any, done: true | false}
     *
     * @NOTE assigned to a variable so buble ignores it
     * @see https://github.com/sindresorhus/quick-lru/blob/master/index.js
     * @see https://stackoverflow.com/questions/36976832/what-is-the-meaning-of-symbol-iterator-in-this-context
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
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
     * @return {Chainable | any}
     * @see Chainable.parent
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
     * @desc
     *  when the condition is true,
     *  trueBrancher is called,
     *  else, falseBrancher is called
     *
     * @since 4.0.0 <- added string-as-has(condition)
     * @since 2.0.0
     *
     * @param  {boolean | string} condition when string, checks this.get
     * @param  {Function} [trueBrancher=Function] called when true
     * @param  {Function} [falseBrancher=Function] called when false
     * @return {ChainedMap}
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
        if (!isUndefined(trueBrancher)) {
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
      else if (!isUndefined(trueBrancher)) {
        falseBrancher(this)
      }

      return this
    }

    /**
     * @since 4.0.0 (moved only to Chainable, added option to clear this keys)
     * @since 0.4.0 (in ChainedMap)
     * @since 0.3.0 (in Chainable)
     *
     * @desc clears the map,
     *       goes through this properties,
     *       calls .clear if they are instanceof Chainable or Map
     *
     * @param {boolean | undefined} [clearPropertiesThatAreChainLike=true] checks properties on the object, if they are `chain-like`, clears them as well
     * @return {Chainable} @chainable
     *
     * @see https://github.com/fliphub/flipchain/issues/2
     *
     * @example
     *
     *  const chain = new Chain()
     *  chain.set('eh', 1)
     *  chain.entries()
     *  //=> {eh: 1}
     *  chain.clear()
     *  chain.entries()
     *  //=> {}
     *
     */
    clear(clearPropertiesThatAreChainLike) {
      this.store.clear()

      if (clearPropertiesThatAreChainLike === false) return this

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
     * @param {Primitive} key on a Map: key referencing the value. on a Set: the index
     * @return {Chainable}
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
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
     * @param {any} keyOrValue key when Map, value when Set
     * @return {boolean}
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
     * @since 0.4.0
     * @NOTE: look at Chainable to ensure not to use `new Array...`
     * @NOTE: moved from ChainedMap and ChainedSet to Chainable @2.0.2
     * @NOTE: this was [...] & Array.from(this.store.values())
     * @see https://kangax.github.io/compat-table/es6/#test-Array_static_methods
     * @see https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array
     * @return {Array<any>}
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
      const vals = []
      this.store.forEach(v => vals.push(v))
      return vals
    }

    /**
     * @see http://2ality.com/2015/09/well-known-symbols-es6.html#default-tostring-tags
     * @since 1.0.2
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
   * @private
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

const c = C(class {})

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
c.compose = C

module.exports = c
