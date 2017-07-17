/**
 * first fn & second fn
 * @memberOf conditional
 * @since  4.0.1
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
module.exports = (left, right) => x => left(x) && right(x)
