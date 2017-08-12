const size = require('../../util/size')
const preAllocate = require('../../array/preAllocate')

/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 * @memberOf loop
 * @since 5.0.0-beta.6
 *
 * @name mapArray
 * @alias mapArrayVals
 *
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Array} Returns the new mapped array.
 *
 * @category Array
 *
 * {@link https://github.com/lodash/lodash/blob/master/map.js lodash-map}
 * @see {@link lodash-map}
 *
 * @example
 *
 *   const square = n => n * n
 *   mapArray([4, 8], square)
 *   //=> [16, 64]
 *
 */
function mapArray(array, iteratee) {
  let index = -1
  const length = size(array)
  const result = preAllocate(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

module.exports = mapArray
