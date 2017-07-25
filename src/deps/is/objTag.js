const toS = require('./toS')

/**
 * Checks if `value` toStringTag is [object Object]
 * @NOTE Object.prototype.toString.call(val) === '[object Object]'
 *
 * @memberOf is
 * @since 5.0.0-beta.1
 * @category Lang
 *
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is an object, else `false`.
 *
 * @func
 * @name isObjTag
 * @alias isObjectTag
 *
 * @example
 *
 * isObjectTag({})
 * // => true
 *
 * isObjectTag(Object.create(null))
 * // => true
 *
 * isObjectTag(Object({}))
 * // => true
 *
 * isObjectTag([1, 2, 3])
 * // => false
 *
 * isObjectTag(Function)
 * // => false
 *
 * isObjectTag(null)
 * // => false
 *
 */
module.exports = x => toS(x) === '[object Object]'
