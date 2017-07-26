const curry = require('../fp/curry')

/**
 * @desc first fn & second fn
 * @memberOf conditional
 * @since  4.0.1
 *
 * @param  {Function} left first fn
 * @param  {Function} right second fn
 * @return {Function | boolean} both functions return truthy @curried
 *
 * @curried
 * @name and
 * @alias both
 * @func
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
