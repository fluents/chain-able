/**
 * @desc Used to compose unicode character classes.
 * @type {string}
 */
const rsAstralRange = '\\ud800-\\udfff'
const rsComboMarksRange = '\\u0300-\\u036f'
const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
const rsComboSymbolsRange = '\\u20d0-\\u20ff'
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange
const rsVarRange = '\\ufe0e\\ufe0f'

/**
 * @desc Used to compose unicode capture groups.
 * @type {string}
 */
const rsZWJ = '\\u200d'

/**
 * @desc Used to detect strings
 *       with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/).
 *
 * @name matchUnicode
 * @type {RegExp}
 */
module.exports = RegExp(`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`)
