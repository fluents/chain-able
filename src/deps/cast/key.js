const isStringPrimitive = require('../is/stringPrimitive')
const isSymbol = require('../is/symbol')
const isZeroish = require('../is/zeroish')
const isMinusInfinity = require('../is/negativeInfinity')

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @memberOf cast
 * @since 5.0.0-beta.6
 * @alias toProperty
 * @alias toProp
 *
 * @param {*} value The value to inspect.
 * @return {string|symbol} Returns the key.
 *
 * @example
 *
 *    const symba = Symbol.for('symba')
 *    toKey(symba)
 *    //=> Symbol.for('symba')
 *
 *    toKey(0)
 *    //=> '0'
 *
 *    toKey('0')
 *    //=> '0'
 *
 *    toKey(-Infinity)
 *    //=> '-0'
 *
 *    toKey(-0)
 *    //=> '-0'
 *
 *
 */
function toKey(value) {
  if (isStringPrimitive(value) || isSymbol(value)) {
    return value
  }
  else if (isZeroish(value) && isMinusInfinity(value)) {
    return '-0'
  }
  else {
    return '' + value
  }
}

module.exports = toKey
