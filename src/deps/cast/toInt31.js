/**
 * v8 has an optimization for storing 31-bit signed numbers.
 * Values which have either 00 or 11 as the high order bits qualify.
 * This function drops the highest order bit in a signed number, maintaining
 * the sign bit.
 *
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name toInt31
 * @alias castToSigned31BitInteger
 * @alias castTo31
 * @alias castToInt31
 * @alias toSignedInt31
 * @alias smi
 *
 * @param {number} i32
 * @return {number} signed31bit number
 *
 * @see https://github.com/facebook/immutable-js/blob/master/src/Math.js#L22
 */
module.exports = function smi(i32) {
  // eslint-disable-next-line
  return i32 >>> 1 & 0x40000000 | i32 & 0xbfffffff;
}
