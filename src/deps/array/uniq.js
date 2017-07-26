/* eslint prefer-includes/prefer-includes: "OFF" */

/**
 * @desc use in array.filter(uniq) to de-dupe values using indexOf
 * @since  0.1.0
 * @memberOf array
 *
 * @param  {*} value value in array iteration
 * @param  {number} index current index
 * @param  {Array} arr array being iterated, `thisArg` when using .filter
 * @return {Array} de-duped/uniqued array
 *
 * @name uniq
 * @func
 *
 * {@link https://github.com/lodash/lodash/blob/master/uniq.js lodash-uniq}
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts#L58 mobx-uniq}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L559 underscore-uniq}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter mozilla-array-filter}
 * @see {@link mozilla-array-filter}
 * @see {@link underscore-uniq}
 * @see {@link mobx-uniq}
 * @see {@link lodash-uniq}
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
