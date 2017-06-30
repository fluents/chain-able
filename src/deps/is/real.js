const isNullOrUndefined = require('./nullOrUndefined')

/**
 * @param  {*} x value
 * @return {boolean} isReal
 *
 * @since 3.0.0
 * @memberOf is
 * @func isReal
 * @see is/null
 * @see is/undefined
 *
 * @see http://2ality.com/2013/04/quirk-implicit-conversion.html
 * @see https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 *
 * @NOTE eslint-disable-next-line no-self-compare
 *       && x !== x
 *
 * @extends isNullOrUndefined
 * @variation *not* isNullOrUndefined && false for NaN
 *
 * @example
 *
 *  isReal(null)
 *  //=> false
 *  isReal(void 0)
 *  //=> false
 *  const nan = Number(undefined)
 *  isReal(nan)
 *  //=> false
 *
 *  isReal({eh: true})
 *  //=> true
 *  isReal({})
 *  //=> true
 *  isReal(Object)
 *  //=> true
 *  isReal([])
 *  //=> true
 *  isReal(new Set())
 *  //=> true
 *  isReal(function() {})
 *  //=> true
 *  isReal('')
 *  //=> true
 *  isReal(1)
 *  //=> true
 *
 */
module.exports = x => !isNullOrUndefined(x) && !Number.isNaN(x)
