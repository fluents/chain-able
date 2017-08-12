const matchUnicode = require('../regexp/matchUnicode')

/**
 * Checks if `string` contains Unicode symbols.
 * @memberOf string
 * @since 5.0.0-beta.5
 *
 * {@link https://github.com/lodash/lodash/blob/master/.internal/hasUnicode.js lodash-has-unicode}
 * @see {@link lodash-has-unicode}
 *
 * @param {string} string The string to inspect.
 * @return {boolean} Returns `true` if a symbol is found, else `false`.
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
  return matchUnicode.test(string)
}

module.exports = hasUnicode
