/* eslint consistent-this: ["error", "Klass"] */

const ENV_DEBUG = require('../env/debug')

/**
 * @desc call destructor on a pooled instance, put it back in the pool
 * @since 5.0.0
 * @memberOf pooler
 *
 * @param  {Object} instance call destructor
 * @return {void}
 *
 * @prop {Array} instancePool
 * @prop {number} poolSize
 * @prop {Function} destructor
 *
 * @example
 *
 *    class Eh {}
 *    addPoolingTo(Eh)
 *    const eh = Eh.getPooled()
 *    eh.release()
 *
 */
module.exports = function standardReleaser(instance) {
  const Klass = this

  if (ENV_DEBUG) {
    if (instance instanceof Klass) {
      throw new Error(
        `Trying to release an instance
        into a pool of a different type.`
      )
    }
  }

  instance.destructor()
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance)
  }
}
