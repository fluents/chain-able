const curry = require('../fp/curry')

/**
 * @memberOf expressions
 * @since 5.0.0-beta.4
 * @alias gt
 *
 * @param  {number} aboveThis x is `aboveThis`
 * @param  {number} x is above `abovethis`
 * @return {boolean} x > aboveThis
 *
 * @category Math
 *
 * @example
 *    isAbove(0, 1) //=> true
 *    isAbove(1, 0) //=> false
 */
function isAbove(aboveThis, x) {
  return x > aboveThis
}

module.exports = curry(2, isAbove)
