const isBoolean = require('./boolean')
const isStringPrimitive = require('./stringPrimitive')
const isNumberPrimitive = require('./numberPrimitive')
const isNullOrUndefined = require('./nullOrUndefined')

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
 * isPrimitive('abc') // => true
 * isPrimitive(new String('abc')) // => false
 * isPrimitive(1) // => true
 * isPrimitive([]) // => false
 * isPrimitive('') // => true
 * isPrimitive({}) // => false
 *
 */
module.exports = function isPrimitive(node) {
  return (
    isNullOrUndefined(node) ||
    isStringPrimitive(node) ||
    isNumberPrimitive(node) ||
    isBoolean(node) // isBooleanPrimitive
  )
}
