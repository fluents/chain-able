const isBooleanPrimitive = require('./booleanPrimitive')
const isStringPrimitive = require('./stringPrimitive')
const isNumberPrimitive = require('./numberPrimitive')
const isNullOrUndefined = require('./nullOrUndefined')

/**
 * Checks if `value` is classified as a **primitive**
 * `(number|string|boolean|null|undefined)`
 *
 * @version 5.0.0 added booleanPrimitive, is in own file
 * @since 4.0.0 was in another file
 * @category Lang
 * @memberOf is
 * @param {*} x The value to check.
 * @returns {boolean} x is number|string|boolean|null|undefined
 *
 * @see http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 * @see http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
 *
 * @example
 *
 * isPrimitive('abc')            // => true
 * isPrimitive(1)                // => true
 * isPrimitive('')               // => true
 * isPrimitive(null)             // => true
 * isPrimitive(undefined)        // => true
 * isPrimitive(void 0)           // => true
 *
 * isPrimitive(new String('abc')) // => false
 * isPrimitive([])                // => false
 * isPrimitive(() => {})          // => false
 * isPrimitive({})                // => false
 *
 */
module.exports = function isPrimitive(node) {
  return (
    isNullOrUndefined(node) ||
    isStringPrimitive(node) ||
    isNumberPrimitive(node) ||
    isBooleanPrimitive(node)
  )
}
