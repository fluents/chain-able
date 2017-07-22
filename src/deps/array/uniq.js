/* eslint prefer-includes/prefer-includes: "OFF" */

/**
 * @name uniqFilter
 * @func
 *
 * @since  0.1.0
 * @param  {*} value value in array iteration
 * @param  {number} index current index
 * @param  {Array} arr array being iterated, `thisArg` when using .filter
 * @return {Array} arr
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter mozilla-array-filter}
 * @see {@link mozilla-array-filter}
 *
 * @example
 *
 *   var list = [
 *      1, 2, 3,
 *      1, 2, 3,
 *      1, 2, 3
 *   ]
 *
 *   list.filter(uniq)
 *   //=> [1, 2, 3]
 *
 */
module.exports = (value, index, arr) => arr.indexOf(value) === index
