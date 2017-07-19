const and = require('../conditional/and')
const all = require('../conditional/all')
const isArray = require('./array')

/**
 * @desc every item in an array matches predicate
 * @since 4.0.0 was in validatorBuilder
 * @version 5.0.0
 *
 * @param  {Function} predicate test to pass on every item in an array
 * @return {boolean} all match predicate
 *
 * @example
 *
 *  isArrayOf(isTrue)([true, true]) //=> true
 *  isArrayOf(isEmpty)(['']) //=> true
 *
 *  isArrayOf(isBoolean)([true, false, 1, 2, 0]) //=> false
 *  isArrayOf(isString)(['string', Number]) //=> false
 *
 */
module.exports = function isArrayOf(predicate) {
  return and(isArray, all(predicate))
}
