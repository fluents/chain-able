const reduce = require('../reduce')
const add = require('./add')


/**
 * Adds together all the elements of a list.
 * @since 5.0.0-beta.5
 *
 * @memberOf conditional
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 *
 * @sig [Number] -> Number
 * @func
 * @fork v0.1.0
 * @category Math
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/sum.js ramda-sum}
 * {@link https://github.com/lodash/lodash/blob/master/sum.js lodash-sum}
 * @see {@link lodash-sum}
 * @see {@link ramda-sum}
 *
 * @see reduce
 * @example
 *
 *      sum([2,4,6,8,100,1])
 *      //=> 121
 *
 */
module.exports = reduce(add, 0)
