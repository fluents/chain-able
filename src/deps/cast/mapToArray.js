const preAllocate = require('../array/preAllocate')

/**
 * @desc Converts `map` to its key-value pairs.
 * @since 5.0.0-beta.6
 *
 * @param {Object} map The map to convert.
 * @return {Array} Returns the key-value pairs.
 *
 * {@link https://github.com/andrewplummer/Sugar/blob/master/lib/common.js#L1235 sugar-settoarray}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/mapToArray.js lodash-maptoarray}
 * @see {@link lodash-maptoarray}
 * @see {@link sugar-maptoarray}
 * @see cast/pairs
 *
 * @example
 *    mapToArray(new Map(Object.entries({eh: true})))
 *    //=> [ ['eh', true] ]
 */
function mapToArray(map) {
  let index = -1
  const result = preAllocate(map.size)

  map.forEach((value, key) => {
    result[++index] = [key, value]
  })

  return result
}

module.exports = mapToArray
