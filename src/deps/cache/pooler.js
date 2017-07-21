/* eslint consistent-this: ["error", "Klass"] */

const ENV_DEBUG = require('../env/debug')

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
// const pooler = }}

/**
 * @desc call destructor on a pooled instance, put it back in the pool
 * @since 5.0.0
 * @memberOf pooler
 *
 * @param  {Object} instance call destructor
 * @return {void}
 *
 * @example
 *
 *    class Eh {}
 *    addPoolingTo(Eh)
 *    const eh = Eh.getPooled()
 *    eh.release()
 *
 */
function standardReleaser(instance) {
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

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 *
 * @since 5.0.0
 * @memberOf pooler
 *
 * @param  {Object} copyFieldsFrom obj with instance pool
 * @return {Object} instance of Klass
 *
 * @example
 *
 *    class Eh {}
 *    addPoolingTo(Eh)
 *    const eh = Eh.getPooled() //=> oneArgumentPooler(Eh)
 *    eh.release()
 *
 */
function oneArgumentPooler(copyFieldsFrom) {
  const Klass = this
  if (Klass.instancePool.length) {
    const instance = Klass.instancePool.pop()
    Klass.call(instance, copyFieldsFrom)
    return instance
  }
  else {
    return new Klass(copyFieldsFrom)
  }
}

const DEFAULT_POOL_SIZE = 10
const DEFAULT_POOLER = oneArgumentPooler

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
