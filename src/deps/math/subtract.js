const curry = require('../fp/curry')

/**
 * @name subtract
 * @memberOf math
 * @since 5.0.0-beta.4
 * @category Math
 *
 * @curried 2
 *
 * @alias minus
 * @alias sub
 *
 * @param {number} target number to subtract FROM
 * @param {number} x number to subtract
 * @return {number} target - x
 *
 * @example
 *  subtract(2, 2) //=> 0
 */
module.exports = curry(2, (target, x) => target - x)
