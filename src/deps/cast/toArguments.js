function returnArguments() {
  return arguments
}

/**
 * Converts `array` to an `arguments` object.
 * @since 5.0.0-beta.6
 * @memberOf cast
 * @alias castArguments
 * @alias toArgs
 *
 * @param {Array} [array] The array to convert.
 * @return {Object} Returns the converted `arguments` object.
 */
module.exports = function toArgs() {
  return returnArguments.apply(undefined, arguments)
}
