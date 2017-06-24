const typeError = require('../validators/error')
const encase = require('../encase')

/**
 * @since 4.0.0
 *
 * @TODO: only encase on option
 * @TODO: define .name on the function
 *
 * @desc create a validator factory for types
 *
 * @param  {string} name
 * @param  {Object | Function} parent
 * @param  {Object} built
 * @param  {Function} functionToEncase
 * @param  {string | Function | any} type
 * @return {MethodChain} @chainable
 */
function methodEncasingFactory(name, parent, built, functionToEncase, type) {
  const error = typeError(name, type, functionToEncase, parent)

  // require('fliplog').data({validator: validator.toString(), type}).exit()
  const encased = encase(functionToEncase)

  // our configured functions, with fallback defaults
  const set = built.call || built.set
  const onValid = built.onValid || set
  const onInvalid = built.onInvalid || (arg => error(arg).reThrow())

  return function typedOnCall(arg) {
    // nodejs way - error first, data second, instance last
    const callInvalid = e => onInvalid.call(this, error(arg, e), arg, this)

    encased
      .onInvalid(e => {
        return callInvalid(e)
      })
      .onValid(result => {
        // we'll be opinionated and say either `false` or `throw`
        if (result === false) return callInvalid()

        // @NOTE: onValid defaults to this... this.set(name, arg)
        return onValid.call(this, arg, this)
      })
      .call(this, arg)

    return this
  }
}

module.exports = methodEncasingFactory
