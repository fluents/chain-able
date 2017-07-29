const flip2 = require('../fp/flip2')
const max = require('./max')

/**
 * Returns the *smallest* of its two arguments.
 * @since 5.0.0-beta.6
 * @name min
 * @alias smallest
 * @memberOf math
 *
 * @param {number|*} a
 * @param {number|*} b
 * @return {number|*} if (b < a) b; else a
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
 *      min(789, 123); //=> 789
 *      min('a', 'b'); //=> 'b'
 *
 */
module.exports = flip2(max)
