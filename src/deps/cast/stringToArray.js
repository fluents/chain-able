const hasUnicode = require('../string/hasUnicode')
const asciiToArray = require('./asciiToArray')
const unicodeToArray = require('./unicodeToArray')

/**
 * Converts `string` to an array, checks unicode & asci
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name stringToArray
 * @alias stringToArr
 * @alias strToArr
 *
 * @param {string} string The string to convert.
 * @return {Array} Returns the converted array. `Array(x)`
 *
 * {@link https://github.com/lodash/lodash/blob/master/.internal/stringToArray.js lodash-stringtoarray}
 * @see {@link lodash-stringtoarray}
 * @see string/hasUnicode
 * @see cast/unicodeToArray
 * @see cast/asciiToArray
 *
 * @example
 *    stringToArray('eh') //=> ['e', 'eh']
 */
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string)
}

module.exports = stringToArray
