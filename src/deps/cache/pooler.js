/* eslint consistent-this: ["error", "Klass"] */

const ENV_DEBUG = require('../env/debug')
const standardReleaser = require('./standardReleaser')
const oneArgumentPooler = require('./oneArgumentPooler')


/**
 * @symb 🎱
 * @member pooler
 * @type {Object}
 *
 * {@link https://github.com/facebook/react/blob/master/src/renderers/shared/utils/PooledClass.js react-pooler}
 * @see {@link react-pooler}
 *
 * @tests deps/pooler
 * @types deps.cache.pooler
 */
const DEFAULT_POOLER = oneArgumentPooler
const DEFAULT_POOL_SIZE = 10

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @since 5.0.0
 * @memberOf pooler
 *
 * @param {Function | Object} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 * @return {Object} enhanced constructor, decorated with pooler
 *
 * @example
 *
 *    class Eh {}
 *    addPoolingTo(Eh) // can optionally pass in pooler as second arg
 *    //=> Eh.instancePool = []
 *    //=> Eh.getPooled = pooler || singleArgumentPooler
 *    //=> Eh.poolSize = 10
 *    //=> Eh.release = standardReleaser
 *
 */
function addPoolingTo(CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  const NewKlass = CopyConstructor

  NewKlass.instancePool = []
  NewKlass.getPooled = pooler || DEFAULT_POOLER
  if (!NewKlass.poolSize) NewKlass.poolSize = DEFAULT_POOL_SIZE
  NewKlass.release = standardReleaser

  return NewKlass
}

module.exports = addPoolingTo
