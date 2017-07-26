const spreadableSymbol = require('../symbols/spreadable')
const toBoolean = require('../cast/boolean')
// is
const isArguments = require('./arguments')
const isArray = require('./array')

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @since 5.0.0-beta.5
 * @alias isConcatSpreadable
 * @alias isSpreadable
 *
 * @param {*} value The value to check.
 * @return {boolean} Returns `true` if `value` is flattenable, else `false`.
 *
 * @example
 *
 *    (function() {
 *      isFlattenable(arguments) //=> true
 *    })([0, 1, 2])
 *
 * @example
 *
 *    isFlattenable([[0], [1]])
 *    //=> true
 *
 * @example
 *    const obj = {}
 *    obj[Symbol.isConcatSpreadable] = true
 *    isFlattenable(obj)
 *    //=> true
 *
 */
function isFlattenable(value) {
  return isArray(value) ||
    isArguments(value) ||
    toBoolean(spreadableSymbol && value && value[spreadableSymbol])
}

module.exports = isFlattenable
