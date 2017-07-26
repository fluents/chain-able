/**
 * @desc flatten multi-dimensional arrays in 1 line
 * @since 4.0.0
 * @memberOf array
 *
 * @param  {Array<Array | any>} x array(s) to flatten
 * @return {Array<any>} flattened arrays
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L527 underscore-flatten}
 * @see {@link underscore-flatten}
 * @see https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
 *
 * @example
 *
 *    flatten([[1], [2]])
 *    //=> [1, 2]
 *    flatten([[1], 2])
 *    //=> [1, 2]
 *    flatten(1)
 *    //=> [1]
 *
 */
module.exports = x => [].concat.apply([], x)

// function flatten(arr) {
//   const flat = [].concat(...arr)
//   return flat.some(Array.isArray) ? flatten(flat) : flat
// }

// const _isArrayLike = require('../is/_isArrayLike')
/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
// module.exports = function _makeFlat(recursive) {
//   return function flatt(list) {
//     var value, jlen, j
//     var result = []
//     var idx = 0
//     var ilen = list.length
//
//     while (idx < ilen) {
//       if (_isArrayLike(list[idx])) {
//         value = recursive ? flatt(list[idx]) : list[idx]
//         j = 0
//         jlen = value.length
//         while (j < jlen) {
//           result[result.length] = value[j]
//           j += 1
//         }
//       } else {
//         result[result.length] = list[idx]
//       }
//       idx += 1
//     }
//     return result
//   };
// }
