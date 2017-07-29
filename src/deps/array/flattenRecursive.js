const isArrayLike = require('../is/arrayLike')
// const toarr = require('../to-arr')

/**
 * `flatten` is a helper function that returns a fully recursive
 *
 * @memberOf array
 * @since 5.0.0-beta.6
 *
 * @param {Array<Array>} list multi-dimensional array-like list
 * @return {Array<*>} flattened list
 *
 * @see array/flatten
 *
 * @example
 *
 *    flattenRecursive([[0, [1]]])
 *    //=> [0, 1]
 *
 */
module.exports = function flattenRecursive(list) {
  // if (!isArrayLike(list)) return toarr(list)
  if (!isArrayLike(list)) return []

  // starting values
  let result = []
  let idx = 0
  let listLen = list.length
  // nested
  let value
  let nestedIdx

  while (idx < listLen) {
    // go deeper if needed
    if (isArrayLike(list[idx])) {
      value = flattenRecursive(list[idx])
      nestedIdx = 0

      while (nestedIdx < value.length) {
        result[result.length] = value[nestedIdx++]
      }
    }
    // just `push`, non-array value
    else {
      result[result.length] = list[idx]
    }

    idx += 1
  }

  return result
}
