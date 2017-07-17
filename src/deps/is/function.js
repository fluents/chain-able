/**
 * Checks if `value` is classified as a `Function` object.
 * @category Lang
 *
 * @param  {*} x The value to check.
 * @return {boolean} x isFunction
 *
 * @since 3.0.0
 * @memberOf is
 * @func isFunction
 *
 * @NOTE || x instanceof Function
 *
 * @polyfill safari=9
 *   The use of `Object#toString` avoids issues with the `typeof` operator
 *   in Safari 9 which returns 'object' for typed arrays and other constructors.
 *   there is no polyfill for this
 *   https://github.com/krambuhl/custom-event-polyfill/issues/2
 *   browser usage is < 0.3%, very edge case
 *
 * @example
 *
 *  isFunction(function() {})
 *  //=> true
 *  isFunction(() => {})
 *  //=> true
 *  isFunction(new Function())
 *  //=> true
 *
 *  isFunction(1)
 *  //=> false
 *  isFunction('')
 *  //=> false
 *  isFunction(/abc/)
 *  // => false
 */
module.exports = function isFunction(x) {
  return typeof x === 'function'
}
