const isStringOrNumber = require('../is/stringOrNumber')
const isReal = require('../is/real')
const isBoolean = require('../is/boolean')
const isRegExp = require('../is/regexp')
const isError = require('../is/error')

/**
 * @since 5.0.0
 * @param  {*} x value to check
 * @return {boolean} x isNotNested
 *
 * @example
 *
 *  isNotNested('')                //=> true
 *  isNotNested(true)              //=> true
 *  isNotNested(new RegExp())      //=> true
 *  isNotNested(new Error('eh'))   //=> false
 *  isNotNested(null)              //=> false
 *
 */
module.exports = function isNotNested(x) {
  return (
    isStringOrNumber(x) ||
    isBoolean(x) ||
    !isReal(x) ||
    isError(x) ||
    isRegExp(x)
  )
}
