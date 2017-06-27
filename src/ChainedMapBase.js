const Chainable = require('./Chainable')
const dopemerge = require('./deps/dopemerge')
const reduce = require('./deps/reduce')
const reduceEntries = require('./deps/reduce/entries')
const isFunction = require('./deps/is/function')
const ObjectKeys = require('./deps/util/keys')
const getMeta = require('./deps/meta')
const SHORTHANDS_KEY = require('./deps/meta/shorthands')

// CMC = ComposeMap
const CMC = SuperClass => {
  /**
   * @tutorial https://ponyfoo.com/articles/es6-maps-in-depth
   * @tutorial https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map
   * @inheritdoc
   * @type {Chainable}
   * @prop {Array} shorthands
   * @prop {Map} store
   */
  return class ChainedMapBase extends SuperClass {
    /**
     * @param {ChainedMapBase | Chainable | any} parent
     */
    constructor(parent) {
      super(parent)

      this.store = new Map()
      this.meta = getMeta(this)
    }

    /**
     * @since 0.7.0
     * @see this.set, this.get
     * @desc   tap a value with a function
     *         @modifies this.store.get(name)
     *
     * @example
     *  chain
     *    .set('moose', {eh: true})
     *    .tap('moose', moose => {moose.eh = false; return moose})
     *    .get('moose') === {eh: false}
     *
     * @param  {string | any} name key to `.get`
     * @param  {Function} fn function to tap with
     * @return {Chain} @chainable
     */
    tap(name, fn) {
      // @NOTE: longhand, sadness for shorter :-(
      // ---
      // const existing = this.get(name)
      // const updated = fn(existing, dopemerge)
      // return this.set(name, updated)
      // ---
      return this.set(name, fn(this.get(name), dopemerge))
    }

    /**
     * @since 0.5.0
     * @TODO could alao add parsing stringified
     *
     * @desc checks each property of the object
     *       calls the chains accordingly
     *
     * @example chain.from({eh: true}) === chain.eh(true)
     *
     * @param {Object} obj
     * @return {Chainable} @chainable
     */
    from(obj) {
      const keys = ObjectKeys(obj)

      for (let k = 0; k < keys.length; k++) {
        const key = keys[k]
        const val = obj[key]
        const fn = this[key]

        if (fn && fn.merge) {
          fn.merge(val)
        }
        else if (isFunction(fn)) {
          fn.call(this, val)
        }
        else {
          this.set(key, val)
        }
      }

      return this
    }

    /**
     * @since 0.4.0
     * @desc shorthand methods, from strings to functions that call .set
     * @example this.extend(['eh']) === this.eh = val => this.set('eh', val)
     * @param  {Array<string>} methods
     * @return {ChainedMapBase}
     */
    extend(methods) {
      methods.forEach(method => {
        this.meta(SHORTHANDS_KEY, method)
        this[method] = value => this.set(method, value)
      })
      return this
    }

    /**
     * @since 4.0.0 <- improved reducing
     * @since 0.4.0
     * @desc spreads the entries from ChainedMapBase.store (Map)
     *       return store.entries, plus all chain properties if they exist
     * @param  {boolean} [chains=false] if true, returns all properties that are chains
     * @return {Object}
     *
     * @example
     *
     *  map.set('a', 'alpha').set('b', 'beta').entries()
     *   => {a: 'alpha', b: 'beta'}
     *
     */
    entries(chains = false) {
      const reduced = reduce(this.store)
      if (chains === false) return reduced

      const reducer = reduceEntries(reduced)
      reducer(this)
      reducer(reduced)
      return reduced
    }

    /**
     * @since 4.0.0 <- moved debug here
     * @since 0.4.0
     * @example chain.set('eh', true).get('eh') === true
     * @param  {Primitive} key
     * @return {any}
     */
    get(key) {
      if (key === 'debug') return this.meta.debug
      return this.store.get(key)
    }

    /**
     * @see ChainedMapBase.store
     * @since 0.4.0
     * @desc sets the value using the key on store
     * @example chain.set('eh', true).get('eh') === true
     * @param {any} key
     * @param {any} value
     * @return {ChainedMapBase}
     */
    set(key, value) {
      this.store.set(key, value)
      return this
    }
  }
}

const cmc = CMC(Chainable)
cmc.compose = CMC

module.exports = cmc
