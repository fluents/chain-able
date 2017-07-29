const MAX_32_BIT = require('../native/MAX_32_BIT')
const toInt32 = require('../cast/toSigned32')
const isNumberPrimitive = require('./numberPrimitive')
const isStringPrimitive = require('./stringPrimitive')

/**
 * This implements "is array index" which the ECMAString spec defines as:
 * > A String property name P is an array index if and only if
 * > ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
 * > to 2^32−1.
 *
 * @since 5.0.0-beta.6
 * @name isValidArrayIndex
 *
 * @param {string | number} x value to check
 * @return {boolean} x isValidArrayIndex
 *
 * @see https://github.com/facebook/immutable-js/blob/master/src/TrieUtils.js#L58
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
 * @see cast/toSigned32
 * @see is/validIndex
 *
 * @example
 *
 *    isValidArrayIndex(100)         //=> true
 *    isValidArrayIndex('100')       //=> true
 *    isValidArrayIndex('100.1')     //=> false
 *    isValidArrayIndex('eh')        //=> false
 *
 */
module.exports = function isValidArrayIndex(x) {
  // @TODO ensure this is good ternary, could be 1 line if
  // or `!isNumberPrimitive`
  if (isStringPrimitive(x)) {
    if ('' + toInt32(x) !== x || toInt32(x) === MAX_32_BIT) {
      return false
    }
    else {
      return true
    }
  }
  else {
    return true
  }
}
