const curry = require('../fp/curry')

/**
 * @memberOf math
 * @since 5.0.0-beta.7
 * @name isAboveOrEq
 * @alias gte
 * @alias aboveOrEq
 * @alias greaterThanOrEq
 * @alias isAboveOrEqual
 * @alias isAboveOrEqualTo
 * @alias isAboveOrEqTo
 * @alias isGreaterOrEqTo
 * @alias isGreaterThanOrEq
 * @alias isGreaterThanOrEqTo
 *
 * @param  {number} aboveThis x is `aboveThis` or equalTo
 * @param  {number} x is above `abovethis`
 * @return {boolean} x >= aboveThis
 *
 * @category Math
 *
 * @example
 *    isAboveOrEq(0, 1) //=> true
 *    isAboveOrEq(1, 1) //=> true
 *    isAboveOrEq(1, 0) //=> false
 */
const isAboveOrEq = function(aboveThis, x) {
  return x >= aboveThis
}

module.exports = curry(2, isAboveOrEq)
