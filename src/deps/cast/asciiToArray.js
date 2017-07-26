/**
 * Converts an ASCII `string` to an array.
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('')
}

module.exports = asciiToArray
