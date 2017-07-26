const matchTypedTag = require('../regexp/matchTypedTag')
const toS = require('./toS')
const isObjNotNull = require('./objNotNull')

/**
 * Checks if `value` is classified as a typed array.
 * @since 5.0.0-beta.6
 *
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a typed array, else `false`.
 *
 * @name isArrayTyped
 * @alias isTypedArray
 *
 * @fork 3.0.0
 * @category Lang
 *
 * @example isTypedArray(new Uint8Array) // => true
 * @example isTypedArray([])             // => false
 *
 */
module.exports = x => isObjNotNull(x) && matchTypedTag.test(toS(x))
