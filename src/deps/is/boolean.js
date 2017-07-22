const toS = require('./toS')
const isBooleanPrimitive = require('./booleanPrimitive')

/**
 * @desc Checks if `value` is classified as a boolean primitive OR object.
 * @since 3.0.0
 * @category Lang
 * @memberOf is
 *
 * @param  {*} x value
 * @return {boolean} isBoolean
 *
 * @extends isTrue
 * @extends isFalse
 * @extends isBooleanPrimitive
 *
 * @see is/toS
 * @func isBoolean
 *
 * @example
 *
 *  isBoolean(false)
 *  //=> true
 *  isBoolean(new Boolean(1))
 *  //=> true
 *  isBoolean(1)
 *  //=> false
 *  isBoolean('')
 *  //=> false
 *
 */
module.exports = function isBoolean(x) {
  return isBooleanPrimitive(x) || toS(x) === '[object Boolean]'
}
