const toarr = require('../to-arr')

/**
 * @desc concat two values, coerce to arrays
 * @since 4.0.0
 * @memberOf array
 *
 * @param  {Array | *} one toArr1
 * @param  {Array | *} two toArr2
 * @return {Array} [one, two]
 *
 * @name concatArray
 * @alias concatArray
 *
 * @func
 * @see deps/to-arr
 *
 * @example
 *
 *   concat([1], [2])          //=> [1, 2]
 *   concat([1], 2)            //=> [1, 2]
 *   concat(1, 2)              //=> [1, 2]
 *   concat(new Set([1]), 2)   //=> [1, 2]
 *
 *   // kind of weird...
 *   concat(null, 2)           //=> [2]
 *   concat(undefined, 2)      //=> [2]
 *   concat(1, null)           //=> [1, null]
 *
 */
module.exports = (one, two) => toarr(one || []).concat(toarr(two))

// merge 1-2 arrays
// function concat(set1, set2) {
//   set1 = set1 || []
//   set2 = set2 || []
//   var idx
//   var len1 = set1.length
//   var len2 = set2.length
//   var result = []
//
//   idx = 0
//   while (idx < len1) {
//     result[result.length] = set1[idx]
//     idx += 1
//   }
//   idx = 0
//   while (idx < len2) {
//     result[result.length] = set2[idx]
//     idx += 1
//   }
//   return result
// }
