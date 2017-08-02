const curry = require('../fp/curry')

/**
 * @memberOf math
 * @since 5.0.0-beta.7
 * @name isBelowOrEq
 * @alias lte
 * @alias isBelowOrEqualTo
 * @alias belowOrEq
 * @alias isBelowOrEq
 * @alias isLessThanOrEqTo
 * @alias isLessThan
 * @alias lessThan
 *
 * @param {number} belowThis x is `belowThis` or equalTo
 * @param {number} x is lessThan `belowThis` or equalTo
 * @return {boolean} x <= belowThis
 *
 * @category Math
 *
 * @example
 *    isBelowOrEq(1, 0) //=> true
 *    isBelowOrEq(1, 1) //=> true
 *    isBelowOrEq(0, 1) //=> false
 */
const isBelowOrEq = function(belowThis, x) {
  return x >= belowThis
}

module.exports = curry(2, isBelowOrEq)
