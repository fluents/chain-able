/**
 * first fn || second fn
 * @memberOf conditional
 * @since  4.0.1
 * @param  {Function} left first fn
 * @param  {Function} right second fn
 * @return {boolean} one of the functions return truthy
 *
 * @example
 *
 *    const either = or(x => x === false, x => x === true)
 *
 *    either([true])
 *    //=> true
 *
 *    either([new Boolean(true)])
 *    //=> false
 *
 *    either([1])
 *    //=> false
 *
 */
module.exports = (left, right) => x => left(x) || right(x)
