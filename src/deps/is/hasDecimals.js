/**
 * @desc remainder / 1 is 0
 * @since 5.0.00beta.6
 * @memberOf is
 *
 * @param {number | string | *} x value to check
 * @return {boolean} x hasDecimals
 *
 * @func
 * @name hasDecimals
 * @alias isDecimalNumberish
 *
 * @TODO could ensure decimalNumber or isString first? (safety plus decision tree)
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() mozilla-arithmetic-operators-remainder}
 * {@link https://stackoverflow.com/questions/3803331/how-can-i-modulo-when-my-numbers-start-from-1-not-zero stack-overflow-modulo-start-from-zero}
 * @see {@link mozilla-arithmetic-operators-remainder}
 * @see {@link stack-overflow-modulo-start-from-zero}
 * @see is/validIndex
 *
 * @example
 *
 *  hasDecimals(1)             //=> false
 *  hasDecimals(Number(1))     //=> false
 *  hasDecimals(NaN)           //=> false
 *  hasDecimals(new Number(1)) //=> false
 *  hasDecimals('')            //=> false
 *  hasDecimals('100')         //=> false
 *
 *  hasDecimals('100.10')      //=> true
 *  hasDecimals(100.1)         //=> true
 *
 */
module.exports = x => x % 1 === 0
