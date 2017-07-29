const isArray = require('../is/array')
const getLength = require('../util/length')
const castKey = require('./key')

/**
 * Converts lists into objects.
 * Pass either
 * 1. a single array of `[key, value]` pairs,
 * 2. or two parallel arrays of the same length -- one of keys, and one of
 *    the corresponding values.
 * Passing by pairs is the reverse of _.pairs.
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @alias fromPairs
 *
 * @param  {Array} list list of keys, or of [key, value] pairs
 * @param  {Array} [values] values if not using pairs
 * @return {Object}
 *
 * @see cast/pairs
 *
 * @example
 *  arrayToObj
 */
function arrayToObj(list, values) {
  let result = {}

  for (let i = 0, length = getLength(list); i < length; i++) {
    // keys, values
    if (values) {
      result[list[i]] = values[i]
    }
    // fallback to list as an object as pairs,
    else if (isArray(list[i])) {
      result[list[i][0]] = list[i][1]
    }
    // cast key, values-as-keys
    else {
      result[castKey(list[i])] = list[i]
    }
  }

  return result
}

module.exports = arrayToObj
