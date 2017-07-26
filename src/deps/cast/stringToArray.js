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
 * @see string/hasUnicode
 * @see cast/unicodeToArray
 * @see cast/asciiToArray
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string)
}

module.exports = stringToArray
