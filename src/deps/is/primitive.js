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
 * @memberOf is
 *
 * @param {*} x The value to check.
 * @return {boolean} x is number|string|boolean|null|undefined
 *
 * @func
 * @category Lang
 *
 * {@link https://github.com/andrewplummer/Sugar/blob/master/lib/common.js#L583 sugar-isprimitive}
 * {@link https://nodejs.org/api/util.html#util_util_isprimitive_object node-util-isprimitive}
 * {@link http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html java-data-types}
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/Primitive mozilla-primitive}
 * {@link http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html primitive-conversions-in-js}
 *
 * @see {@link primitive-conversions-in-js}
 * @see {@link mozilla-primitive}
 * @see {@link java-data-types}
 * @see {@link node-util-isprimitive}
 * @see {@link sugar-isprimitive}
 *
 * @see is/nullOrUndefined
 * @see is/stringPrimitive
 * @see is/booleanPrimitive
 * @see is/numberPrimitive
 *
 * @example
 *
 *     isPrimitive('abc')            //=> true
 *     isPrimitive(1)                //=> true
 *     isPrimitive('')               //=> true
 *     isPrimitive(null)             //=> true
 *     isPrimitive(undefined)        //=> true
 *     isPrimitive(void 0)           //=> true
 *
 *     isPrimitive(new String('abc')) //=> false
 *     isPrimitive([])                //=> false
 *     isPrimitive(() => {})          //=> false
 *     isPrimitive({})                //=> false
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
