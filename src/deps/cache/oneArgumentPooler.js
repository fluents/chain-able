/* eslint consistent-this: ["error", "Klass"] */

const ENV_DEBUG = require('../env/debug')

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
 * @param  {Object} copyFieldsFrom obj with instance pool (arguments for constructor?)
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
module.exports = function oneArgumentPooler(copyFieldsFrom) {
  const Klass = this
  if (Klass.instancePool.length) {
    const instance = Klass.instancePool.pop()
    // require('fliplog').quick({Klass, instance, copyFieldsFrom})

    // @TODO or a static construct!
    // if (Klass.construct) Klass.construct.call(instance, copyFieldsFrom)
    if (instance.construct) instance.construct(copyFieldsFrom)
    else Klass.call(instance, copyFieldsFrom)

    return instance
  }
  else {
    return new Klass(copyFieldsFrom)
  }
}
