const or = require('../conditional/or')
const isString = require('./string')
const isNumber = require('./number')

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @since 3.0.0
 * @memberOf is
 *
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a string, else `false`.
 *
 * @category Lang
 *
 * {@link https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23 inferno-isstringornumber}
 * @see {@link inferno-isstringornumber}
 *
 * @example
 *
 *   isString('abc')
 *   //=> true
 *
 *   isString(1)
 *   //=> false
 *
 */
module.exports = or(isString, isNumber)
