/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @memberOf is
 * @since 3.0.0
 *
 * @param {*} obj The value to `Object.prototype.toString.call(obj)`.
 * @return {string} Returns the `toStringTag`.
 *
 * @links
 * {@link https://github.com/jonschlinkert/kind-of kind-of}
 *
 * @see {@link kind-of}
 * @see https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js
 * @see https://github.com/substack/js-traverse/blob/master/index.js#L285
 *
 * @TODO obj[Symbol.toStringTag]
 *
 * @example
 *
 *    toS({})
 *    //=> '[Object object]'
 *
 *    toS(function() {})
 *    //=> '[Object function]'
 *
 */
function toS(obj) {
  return Object.prototype.toString.call(obj)
}

/**
 * is value a Date?
 *
 * @param  {*} x value
 * @return {boolean} isDate
 *
 * @since 3.0.0
 * @memberOf is
 * @func isDate
 * @see toS
 *
 * @example
 *
 *  isDate(new Date())
 *  //=> true
 *  isDate(Date.now())
 *  //=> false
 *  isDate(1)
 *  //=> false
 *  isDate('')
 *  //=> false
 *
 * @example
 *
 *  const e = {}
 *  eh[Symbol.toStringTag] = '[Object Date]'
 *  isDate(eh)
 *  //=> true
 *
 * @example
 *
 *  class Eh extends Date()
 *  isDate(new Eh())
 *  //=> true
 *
 */
function isDate(x) {
  return x instanceof Date || toS(x) === '[object Date]'
}
