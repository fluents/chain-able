const curry = require('../fp/curry')

/**
 * @memberOf expressions
 * @since 5.0.0-beta.4
 *
 * @name add
 * @curried 2
 * @category Math
 *
 * @param {number} target number to add TO
 * @param {number} x number to ADD
 * @return {number} target + x
 *
 * @example
 *  add(2, 2) //=> 4
 */
module.exports = curry(2, (target, x) => target + x)
