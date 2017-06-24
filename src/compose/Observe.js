const toarr = require('../deps/to-arr')
const traverse = require('../deps/traverse')
const eq = require('../deps/traversers/eq')
const match = require('../deps/matcher')
const getPathSegments = require('../deps/dot-segments')
const dot = require('../deps/dot-prop')
const OBSERVERS_KEY = require('../deps/meta/observers')

// scoped clones
let objs = new Map()

module.exports = (SuperClass, opts) => {
  /**
   * @see https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts
   * @see https://github.com/sindresorhus/awesome-observables
   * @see https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87
   */
  return class Observe extends SuperClass {
    /**
     * @since 4.0.0 <- refactored with dot-prop
     * @since 1.0.0
     *
     * @TODO: gotta update `data` if `deleting` too...
     * @TODO: un-observe
     * @TODO should hash these callback properties
     * @TODO just throttle the `.set` to allow easier version of .commit
     * @TODO .unobserve
     *
     * @example
     *   chain
     *     .extend(['eh'])
     *     .observe('eh', data => data.eh === true)
     *     .eh(true)
     *
     * @param  {Matchable} properties
     * @param  {Function} fn
     * @return {Chain} @chainable
     */
    observe(properties, fn) {
      const props = toarr(properties)
      const hashKey = props.join('_')
      let data = {}

      /* prettier-ignore */
      return this.meta(OBSERVERS_KEY, changed => {
        // match the keys, make the data out of it
        const m = match(changed.key, props)
        for (let i = 0; i < m.length; i++) {
          // data[m[i]] = this.get(m[i])
          const segments = getPathSegments(m[i])
          dot.set(data, segments, this.get(segments))
        }

        // if we have called it at least once...
        // when it hasn't changed, leave it
        if (objs.has(hashKey) && eq(objs.get(hashKey), data)) return

        // it did change - clone it for next deepEquals check
        objs.set(hashKey, traverse(data).clone())

        // call the observer - it matched & data changed
        fn.call(this, data, this)
      })
    }
  }
}
