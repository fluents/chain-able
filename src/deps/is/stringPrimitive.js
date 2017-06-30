const toS = require('./toS')

/**
 * Checks if `value` is classified as a `String` **primitive**.
 *
 * @since 3.0.0
 * @category Lang
 * @memberOf is
 * @param {*} x The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * @see https://github.com/lodash/lodash/blob/master/isString.js
 * @see is/string
 *
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(new String('abc'))
 * // => false
 *
 * isString(1)
 * // => false
 */
module.exports = x => typeof x === 'string'
