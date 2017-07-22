const isTrue = require('./true')
const isFalse = require('./false')

/**
 * @desc Checks if `value` is classified as a boolean primitive NOT object.
 * @category Lang
 * @since 5.0.0-beta.4
 *
 * @param  {*} x value
 * @return {boolean} isBooleanPrimitive
 *
 * @extends isTrue
 * @extends isFalse
 * @see is/toS
 * @memberOf is
 * @func isBooleanPrimitive
 *
 * @NOTE could also have typeof x === 'boolean' || (/true|false/).test(x)
 *
 * @example
 *
 *  isBooleanPrimitive(false)
 *  //=> true
 *  isBooleanPrimitive(new Boolean(1))
 *  //=> false
 *
 *  isBooleanPrimitive(1)
 *  //=> false
 *  isBooleanPrimitive('')
 *  //=> false
 *
 */
module.exports = function isBooleanPrimitive(x) {
  return isTrue(x) || isFalse(x)
}
