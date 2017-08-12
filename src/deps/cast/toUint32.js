/**
 * N >>> 0 is shorthand for ToUint32
 *
 * @since 5.0.0-beta.6
 * @version 2.0.0 <- accidentally had as signed, fixed to uint
 * @memberOf cast
 *
 * @param {number | string} i32 32bit number
 * @return {number} unsigned 32bit number
 *
 * @name toUint32
 * @alias castToUnsigned32BitInteger
 * @alias castToUnsigned32
 * @alias castToUnsignedInt32
 * @alias toUnsigned32
 * @alias toUnsigned32Bit
 *
 * @see cast/toUint31
 *
 * {@link https://github.com/facebook/immutable-js/blob/master/src/Math.js#L22 immutable-js-siml}
 * {@link https://github.com/facebook/immutable-js/blob/master/src/TrieUtils.js#L58 immutable-js-trie-uint32}
 * {@link https://stackoverflow.com/questions/1908492/unsigned-integer-in-javascript stack-overflow-unsigned-integer}
 * {@link https://tc39.github.io/ecma262/#sec-touint32 emca-touint32}
 * @see {@link emca-tounit32}
 * @see {@link stack-overflow-unsigned-integer}
 * @see {@link immutable-js-trie-uint32}
 * @see {@link immutable-js-siml}
 *
 * @example
 *
 *   toUint32(-Math.pow(2,32))   //=> 0
 *   toUint32(-Math.pow(2,32)-1) //=> 4294967295
 *   toUint32(-1)                //=> 4294967295
 *
 */
module.exports = function toUnsigned32(i32) {
  // eslint-disable-next-line
  return i32 >>> 0
}
