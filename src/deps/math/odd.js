const isNumber = require('../is/number')

/* prettier-ignore */
/**
 * @desc isOdd
 * @memberOf math
 * @since 5.0.0-beta.4
 * @category Math
 *
 * @param  {number | any} x value to check
 * @return {boolean} isOdd
 *
 * @see https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even (smaller solution than original)
 * @extends isNumber
 * @alternate n % 2 === 0
 *
 * @example
 *
 *    isOdd(1)
 *    //=> true
 *    isOdd(2)
 *    //=> false
 */
module.exports = function isOdd(x) {
  return isNumber(x) && (x & 1)
}
