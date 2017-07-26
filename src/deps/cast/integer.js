const isNaN = require('../is/NaN')
const toNumber = require('./number')

/**
 * @name toInteger
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param  {*} x anything
 * @return {number} Number(x) if x is not nan
 *
 * @see cast/number
 * @see is/NaN
 * @see https://github.com/chriso/validator.js/blob/master/src/lib/toInteger.js
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
 */
function toInteger(argument) {
  const number = toNumber(argument)
  if (isNaN(number)) {
    return +0
  }

  if (number === 0 || number === -Infinity || number === +Infinity) {
    return number
  }

  return Math.sign(number) * Math.floor(Math.abs(number))
}

module.exports = toInteger
