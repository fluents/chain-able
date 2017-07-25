const isObjNotNull = require('./objNotNull')
const isArray = require('./array')
const isRegExp = require('./regexp')
const isError = require('./error')
const isDate = require('./date')
const isSymbol = require('./symbol')
const isAsyncish = require('./asyncish')
const isPrimitive =  require('./primitive')

/**
 * @desc is able to be iterated on
 * @since 5.0.0-beta.1
 *
 * @param  {*} x node is iteratable
 * @return {boolean} x isIteratable
 *
 * {@link https://github.com/canjs/can-util/blob/master/js/is-iterable/is-iterable.js can-is-iteratable}
 * @see {@link can-is-iteratable}
 *
 * @extends isObj
 * @extends isArray
 * @extends isPrimitive
 * @extends isRegExp
 * @extends isDate
 * @extends isSymbol
 * @extends isAsync
 * @extends isError
 *
 * @example
 *
 *  isIteratable([])                     //=> true
 *  isIteratable({})                     //=> true
 *  isIteratable(new Date())             //=> false
 *  isIteratable(Symbol('eh'))           //=> false
 *  isIteratable(new Promise(r => r()))  //=> false
 *  isIteratable(new Error('eh'))        //=> false
 *
 */
module.exports = function isIteratable(x) {
  // ez ones
  if (isObjNotNull(x) || isArray(x)) return true

  const notIteratable =
    isPrimitive(x) ||
    isRegExp(x) ||
    isDate(x) ||
    isSymbol(x) ||
    isAsyncish(x) ||
    // isNative(x) ||
    isError(x)

  // not-not is iteratable
  return !notIteratable

  // if (notIteratable) return false
  // else return true
  // if (isNullOrUndefined(node)) {
  // }
  // else if (isString(node)) {
  // }
  // else if (isNumber(node)) {
  // }
  // else if (isBoolean(node)) {
  // }
  // else if (isRegExp(node)) {
  // }
  // else if (isDate(node)) {
  // }
  // else if (isSymbol(node) || isAsyncish(node)) {
  // }
  // else if (isNative(node)) {
  // }
  // else {
  //   return true
  // }
  // return false
}

// function isSpecial(x) {
//   // isPromise(x) ||
//   return isSymbol(x) || isError(x) ||
//   //  || isGenerator(x)
// }
