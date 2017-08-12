const curry = require('../fp/curry')

/**
 * @memberOf math
 * @since 5.0.0-beta.4
 * @alias gt
 * @alias isGreaterThan
 * @alias greaterThan
 *
 * @param {number} aboveThis x is `aboveThis`
 * @param {number} x is above `abovethis`
 * @return {boolean} x > aboveThis
 *
 * @category Math
 *
 * @example
 *    isAbove(0, 1) //=> true
 *    isAbove(1, 1) //=> false
 *    isAbove(1, 0) //=> false
 */
function isAbove(aboveThis, x) {
  return x > aboveThis
}

module.exports = curry(2, isAbove)
