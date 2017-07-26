const curry = require('../fp/curry')

/**
 * @desc first fn || second fn, curried
 * @memberOf conditional
 * @since  4.0.1
 *
 * @param  {Function} left first fn
 * @param  {Function} right second fn
 * @param  {*} x value to pass into left & right, @curried
 * @return {boolean} one of the functions return truthy @curried
 *
 * @name or
 * @func
 *
 * @example
 *
 *    const {isTrue, isFalse} = require('chain-able')
 *
 *    const either = or(isFalse, isTrue)
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
 *    // because curried
 *    or(isTrue, isFalse, true) //=> true
 *
 */
module.exports = curry(3, (left, right, x) => left(x) || right(x))
