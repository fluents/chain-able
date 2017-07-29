const isNill = require('../is/nullOrUndefined')

// @TODO need to finish `copy/`

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @since 0.1.0
 * @category Array
 *
 * @param {Array} array The array to shuffle.
 * @return {Array} Returns the new shuffled array.
 *
 * {@link https://github.com/lodash/lodash/blob/master/shuffle.js lodash-shuffle}
 * @see {@link lodash-shuffle}
 *
 * @example
 *
 *   shuffle([1, 2, 3, 4])
 *   //=> [4, 1, 3, 2]
 *
 */
// module.exports = function shuffle(array) {
//   const length = isNill(array) ? 0 : array.length
//   if (!length) return []
//
//   let index = -1
//   const lastIndex = length - 1
//   const result = copyArray(array)
//
//   while (++index < length) {
//     const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
//     const value = result[rand]
//     result[rand] = result[index]
//     result[index] = value
//   }
//
//   return result
// }
