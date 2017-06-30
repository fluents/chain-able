const isString = require('./string')
const isNumber = require('./number')

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @since 3.0.0
 * @category Lang
 * @memberOf is
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a string, else `false`.
 *
 * @see https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23
 * @see https://github.com/lodash/lodash/blob/master/isString.js
 *
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(1)
 * // => false
 */
module.exports = x => isString(x) || isNumber(x)
