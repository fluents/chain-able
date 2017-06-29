const typeError = require('../deps/validators/error')
const encase = require('../deps/encase')

const ERROR_META = {m: 1}

/**
 * @desc 3 steps
 *       0. enhance error
 *       1. encase function with a specification
 *       2. build a function to call onInvalid or onInvalid depending
 *
 * @since 4.0.0
 *
 * @param  {string} name name of the method
 * @param  {Object | Function} parent object being decorated by MethodChain
 * @param  {Object} built the current state of the decoration
 * @return {Function} curried finisher, for specification
 *
 * @example
 *
 *  methodEncasingFactory('eh', {}, {onSet: console.log})
 *  // => Function
 *
 */
function methodEncasingFactory(name, parent, built) {
  /**
   * @param  {Function} fnToEncase
   * @param  {string | Function | undefined} [type=undefined]
   * @param  {Function | undefined} [specification=undefined]
   * @return {Function} the method...
   */
  return function(fnToEncase, type, specification) {
    // @@debugger
    const enhanceError = typeError(name, type, fnToEncase, parent)

    // if specification is not passed in, undefined defaults to tryCatch
    const encased = encase(fnToEncase, specification)

    // our configured functions, with fallback defaults
    const onSet = built.onCall || built.onSet
    const onValid = built.onValid || onSet

    // default to re-throw
    const onInvalid =
      built.onInvalid ||
      ((arg, error) => enhanceError(arg, error, ERROR_META).reThrow())

    return function typedOnCall(arg) {
      // nodejs way - error first, data second, instance last
      const callInvalid = error => {
        // @@debugger
        onInvalid.call(this, enhanceError(arg, error), arg, name, this)
      }

      // @TODO: ensure it isn't a syntax error and is a type error
      // if it is already an error, we should only enhance it
      // @example `TypeError: Cannot read property 'call' of undefined`
      encased
        .onInvalid(callInvalid)
        // @NOTE: onValid defaults to `this.set(name, arg)`
        .onValid(result => {
          // @@debugger
          onValid.call(this, arg, name, this)
        })
        .call(this, arg)

      return this
    }
  }
}

module.exports = methodEncasingFactory
