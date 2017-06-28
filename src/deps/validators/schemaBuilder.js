const ENV_DEBUG = require('../env/debug')
const dotPropPaths = require('../dot/paths')
const dotGet = require('../dot/get')
const isStringOrNumber = require('../is/stringOrNumber')
const isReal = require('../is/real')
const isBoolean = require('../is/boolean')
const isRegExp = require('../is/regexp')
const isError = require('../is/error')
const validationBuilder = require('./validatorBuilder')

const isNotNested = x =>
  isStringOrNumber(x) || isBoolean(x) || !isReal(x) || isError(x) || isRegExp(x)

/**
 * @example
 *
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

const validateType = (type, value, nestedSchema) => {
  const validator = nestedSchema || validationBuilder(type)
  return validator(value)
}

// @TODO: debug mode here
const schemaFactory = (property, nestedSchema) => {
  /**
   * @NOTE: this works perfect for very nested objects,
   * but flat ones... it cannot dotPropPath a boolean for example
   *
   * @param  {any} input
   * @return {boolean} valid
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

  if (process.env.NODE_ENV !== 'production') {
    typeValidator.inspect = () => ({property, nestedSchema})
    typeValidator.toString = () =>
      JSON.stringify(typeValidator.inspect(), null, 2)
  }
  return typeValidator
}
module.exports = schemaFactory
