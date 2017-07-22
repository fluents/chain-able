/**
 * @name isArray
 * @func
 * @memberOf is
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray mozilla-isarray}
 * {@link https://github.com/facebook/immutable-js/blob/master/src/utils/isArrayLike.js immutables-is-array-like}
 * @todo is-arraylike https://github.com/facebook/immutable-js/blob/master/src/utils/isArrayLike.js
 *
 * @param {*} arg
 * @return {boolean} isArray(arg)
 *
 * @see {@link mozilla-isarray}
 * @type {Function}
 * @since 3.0.0
 */
module.exports = Array.isArray

// function isArray(xs) {
//   return Object.prototype.toString.call(xs) === '[object Array]'
// }
