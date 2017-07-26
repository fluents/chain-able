/** Used to compose unicode character classes. */
const rsAstralRange = '\\ud800-\\udfff'
const rsComboMarksRange = '\\u0300-\\u036f'
const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
const rsComboSymbolsRange = '\\u20d0-\\u20ff'
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange
const rsVarRange = '\\ufe0e\\ufe0f'

/** Used to compose unicode capture groups. */
const rsZWJ = '\\u200d'

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
const reHasUnicode = RegExp(`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`)

/**
 * Checks if `string` contains Unicode symbols.
 * @memberOf string
 * @since 5.0.0-beta.5
 *
 * {@link https://github.com/lodash/lodash/blob/master/.internal/hasUnicode.js lodash-has-unicode}
 * @see {@link lodash-has-unicode}
 *
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 *
 * @example
 *
 *    var λ = '\u03BB'
 *    hasUnicode(λ)
 *    //=> true
 *
 * @example
 *
 *    hasUnicode('nope')
 *    //=> false
 *
 */
function hasUnicode(string) {
  return reHasUnicode.test(string)
}

module.exports = hasUnicode
