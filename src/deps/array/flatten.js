/**
 * @desc flatten multi-dimensional arrays in 1 line
 * @since 4.0.0
 * @memberOf array
 *
 * @param  {Array<Array | any>} x array(s) to flatten
 * @return {Array<any>} flattened arrays
 *
 * {@link https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript stack-overflow-flatten}
 * {@link https://github.com/andrewplummer/Sugar/blob/master/lib/array.js#L202 sugar-flatten}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L527 underscore-flatten}
 * @see {@link underscore-flatten}
 * @see {@link sugar-flatten}
 * @see {@link stack-overflow-flatten}
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
