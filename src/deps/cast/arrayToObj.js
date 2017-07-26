const getLength = require('../util/length')

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
 * @param  {Array} list
 * @param  {Array} values
 * @return {Object}
 *
 *
 */
const arrayToObj = function(list, values) {
  let result = {}

  for (let i = 0, length = getLength(list); i < length; i++) {
    if (values) {
      //
      result[list[i]] = values[i]
    }
    else {
      result[list[i][0]] = list[i][1]
    }
  }

  return result
}

module.exports = arrayToObj
