const curry = require('../fp/curry')

/**
 * @memberOf math
 * @since 5.0.0-beta.4
 *
 * @name isBelow
 * @alias lt
 * @alias below
 * @alias isLessThan
 * @alias lessThan
 *
 * @param  {number} belowThis x is `belowThis`
 * @param  {number} x is < `belowThis`
 * @return {boolean} x < belowThis
 *
 * @category Math
 *
 * @example
 *    isBelow(0, 1) //=> false
 *    isBelow(1, 0) //=> true
 */
function isBelow(belowThis, x) {
  return x < belowThis
}

module.exports = curry(2, isBelow)
