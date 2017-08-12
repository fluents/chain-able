/**
 * A specialized version of `indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @memberOf array
 * @since 5.0.0-beta.1
 *
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @return {number} Returns the index of the matched value, else `-1`.
 *
 * @example
 *
 *    indexOf([10], 10) //=> 0
 *    indexOf([], 10)   //=> -1
 *
 */
function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1
  const {length} = array

  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

module.exports = strictIndexOf
