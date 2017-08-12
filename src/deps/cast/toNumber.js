// const isBoolean = require('../is/boolean')
// const isObj = require('../is/objNotNull')
// const isArray = require('../is/array')
// const isNumberish = require('../is/numberish')
// const SymbolPrimitive = require('../symbols/primitive')
// const hasOwnProperty = require('../util/hasOwnProperty')

/**
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name toNumber
 * @alias toNum
 * @aka ToNumber
 *
 * @param {*} x number to cast to primitive number
 * @return {number} +x
 *
 * {@link http://2ality.com/2012/04/number-encoding.html number-encoding-js}
 * {@link http://speakingjs.com/es5/ch11.html speaking-js-numbers}
 * {@link  https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls coderwal-to-number}
 * {@link http://ecma-international.org/ecma-262/7.0/#sec-tonumber emca-to-number}
 * @see {@link emca-to-number}
 * @see {@link coderwal-to-number}
 * @see {@link speaking-js-numbers}
 * @see {@link number-encoding-js}
 *
 * @TODO make this `toNumberPrimitive` while others could convert as codes
 *
 *
 * @example
 *
 *  toNumber('')
 *  //=> 0
 *  toNumber('   ')
 *  //=> 0
 *  toNumber('eh')
 *  //=> NaN
 *  toNumber('1')
 *  //=> 1
 *  toNumber(null)
 *  //=> 0
 *  toNumber(true)
 *  //=> 1
 *  toNumber(false)
 *  //=> 0
 *  toNumber('00')
 *  //=> 0
 *  toNumber(undefined)
 *  //=> NaN
 *  toNumber({})
 *  //=> NaN
 *  toNumber([])
 *  //=> 0
 *  toNumber([100, 200])
 *  //=> NaN
 *
 * @example
 *
 *  var eh = {Symbol.toPrimitive: hint => hint === 'number' ? 100 : 'eh'}
 *  toNumber(eh)
 *  //=> 100
 *
 */
function toNumber(x) {
  // @NOTE
  // if (isNumberish(x) || isBoolean(x)) {
  //   return +x
  // }
  // else if (isObj(x)) {
  //   if (hasOwnProperty(x, SymbolPrimitive)) return x[SymbolPrimitive]('number')
  //   else if (isArray(x)) return +x
  //   // this keeps it consistent with array?
  //   else return 0
  // }

  return +x

  // @TODO
  // +x || 0
  //
  // , coerceNaN = true
  // const number = +x
  // return isNotEhNumber(x) ? 0 : x
}

module.exports = toNumber
