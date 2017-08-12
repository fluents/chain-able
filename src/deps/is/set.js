const toS = require('./toS')

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a set, else `false`.
 *
 * @TODO map[Symbol.species] === Set
 *
 * @example
 *
 *   isSet(new Set)
 *   //=> true
 *
 *   isSet(new WeakSet)
 *   //=> false
 *
 */
module.exports = function isSet(x) {
  // return x instanceof Set || toS(x) === '[object Set]'
  return toS(x) === '[object Set]'
}
// x instanceof Set ||
