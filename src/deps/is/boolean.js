const toS = require('./toS')
const isTrue = require('./true')
const isFalse = require('./false')

/**
 * @desc Checks if `value` is classified as a boolean primitive or object.
 * @category Lang
 * @since 3.0.0
 *
 * @param  {*} x value
 * @return {boolean} isBoolean
 *
 * @extends isTrue
 * @extends isFalse
 * @see is/toS
 * @memberOf is
 * @func isBoolean
 *
 * @NOTE could also have typeof x === 'boolean' || (/true|false/).test(x)
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
  return isTrue(x) || isFalse(x) || toS(x) === '[object Boolean]'
}
