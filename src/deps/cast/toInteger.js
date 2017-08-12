const isNaN = require('../is/NaN')
const toNumber = require('./toNumber')

/**
 * @name toInteger
 * @alias toInt
 *
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param {*} x anything
 * @return {number} Number(x) if x is not nan
 *
 * {@link https://github.com/andrewplummer/Sugar/blob/master/lib/common.js#L322 sugar-topositiveinteger}
 * {@link https://github.com/lodash/lodash/blob/master/toInteger.js lodash-tointeger}
 * {@link https://github.com/chriso/validator.js/blob/master/src/lib/toInteger.js validator-tointeger}
 * {@link https://tc39.github.io/ecma262/#sec-tointeger emca-tointeger}
 * @see {@link emca-tointeger}
 * @see {@link validator-tointeger}
 * @see {@link lodash-tointeger}
 * @see {@link sugar-topositiveinteger}
 * @see cast/number
 * @see is/NaN
 *
 * @example
 *
 *   toInteger(10)         // => 10
 *   toInteger(NaN)        // => +0
 *   toInteger(+Infinity)  // => +Infinity
 *   toInteger('100')      // => +100
 *
 *  @example
 *
 *   toInteger(3.2)
 *   //=> 3
 *
 *   toInteger(Number.MIN_VALUE)
 *   //=> 0
 *
 *   toInteger(Infinity)
 *   //=> 1.7976931348623157e+308
 *
 *   toInteger('3.2')
 *   //=> 3
 *
 */
function toInteger(x) {
  const number = toNumber(x)

  if (isNaN(number)) {
    return +0
  }
  else if (number === 0 || number === -Infinity || number === +Infinity) {
    return number
  }
  else {
    return Math.sign(number) * Math.floor(Math.abs(number))
  }
}

module.exports = toInteger
