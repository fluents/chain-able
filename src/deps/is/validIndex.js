const MAX_SAFE_INTEGER = require('../native/MAX_SAFE_INTEGER')
const isSymbol = require('./symbol')
const isNil = require('./nullOrUndefined')
const isNumberPrimitive = require('./numberPrimitive')
const isUnsignedInteger = require('./unsignedInteger')
const hasDecimals = require('./hasDecimals')

/**
 * @name isValidIndex
 * @desc Checks if `value` is a valid array-like index.
 * @since 5.0.0-beta.6
 * @memberOf is
 *
 * @param {*} x The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @return {boolean} Returns `true` if `value` is a valid index, else `false`.
 *
 * {@link https://github.com/lodash/lodash/blob/master/.internal/isIndex.js lodash-is-valid-index}
 * @see {@link lodash-is-valid-index}
 * @see is/hasDecimals
 * @see native/MAX_SAFE_INTEGER
 *
 * @example
 *
 *    isValidIndex(0)       //=> true
 *    isValidIndex(100)     //=> true
 *    isValidIndex('100')   //=> true
 *
 *    isValidIndex('100.1') //=> false
 *
 */
module.exports = function isValidIndex(x, length) {
  length = isNil(length) ? MAX_SAFE_INTEGER : length

  // !! so 0 would be false
  // but this is a silly check
  // because if it is 0, that does not matter until isUnsignedInteger check
  // and in that case we already check > -1 anyway
  //
  // eslint-disable-next-line
  // if (!!length) {
  //   return false
  // }
  if (isNumberPrimitive(x)) {
    return true
  }
  // above 0, has no decimals, is less than length
  else if (!isSymbol(x) && isUnsignedInteger(x)) {
    return x > -1 && !hasDecimals(x) && x < length && length >= 0
  }
  else {
    return false
  }

  // @NOTE was some other libs version, hard to read
  // return !!length &&
  //   (type == 'number' ||
  //     (type != 'symbol' && reIsUint.test(value))) &&
  //       (value > -1 && value % 1 == 0 && value < length)
}
