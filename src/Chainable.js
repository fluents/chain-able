const Iterator = require('./deps/symbols/iterator')
const Instance = require('./deps/symbols/instance')
const Primitive = require('./deps/symbols/primitive')
const isPrototypeOf = require('./deps/is/prototypeOf')
const isMap = require('./deps/is/map')
const isSet = require('./deps/is/set')
const isUndefined = require('./deps/is/undefined')
const isString = require('./deps/is/string')
const ObjectKeys = require('./deps/util/keys')
const charCodeAtZero = require('./deps/util/charCodeAtZero')
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
      throw new TypeError('did not have a super class')
    }
  }

  /**
   * @type {Chainable}
   * @prop {Chainable | any} parent
   * @prop {string} className
   * @prop {Array<Class|Object> | null} mixed
   */
  class Chainable extends SuperClass {
    /**
     * @param {Chainable | any} parent
     */
    constructor(parent) {
      super()
      if (parent) this.parent = parent
      this.className = this.constructor.name
    }

    /**
     * @NOTE assigned to a variable so buble ignores it
     * @since 0.5.0
     * @example for (var [key, val] of chainable) {}
     * @example
     *  * [Symbol.iterator](): void { for (const item of this.store) yield item }
     * @see https://github.com/sindresorhus/quick-lru/blob/master/index.js
     * @see https://stackoverflow.com/questions/36976832/what-is-the-meaning-of-symbol-iterator-in-this-context
     * @see this.store
     * @type {generator}
     * @return {Object} {value: undefined | any, done: true | false}
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
     * @since 0.4.0
     * @see Chainable.parent
     * @return {Chainable | any}
     */
    end() {
      return this.parent
    }

    /**
     * @since 4.0.0 <- added string-as-has(condition)
     * @since 2.0.0
     *
     * @desc
     *  when the condition is true,
     *  trueBrancher is called,
     *  else, falseBrancher is called
     *
     * @example
     *  const prod = process.env.NODE_ENV === 'production'
     *  chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
     *
     * @param  {boolean | string} condition when string, checks this.get
     * @param  {Function} [trueBrancher=Function] called when true
     * @param  {Function} [falseBrancher=Function] called when false
     * @return {ChainedMap}
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
     * @see https://github.com/fliphub/flipchain/issues/2
     * @param {boolean | undefined} [clearPropertiesThatAreChainLike=true]
     * @return {Chainable} @chainable
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
     * @since 0.3.0
     * @description calls .delete on this.store.map
     * @param {string | any} key
     * @return {Chainable}
     */
    delete(key) {
      this.store.delete(key)
      return this
    }

    /**
     * @since 0.3.0
     * @example if (chain.has('eh') === false) chain.set('eh', true)
     * @param {any} value
     * @return {boolean}
     */
    has(value) {
      return this.store.has(value)
    }

    /**
     * @since 0.4.0
     * @NOTE: look at Chainable to ensure not to use `new Array...`
     * @NOTE: moved from ChainedMap and ChainedSet to Chainable @2.0.2
     * @NOTE: this was [...] & Array.from(this.store.values())
     * @see https://kangax.github.io/compat-table/es6/#test-Array_static_methods
     * @see https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array
     * @desc spreads the entries from ChainedMap.store.values
     * @return {Array<any>}
     */
    values() {
      const vals = []
      this.store.forEach(v => vals.push(v))
      return vals
    }

    /**
     * @see http://2ality.com/2015/09/well-known-symbols-es6.html#default-tostring-tags
     * @since 1.0.2
     * @example chain + 1 (calls this)
     * @param {string} hint enum[default, string, number]
     * @return {Primitive}
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
      if ((charCodeAtZero(hint) & 4) && this.toNumber) return this.toNumber()

      // hint === 'string'
      if (this.toJSON) return this.toJSON()

      // hint === 'default'
      return this.toString()
    }
  }

  function defineOnChainable(Chain) {
    /**
     * @since 0.5.0
     * @example for (var i = 0; i < chain.length; i++)
     * @see ChainedMap.store
     * @return {number}
     */
    ObjectDefine(Chain, 'length', {
      enumerable: false,
      get() {
        return this.store.size
      },
    })
    ObjectDefine(Chain, Instance, {
      enumerable: false,
      value: instance => {
        return !!(
          instance &&
          (isPrototypeOf(Chain, instance) || instance.store)
        )
        // not-needed
        // instance.className ||
        // instance.meta)
      },
    })
  }

  // defineOnChainable(Chainable)
  defineOnChainable(Chainable.prototype)
  return Chainable
}

const c = C(class {})
c.compose = C

module.exports = c
