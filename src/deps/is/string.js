const toS = require('./toS')
const isStringPrimitive = require('./stringPrimitive')

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @since 3.0.0
 * @category Lang
 *
 * @memberOf is
 * @extends isStringPrimitive
 * @variation also allows String objects
 *
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a string, else `false`.
 *
 * @see https://github.com/lodash/lodash/blob/master/isString.js
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * @see isStringPrimitive
 *
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(new String('abc'))
 * // => true
 *
 * isString(1)
 * // => false
 */
module.exports = x => isStringPrimitive(x) || toS(x) === '[object String]'
