const matchInteger = require('../regexp/matchInteger')
const matchHex = require('../regexp/matchHex')
const isNumber = require('./number')
const isSymbol = require('./symbol')

/**
 * @name isNumberish
 * @alias isNumberLike
 * @since 5.0.0-beta.6
 * @version 5.0.1 <- added isSymbol check to avoid testing symbol
 * @memberOf is
 *
 * @NOTE this was old test, is used in funwithflags, and other cli environments
 * @NOTE this is helpful when casting strings to numbers
 *
 * @param {number | string | *} x numberish to check
 * @return {boolean} x isNumberish
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers mozilla-integers-hex}
 * @see {@link mozilla-integers-hex}
 * @see is/number
 * @see cast/number
 *
 * @example
 *
 *    isNumberish('10')      //=> true
 *    isNumberish(10)        //=> true
 *    isNumberish('10.01')   //=> true
 *
 */
module.exports = function isNumberish(x) {
  if (isSymbol(x)) return false
  else if (isNumber(x)) return true
  else if (matchHex.test(x)) return true
  else return matchInteger.test(x)
}
