const MAX_32_BIT = require('../native/MAX_32_BIT')
const toInteger = require('./toInteger')

/**
 * ToInt32(argument)
 * >> 0 is shorthand for toInt32
 *
 * @name toInt32
 * @alias toSigned32
 * @alias toInteger32
 * @alias to32BitInteger
 * @alias to32Bit
 *
 * @param {number} x any number
 * @return {number} 32bit integer
 *
 * {@link http://2ality.com/2012/02/js-integers.html 2ality-integers}
 * {@link https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/JSAPI_reference/JS::ToInt32 mozilla-toint32}
 * {@link https://tc39.github.io/ecma262/#sec-toint32 emca-toint32}
 * {@link https://github.com/facebook/immutable-js/blob/master/src/TrieUtils.js#L93 immutable-js-resolveindex}
 * @see {@link emca-toint32}
 * @see {@link immutable-js-resolveindex}
 * @see {@link 2ality-integers}
 *
 * @see native/MAX_32_BIT
 * @see cast/toInteger
 *
 * @example
 *
 *  toInt32(Math.pow(2,32))   //=> 0
 *  toInt32(Math.pow(2,32)+1) //=> 1
 *
 */
function toInt32(x) {
  return toInteger(x) % MAX_32_BIT
}

module.exports = toInt32
