const ENV_DEVELOPMENT = require('../env/dev')
const dotPropPaths = require('../dot/paths')
const dotGet = require('../dot/get')
const isStringOrNumber = require('../is/stringOrNumber')
const isReal = require('../is/real')
const isBoolean = require('../is/boolean')
const isRegExp = require('../is/regexp')
const isError = require('../is/error')
const validationBuilder = require('./validatorBuilder')

const isNotNested = x =>
  isStringOrNumber(x) ||
  isBoolean(x) ||
  !isReal(x) ||
  isError(x) ||
  isRegExp(x)

const validateType = (type, value, nestedSchema) => {
  const validator = nestedSchema || validationBuilder(type)
  return validator(value)
}

/**
 * @desc pass the property & schema in, get a nestable typeValidator out
 * @since 4.0.0-alpha.1
 * @category types
 * @category schema
 *
 * @param {Primitive} property property name of the currently nested schema
 * @param {Schema | Type} nestedSchema a nested schema with Type validators, or a Type validator
 * @return {Function} typeValidator
 *
 * @example
 *
 * // property name here is `dates`, then `created`, then `at`
 * nestedSchema = {
 *   dates: {
 *      created: {
 *         at: 'date'
 *      }
 *   }
 * }
 *
 * input = {
 *    dates: {
 *      created: {
 *        at: new Date()
 *      }
 *    }
 * }
 *
 * input = new Date()
 * input = {
 *    dates: {
 *      mismatch: true
 *    }
 * }
 *
 */
const schemaFactory = (property, nestedSchema) => {
  /**
   * @desc build a recursive schema for all around runtime type safety
   * @category types
   * @category schema
   * @memberOf schema
   * @symb 🛂
   * @since 4.0.0-beta.1
   *
   * @param  {any} input the input to validate
   * @return {boolean} valid
   *
   * @see is
   *
   * @example
   *
   *   const typeValidator = schemaFactory('eh', x => typeof x === 'string')
   *
   *   var isValid = typeValidator('stringy')
   *   //=> true
   *
   *   var isValid = typeValidator(Number)
   *   //=> false
   *
   * @example
   *
   *   const isNumber = x => typeof x === 'number'
   *   const typeValidator = schemaFactory('eh', {canada: 'number'})
   *
   *   var isValid = typeValidator({canada: 1})
   *   //=> true
   *
   *   var isValid = typeValidator({})
   *   //=> false
   *
   *   var isValid = typeValidator({canada: false})
   *   //=> false
   *
   *   var isValid = typeValidator(1)
   *   //=> false
   *
   */
  function typeValidator(input) {
    if (isNotNested(input)) {
      // @@DEBUGGER
      return validateType(property, input, nestedSchema)
    }
    let longestPaths = dotPropPaths(false, input, true)

    // @@DEBUGGER

    for (let l = 0; l < longestPaths.length; l++) {
      const fullPath = longestPaths[l] || property
      const type = dotGet(nestedSchema, fullPath)
      const value = dotGet(input, fullPath.split('.'))

      // @@DEBUGGER

      if (!validateType(type, value)) {
        // @@DEBUGGER
        return false
      }

      // @@DEBUGGER
    }
    return true
  }

  /* istanbul ignore next: devs */
  if (ENV_DEVELOPMENT) {
    typeValidator.inspect = () => ({property, nestedSchema})
    typeValidator.toString = () =>
      JSON.stringify(typeValidator.inspect(), null, 2)
  }
  return typeValidator
}
module.exports = schemaFactory
