const dotPropPaths = require('../dot-prop-paths')
const dot = require('../dot-prop')
const validatorFactory = require('./validatorFactory')

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
  // const paths = dotPropPaths(property, nestedSchema)
  // nestedSchema = {[property]: nestedSchema}

  /**
   * @param  {any} input
   * @return {boolean} valid
   */
  return input => {
    const longestPaths = dotPropPaths(false, input, true)
    for (let l = 0; l < longestPaths.length; l++) {
      const fullPath = longestPaths[l]
      const type = dot.get(nestedSchema, fullPath)
      const value = dot.get(input, fullPath.split('.'))
      const validator = validatorFactory(type)

      // console.log({value, fullPath, type})
      // console.log(validator.toString(), validator(value))

      if (!validator(value)) {
        // console.log('invalid!')
        return false
      }
    }
    return true
  }
}
module.exports = schemaFactory
