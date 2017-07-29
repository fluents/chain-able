const curry = require('../fp/curry')

/**
 * Returns the larger of its two arguments.
 * @since 5.0.0-beta.6
 * @name max
 * @alias biggest
 * @memberOf math
 *
 * @param {number|*} a
 * @param {number|*} b
 * @return {number|*} if (b > a) b; else b
 *
 * @func
 * @fork v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 *
 * @see maxBy, min
 * @see math/min
 *
 * @example
 *
 *      max(789, 123); //=> 789
 *      max('a', 'b'); //=> 'b'
 *
 */
module.exports = curry(2, function max(a, b) {
  return b > a ? b : a
})
