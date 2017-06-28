const ENV_DEBUG = require('../env/debug')
const dotPropPaths = require('../dot/paths')
const dotGet = require('../dot/get')
const validationBuilder = require('./validatorBuilder')

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

// @TODO: debug mode here
const schemaFactory = (property, nestedSchema) => {
  /**
   * @param  {any} input
   * @return {boolean} valid
   */
  return input => {
    const longestPaths = dotPropPaths(false, input, true)
    for (let l = 0; l < longestPaths.length; l++) {
      const fullPath = longestPaths[l]
      const type = dotGet(nestedSchema, fullPath)
      const value = dotGet(input, fullPath.split('.'))
      const validator = validationBuilder(type)

      // @@DEBUGGER
      if (!validator(value)) {
        // @@DEBUGGER
        return false
      }
    }
    return true
  }
}
module.exports = schemaFactory
