const toS = require('./toS')

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @see https://github.com/lodash/lodash/blob/master/isRegExp.js
 *
 * @example
 *
 * isRegExp(/abc/)
 * // => true
 *
 * isRegExp('/abc/')
 * // => false
 *
 */
module.exports = x => toS(x) === '[object RegExp]'
// obj instanceof RegExp ||
