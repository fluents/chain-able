const isNill = require('../../is/nullOrUndefined')

/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 * @memberOf loop
 *
 * @since 5.0.0-beta.6
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Array} Returns the new mapped array.
 *
 * @example
 *
 * const square = n => n * n
 * map([4, 8], square)
 * // => [16, 64]
 */
function map(array, iteratee) {
  let index = -1
  const length = isNill(array) ? 0 : array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

module.exports = map
