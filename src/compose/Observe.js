const toarr = require('../deps/to-arr')
const traverse = require('../deps/traverse')
const eq = require('../deps/traversers/eq')
const match = require('../deps/matcher')
const getPathSegments = require('../deps/dot/segments')
const dot = require('../deps/dot')
const OBSERVERS_KEY = require('../deps/meta/observers')

/**
 * scoped clones
 * @private
 * @type {Map}
 */
let objs = new Map()

/**
 * @desc > subscribe to changes
 *       ❗ called only on **change**
 *       observers are only called when data they subscribe to changes
 *
 * @since 3.0.1
 * @class Observe
 * @member Observe
 * @extends {ChainedMap}
 * @extends {DotProp}
 * @memberOf compose
 * @category Chainable
 *
 * @param  {Class | Composable} SuperClass composable class
 * @return {Observe} class
 *
 * @tests Observe
 * @types Observe
 *
 * @see ChainedMap
 * @see DotProp
 * @see deps/matcher
 * @see deps/traversers/eq
 * @see deps/traverse
 * @see DotProp
 *
 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/observer observer-pattern}
 * {@link https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts reactivex}
 * {@link https://github.com/sindresorhus/awesome-observables awesome-observables}
 * {@link https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87 building-observables}
 * {@link https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/observer.png js-observer-png}
 * {@link https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/publishsubscribe.png pubsub-png}
 * @see {@link reactivex}
 * @see {@link awesome-observables}
 * @see {@link building-observables}
 * @see {@link observer-pattern}
 *
 * @example
 *
 *    const {compose} = require('chain-able')
 *    const {DotProp} = compose
 *    new DotProp()
 *    //=> DotProp
 *
 */
module.exports = SuperClass => {
  return class Observe extends SuperClass {
    /**
     * @desc observe properties when they change
     *
     * @method
     * @memberOf Observe
     * @since 4.0.0 <- refactored with dot-prop
     * @since 1.0.0
     *
     * @param  {Matchable} properties Matchable properties to observe
     * @param  {Function} fn onChanged
     * @return {Chain} @chainable
     *
     * @see traversers/eq
     * @see toarr
     * @see matcher
     *
     * @see {@link https://jsfiddle.net/wqxuags2/28/} for a Demo Clock with observable
     * @see {@link examples/playground/TodoStore} TodoStore
     *
     * @TODO gotta update `data` if `deleting` too...
     * @TODO un-observe
     * @TODO should hash these callback properties
     * @TODO just throttle the `.set` to allow easier version of .commit
     *
     * @example
     *
     *   const Chain = require('chain-able')
     *
     *   const chain = new Chain()
     *   const log = arg => console.log(arg)
     *
     *   chain
     *     .extend(['eh'])
     *     .observe('eh', data => log(data))
     *     .eh(true)
     *   //=> {eh: true}
     *
     * @example
     *
     *    chain
     *      .extend(['canada', 'timbuck'])
     *      .observe(['canad*'], data => console.log(data.canada))
     *      .canada(true)
     *      .canada(true)
     *      .timbuck(false)
     *
     *    //=> true
     *    //=> false
     *
     *    // only called when changed,
     *    // otherwise it would be 2 `true` & 1 `false`
     */
    observe(properties, fn) {
      const props = toarr(properties)
      const hashKey = props.join('_')
      let data = {}

      /* prettier-ignore */
      return this.meta(OBSERVERS_KEY, changed => {
        /**
         * match the keys, make the data out of it
         */
        const m = match(changed.key, props)

        // @@debugger

        for (let i = 0; i < m.length; i++) {
          const segments = getPathSegments(m[i])
          dot.set(data, segments, this.get(segments))
        }

        /**
         * if we have called it at least once...
         *    and it has not changed, leave it
         * else
         *    clone it
         *    call the observer
         */
        if (objs.has(hashKey) && eq(objs.get(hashKey), data)) {
          // @@debugger
          return
        }

        // @@debugger

        /**
         * it did change - clone it for next deepEquals check
         */
        objs.set(hashKey, traverse(data).clone())

        /**
         * call the observer - it matched & data changed
         */
        fn.call(this, data, this)
      })
    }
  }
}
