const toS = require('./toS')

/**
 * @param  {*} x value
 * @return {boolean} isNumber
 *
 * @since 3.0.0
 * @memberOf is
 * @func isNumber
 * @see is/real
 *
 * @example
 *
 *  isNumber(1)
 *  //=> true
 *  isNumber(Number(1))
 *  //=> true
 *  isNumber(NaN)
 *  //=> true
 *
 *  isNumber(null)
 *  //=> false
 *  isNumber(undefined)
 *  //=> false
 *  isNumber(void 0)
 *  //=> false
 *  isNumber({})
 *  //=> false
 *  isNumber('')
 *  //=> false
 *  isNumber(false)
 *  //=> false
 *
 * @NOTE was not needed except for abstract ==
 *   const isObj = require('./obj')
 *   const isSymbol = require('./symbol')
 *   (isObj(x) || isSymbol(x)
 *     ? false
 *     : (/^0x[0-9a-f]+$/i).test(x) ||
 *         (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(x))
 */
module.exports = x => typeof x === 'number' || toS(x) === '[object Number]'
