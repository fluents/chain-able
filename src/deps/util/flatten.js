/**
 * @desc flatten multi-dimensional arrays in 1 line
 * @since 4.0.0
 * @memberOf util
 *
 * @param  {Array<Array | any>} x array(s) to flatten
 * @return {Array<any>} flattened arrays
 *
 * @see https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
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
module.exports = x => [].concat.apply(x)

// function flatten(arr) {
//   const flat = [].concat(...arr)
//   return flat.some(Array.isArray) ? flatten(flat) : flat
// }
