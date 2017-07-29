const isObjNotNull = require('./objNotNull')
const toS = require('./toS')

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @since 5.0.0-beta.4
 * @category Lang
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a weak map, else `false`.
 *
 * @example
 *
 *   isWeakMap(new WeakMap)
 *   //=> true
 *
 *   isWeakMap(new Map)
 *   //=> false
 *
 */
function isWeakMap(x) {
  return isObjNotNull(x) && toS(x) === '[object WeakMap]'
}

module.exports = isWeakMap
