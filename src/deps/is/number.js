const toS = require('./toS')
const isNumberPrimitive = require('./numberPrimitive')

/**
 * @param  {*} x value
 * @return {boolean} isNumber
 *
 * @since 3.0.0
 * @memberOf is
 * @func isNumber
 * @see is/real
 * @extends numberPrimitive
 * @variation also returns true for new Number object
 *
 * @see http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
 * @alternate !isNaN(parseFloat(n)) && isFinite(n)
 *
 * @example
 *
 *  isNumber(1)
 *  //=> true
 *  isNumber(new Number(1))
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
 */
module.exports = x => isNumberPrimitive(x) || toS(x) === '[object Number]'
