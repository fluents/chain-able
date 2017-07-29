const isTrue = require('./true')

/**
 * @name isInfinity
 * @since 5.0.0-beta.6
 * @memberOf is
 *
 * @param  {number} x value to check
 * @param  {boolean} [positiveNegative=undefined] should check for -+
 * @return {boolean} x isInfinity
 *
 * @example
 *
 *    isInfinity(Infinity) //=> true
 *    isInfinity(-Infinity) //=> false
 *    isInfinity(-Infinity, true) //=> true
 *    isInfinity(0) //=> false
 *
 */
module.exports = function isInfinity(x, positiveNegative) {
  if (x === Infinity) return true
  else if (isTrue(positiveNegative)) return x === -Infinity || x === +Infinity
  else return false
}
