const size = require('../util/size')
const isValidArrayIndex = require('../is/validArrayIndex')
const isStringPrimitive = require('../is/stringPrimitive')
const toInt32 = require('../cast/toInt32')
const toLength = require('../cast/toLength')

/**
 * @name toIndex
 * @alias castToIndex
 *
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param {number} index index to cast
 * @param {number | Array} [list=1] number or array
 * @return {number} valid index
 *
 * {@link https://github.com/facebook/immutable-js/blob/master/src/TrieUtils.js#L58 immutable-js-toindex}
 * {@link https://tc39.github.io/ecma262/#sec-toindex emca-toindex}
 * @see {@link emca-toindex}
 * @see {@link immutable-js-toindex}
 *
 * @see cast/toLength
 * @see cast/toInt32
 * @see cast/toSize
 * @see is/validArrayIndex
 * @see is/stringPrimitive
 */
module.exports = function toIndex(index, list) {
  if (isValidArrayIndex(index) && isStringPrimitive(index)) {
    index = toInt32(index)
  }

  index = toLength(index)

  // below 0, add index (keep above 0)
  // else, index
  return index < 0
    // @NOTE ensure above 0 if index is way below 0
    ? (size(list || 1) + index) || 1
    : index
}
