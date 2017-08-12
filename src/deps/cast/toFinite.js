const MAX_INTEGER = require('../native/MAX_INTEGER')
const INFINITY = require('../native/INFINITY')
const toNumber = require('./toNumber')

/**
 * Converts `value` to a finite number.
 * @since 5.0.0-beta.7
 * @memberOf cast
 *
 * @param {*} value The value to convert.
 * @return {number} Returns the converted number.
 *
 * {@link https://github.com/lodash/lodash/blob/master/toFinite.js lodash-tofinite}
 * @see {@link lodash-tofinite}
 * @see is/finite
 *
 * @category Lang
 * @fork 4.12.0
 *
 * @example
 *
 *     toFinite(3.2)
 *     // => 3.2
 *
 *     toFinite(Number.MIN_VALUE)
 *     // => 5e-324
 *
 *     toFinite(Infinity)
 *     // => 1.7976931348623157e+308
 *
 *     toFinite('3.2')
 *     // => 3.2
 *
 *     toFinite(NaN)
 *     // => 0
 *
 */
function toFinite(value) {
  // silly check, since casting to number will return a nan at worst
  // and 0 ? 0 : 0 ?
  // AND NaN check is at the end anyway 0.0
  // if (!value) return value === 0 ? value : 0

  value = toNumber(value)

  // when it is infinity,
  // put it -1 * +Infinity,
  // or +1 * -Infinity
  if (value === INFINITY || value === -INFINITY) {
    const sign = (value < 0 ? -1 : 1)
    return sign * MAX_INTEGER
  }

  // @NOTE this just checks isNaN, should be gtg
  // eslint-disable-next-line
  return value === value ? value : 0
}

module.exports = toFinite
