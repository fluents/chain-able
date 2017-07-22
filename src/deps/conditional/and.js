const curry = require('../fp/curry')

/**
 * @desc first fn & second fn
 * @name and
 * @alias both
 * @memberOf conditional
 * @since  4.0.1
 * @func
 *
 * @param  {Function} left first fn
 * @param  {Function} right second fn
 * @return {boolean} both functions return truthy
 *
 * @example
 *
 *    const both = and(x => typeof x === 'boolean', x => x === true)
 *
 *    both([true])
 *    //=> true
 *
 *    both([false])
 *    //=> false
 *
 *    both([1])
 *    //=> false
 *
 */
const and = (left, right) => x => left(x) && right(x)
module.exports = curry(2, and)
