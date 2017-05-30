const ChainedMap = require('../ChainedMap')
const ChainedSet = require('../ChainedSet')
const toarr = require('../deps/to-arr')

module.exports = (SuperClass = ChainedMap, opts) => {
  /**
   * @see https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts
   * @see https://github.com/sindresorhus/awesome-observables
   */
  return class Observe extends SuperClass {
    /**
     * @TODO should hash these callback properties
     * @TODO just throttle the `.set` to allow easier version of .commit
     * @TODO .unobserve
     * @see https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87
     * @since 1.0.0
     * @alias on
     *
     * @example
     *   chain
     *     .extend(['eh'])
     *     .observe('eh', data => data.eh === true)
     *     .eh(true)
     *
     * @param  {string} properties
     * @param  {Function} cb
     * @return {Chain} @chainable
     */
    observe(properties, cb) {
      if (this.observers === undefined) {
        this.observers = new ChainedSet(this)
      }

      /* prettier-ignore */
      this.observers
        .add(changed => {
          // @TODO
          //  use `changed` to simply only update data with changed
          //  keep scoped data
          //  const {key, value} = changed

          const data = {}
          const props = toarr(properties)
          for (let i = 0; i < props.length; i++) {
            data[props[i]] = this.get(props[i])
          }
          cb(data, this)
        })

      return this
    }
  }
}
