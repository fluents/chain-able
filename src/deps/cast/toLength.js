const MAX_ARRAY_LENGTH = require('../native/MAX_ARRAY_LENGTH')
const toInteger = require('./toInteger')

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on emca-toLength
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 5.0.0-beta.7
 * @memberOf cast
 *
 * @param {*} value The value to convert.
 * @return {number} Returns the converted integer.
 *
 * @fork 4.0.0
 * @category Lang
 *
 * {@link http://ecma-international.org/ecma-262/7.0/#sec-tolength emca-tolength}
 * {@link https://github.com/lodash/lodash/blob/master/toLength.js lodash-tolength}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L159 underscore-tolength}
 * @see {@link underscore-tolength}
 * @see {@link lodash-tolength}
 * @see {@link emca-tolength}
 *
 * @example
 *
 *     toLength(3.2)
 *     // => 3
 *
 *     toLength(Number.MIN_VALUE)
 *     // => 0
 *
 *     toLength(Infinity)
 *     // => 4294967295
 *
 *     toLength('3.2')
 *     // => 3
 *
 */
function toLength(value) {
  value = toInteger(value)

  if (value < 0) {
    return 0
  }
  // @TODO why nor return 0?
  // @TODO if env perf > size?... still, this should
  // `goto` the last else, easy math
  // else if (value === 0) {
  //   return value
  // }
  else if (value > MAX_ARRAY_LENGTH) {
    return MAX_ARRAY_LENGTH
  }
  else {
    return value
  }
}

module.exports = toLength
