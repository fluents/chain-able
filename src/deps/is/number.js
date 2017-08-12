const toS = require('./toS')
const isNumberPrimitive = require('./numberPrimitive')

/**
 * @since 3.0.0
 * @memberOf is
 *
 * @param {*} x value
 * @return {boolean} isNumber
 *
 * @func
 * @name isNumber
 * @extends numberPrimitive
 * @variation also returns true for new Number object
 *
 * {@link https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23 inferno-isnumber}
 * {@link http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric stack-overflow-isnumber}
 * {@link https://github.com/gcanti/tcomb/blob/master/lib/isNumber.js tcomb-isnumber}
 * @see {@link stack-overflow-isnumber}
 * @see {@link tcomb-isnumber}
 * @see {@link inferno-isnumber}
 * @see is/real
 *
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
