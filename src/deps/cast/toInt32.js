/**
 * >>> 0 // N >>> 0 is shorthand for ToUint32
 *
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param {number | string} i32
 * @return {number}
 *
 * @name toInt32
 * @alias castToSigned32BitInteger
 * @alias castTo32
 * @alias castToInt32
 * @alias toInt32
 * @alias toSigned32
 * @alias to32Bit
 *
 * @see cast/toSigned31
 * @see https://github.com/facebook/immutable-js/blob/master/src/TrieUtils.js#L58
 * @see https://github.com/facebook/immutable-js/blob/master/src/Math.js#L22
 *
 * @TODO example
 */
module.exports = function toSigned32(i32) {
  // eslint-disable-next-line
  return i32 >>> 0
}
