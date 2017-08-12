/**
 * v8 has an optimization for storing 31-bit signed numbers.
 * Values which have either 00 or 11 as the high order bits qualify.
 * This function drops the highest order bit in a signed number, maintaining
 * the sign bit.
 *
 * @since 5.0.0-beta.6
 * @version 2.0.0 <- accidentally had as signed, fixed to uint
 * @memberOf cast
 *
 * @name toUint31
 * @alias castToSigned31BitUinteger
 * @alias castTo31
 * @alias castToUint31
 * @alias toSignedUint31
 * @alias smi
 *
 * @param {number} i32 32bit integer
 * @return {number} unsigned31Integer number
 *
 * {@link https://github.com/facebook/immutable-js/blob/master/src/Math.js#L22 immutablejs-tounsigned31}
 * @see {@link immutablejs-tounsigned31}
 */
module.exports = function toUnsigned31(i32) {
  // eslint-disable-next-line
  return i32 >>> 1 & 0x40000000 | i32 & 0xbfffffff;
}
