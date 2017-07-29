const toInt32 = require('../cast/toSigned32')
const size = require('../util/size')
const isValidArrayIndex = require('../is/validArrayIndex')
const isStringPrimitive = require('../is/stringPrimitive')

/**
 * @name castToIndex
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param {number} index index to cast
 * @param {number | Array} [list=1] number or array
 * @return {number} valid index
 *
 * @see cast/toSigned32
 * @see is/validArrayIndex
 * @see is/stringPrimitive
 *
 */
module.exports = function castToIndex(index, list) {
  if (isValidArrayIndex(index) && isStringPrimitive(index)) {
    index = toInt32(index)
  }

  // below 0, add index
  // else, index
  return index < 0
    // @TODO isUndefined(list) ? 1 : list
    ? size(list || 1) + index
    : index
}
