/**
 * @desc is not infinity, and not nan, but this parses a float and is slower
 * @since 0.0.1
 * @version 5.0.0
 * @memberOf is
 *
 * @param  {number} n value to check
 * @return {boolean}
 *
 * {@link https://tc39.github.io/ecma262/#sec-isfinite-number emca-isfinite}
 * {@link https://github.com/lodash/lodash/blob/master/toFinite.js lodash-to-finite}
 * {@link http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric stack-overflow-isnumeric}
 * @see {@link emca-isfinite}
 * @see {@link stack-overflow-isnumeric}
 * @see {@link lodash-to-finite}
 * @see is/numberish
 * @see is/infinity
 *
 * @example
 *    isFinite(100)      //=> true
 *    isFinite('100')    //=> true
 *    isFinite(Infinity) //=> false
 */
module.exports = function isFiniteNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
