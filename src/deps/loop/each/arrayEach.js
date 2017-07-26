const isNill = require('../../is/nullOrUndefined')

/**
 * A specialized version of `forEach` for arrays.
 * @since 5.0.0-beta.5
 * @memberOf loop
 *
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  let index = -1
  const length = isNill(array) ? 0 : array.length

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}

module.exports = arrayEach
