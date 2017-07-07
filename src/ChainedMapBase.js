const Chainable = require('./Chainable')
const dopemerge = require('./deps/dopemerge')
const reduce = require('./deps/reduce')
const reduceEntries = require('./deps/reduce/entries')
const isFunction = require('./deps/is/function')
const isUndefined = require('./deps/is/undefined')
const ObjectKeys = require('./deps/util/keys')
const getMeta = require('./deps/meta')
const SHORTHANDS_KEY = require('./deps/meta/shorthands')

/**
 * this is to avoid circular requires
 * because MergeChain & MethodChain extend this
 * yet .method & .merge use those chains
 *
 * @file
 * @since 4.0.0-alpha.1
 * @inheritdoc
 * @class ChainedMapBase
 * @member ChainedMapBase
 * @category Chainable
 * @extends {Chainable}
 * @type {Chainable}
 *
 * @types ChainedMapBase
 * @tests ChainedMap
 *
 * @prop {Meta} meta meta fn
 * @prop {Map} store main store
 *
 * {@link https://ponyfoo.com/articles/es6-maps-in-depth pony-map}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map mozilla-map}
 * @see {@link pony-map}
 * @see {@link mozilla-map}
 *
 * @see ChainedMap
 * @see Chainable
 * @see MergeChain
 * @see MethodChain
 * @see ChainedMap
 *
 */

const CMC = SuperClass => {
  return class ChainedMapBase extends SuperClass {
    /**
     * @param {ChainedMapBase | Chainable | ParentType | any} parent ParentType
     * @constructor
     *
     * @example
     *
     *    class Eh extends ChainedMapBase {}
     *    Object.keys(eh)
     *    //=> ['store', 'meta']
     *
     */
    constructor(parent) {
      super(parent)

      this.store = new Map()
      this.meta = getMeta(this)
    }

    /**
     * @desc   tap a value with a function
     *         @modifies this.store.get(name)
     * @memberOf ChainedMapBase
     * @version 0.7.0
     * @since 4.0.0-alpha.1 <- moved from transform & shorthands
     *
     * @param  {string | any} name key to `.get`
     * @param  {Function} fn function to tap with
     * @return {Chain} @chainable
     *
     * {@link https://github.com/sindresorhus/awesome-tap awesome-tap}
     * {@link https://github.com/midknight41/map-factory map-factory}
     * {@link https://github.com/webpack/tapable tapable}
     * @see {@link tapable}
     *
     * @see ChainedMapBase.set
     * @see ChainedMapBase.get
     *
     * @example
     *
     *    chain
     *      .set('moose', {eh: true})
     *      .tap('moose', moose => {moose.eh = false; return moose})
     *      .get('moose')
     *
     *    // => {eh: false}
     *
     * @example
     *
     *   const entries = new Chain()
     *     .set('str', 'emptyish')
     *     .tap('str', str => str + '+')
     *     .set('arr', [1])
     *     .tap('arr', arr => arr.concat([2]))
     *     .entries()
     *
     *   //=> {str: 'emptyish+', arr: [1, 2]}
     *
     */
    tap(name, fn) {
      return this.set(name, fn(this.get(name), dopemerge))
    }

    /**
     * @desc checks each property of the object
     *       calls the chains accordingly
     *
     * @memberOf ChainedMapBase
     * @since 0.5.0
     *
     * @param {Object} obj object with functions to hydrate from
     * @return {Chainable} @chainable
     *
     * @TODO could also add parsing stringified
     *
     * @example
     *
     *     const from = new Chain().from({eh: true})
     *     const eh = new Chain().set('eh', true)
     *     eq(from, eh)
     *     // => true
     *
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
     * @desc shorthand methods, from strings to functions that call .set
     * @since 0.4.0
     * @memberOf ChainedMapBase
     *
     * @param  {Array<string>} methods decorates/extends an object with new shorthand functions to get/set
     * @return {ChainedMapBase} @chainable
     *
     * @example
     *
     *    const chain1 = new Chain()
     *    chain1.extend(['eh'])
     *
     *    const chain2 = new Chain()
     *    chain2.eh = val => this.set('eh', val)
     *
     *    eq(chain2.eh, chain1.eh)
     *    //=> true
     *
     */
    extend(methods) {
      methods.forEach(method => {
        this.meta(SHORTHANDS_KEY, method)
        this[method] = value => this.set(method, value)
      })
      return this
    }

    /**
     * @desc spreads the entries from ChainedMapBase.store (Map)
     *       return store.entries, plus all chain properties if they exist
     *
     * @memberOf ChainedMapBase
     * @version 4.0.0 <- improved reducing
     * @since 0.4.0
     *
     * @param  {boolean} [chains=false] if true, returns all properties that are chains
     * @return {Object} reduced object containing all properties from the store, and when `chains` is true, all instance properties, and recursive chains
     *
     * //
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries mozilla-map-entries}
     * @see {@link mozilla-map-entries}
     *
     * @example
     *
     *    map.set('a', 'alpha').set('b', 'beta').entries()
     *    //=> {a: 'alpha', b: 'beta'}
     *
     */
    entries(chains) {
      const reduced = reduce(this.store)
      if (isUndefined(chains)) return reduced

      const reducer = reduceEntries(reduced)
      reducer(this)
      reducer(reduced)
      return reduced
    }

    /**
     * @desc get value for key path in the Map store
     *       ❗ `debug` is a special key and is *not* included into .store
     *          it goes onto .meta
     *
     * @memberOf ChainedMapBase
     * @version 4.0.0 <- moved debug here
     * @since 0.4.0
     *
     * @param  {Primitive} key Primitive data key used as map property to reference the value
     * @return {any} value in .store at key
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get mozilla-map-get}
     * @see {@link mozilla-map-get}
     *
     * @example
     *
     *    const chain = new Chain()
     *    chain.set('eh', true)
     *    chain.get('eh')
     *    //=> true
     *
     *    chain.get('nope')
     *    //=> undefined
     *
     */
    get(key) {
      if (key === 'debug') return this.meta.debug
      return this.store.get(key)
    }

    /**
     * @desc sets the value using the key on store
     *       adds or updates an element with a specified key and value
     *
     * @memberOf ChainedMapBase
     * @since 0.4.0
     *
     * @param {Primitive} key Primitive to reference the value
     * @param {any} value any data to store
     * @return {ChainedMapBase} @chainable
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set mozilla-map-set}
     *
     * @see {@link mozilla-map-set}
     * @see ChainedMapBase.store
     *
     * @example
     *
     *    const chain = new Chain()
     *    chain.set('eh', true)
     *    chain.get('eh')
     *    //=> true
     *
     */
    set(key, value) {
      this.store.set(key, value)
      return this
    }
  }
}

/**
 * @desc ChainedMapBase composer
 * @alias ComposeMap
 * @type {Composer}
 * @method compose
 * @memberOf ChainedMapBase
 *
 * @param {Class | Object | Composable} [SuperClass=Chainable] class to extend
 * @return {Class} ChainedMapBase
 *
 * @example
 *
 *    const heh = class {}
 *    const composed = ChainedMapBase.compose(heh)
 *    const hehchain = new Composed()
 *    hehchain instanceof heh
 *    //=> true
 *
 */
const cmc = CMC(Chainable)
cmc.compose = CMC

module.exports = cmc
