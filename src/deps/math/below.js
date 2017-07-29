const curry = require('../fp/curry')

/**
 * @memberOf math
 * @since 5.0.0-beta.4
 * @alias lt
 *
 * @param  {number} belowThis x is `belowThis`
 * @param  {number} x is above `belowThis`
 * @return {boolean} x > belowThis
 *
 * @category Math
 *
 * @example
 *    isAbove(0, 1) //=> true
 *    isAbove(1, 0) //=> false
 */
function isBelow(belowThis, x) {
  return x < belowThis
}

module.exports = curry(2, isBelow)
