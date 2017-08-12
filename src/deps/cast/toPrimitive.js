const isNil = require('../is/nullOrUndefined')

/**
 * @since 5.0.0-beta.9
 * @name toPrimitive
 * @alias toValue
 * @alias toValueOf
 *
 * @param {*} x value to convert to primitive
 * @return {Primitive}
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf mozilla_valueof}
 * @see {@link mozilla_valueof}
 *
 * @example
 *    toPrimitive(10) //=> 10
 */
const toPrimitive = function(x) {
  return isNil(x) ? x : x.valueOf()
}

module.exports = toPrimitive
