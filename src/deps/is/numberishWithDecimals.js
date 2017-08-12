const and = require('../conditional/and')
const isNumberish = require('./numberish')
const hasDecimals = require('./hasDecimals')

/**
 * @since 5.0.0-beta.9
 * @desc checks first for numberish, then decimals
 * @name isNumberishWithDecimals
 * @alias isFloat
 *
 * @param {*} x
 * @return {boolean} x isNumberishWithDecimals
 *
 * @type {Function}
 */
const isNumberishWithDecimals = and(isNumberish, hasDecimals)
module.exports = isNumberishWithDecimals
