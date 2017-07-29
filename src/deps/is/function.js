/**
 * Checks if `value` is classified as a `Function` object.
 * @memberOf is
 * @since 3.0.0
 *
 * @param  {*} x The value to check.
 * @return {boolean} x isFunction
 *
 * @category Lang
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
 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_isFunction.js ramda-is-function}
 * {@link https://github.com/lodash/lodash/blob/master/functions.js#L22 lodash-is-function}
 * {@link https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L38 inferno-is-function}
 * {@link https://github.com/js-data/js-data/blob/v2/src/utils.js#L77 js-data-is-function}
 * {@link http://underscorejs.org/docs/underscore.html#section-141 underscore-is-function}
 * @see {@link underscore-is-function}
 * @see {@link js-data-is-function}
 * @see {@link inferno-is-function}
 * @see {@link lodash-is-function}
 * @see {@link ramda-is-function}
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
 *  //=> false
 *
 */
module.exports = function isFunction(x) {
  return typeof x === 'function'
}
