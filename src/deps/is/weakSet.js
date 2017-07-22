const isObjNotNull = require('./objNotNull')
const toS = require('./toS')

/**
 * Checks if `value` is classified as a `isWeakSet` object.
 *
 * @since 5.0.0-beta.4
 * @category Lang
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a weak map, else `false`.
 *
 * @example
 *
 *   isWeakSet(new WeakSet)
 *   // => true
 *
 *   isWeakSet(new Set)
 *   // => false
 *
 */
function isWeakSet(x) {
  return isObjNotNull(x) && toS(x) === '[object WeakSet]'
}

module.exports = isWeakSet
