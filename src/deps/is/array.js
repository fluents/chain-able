/**
 * @name isArray
 * @memberOf is
 * @since 3.0.0
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1308 underscore-is-array}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray mozilla-isarray}
 * {@link https://github.com/facebook/immutable-js/blob/master/src/utils/isArrayLike.js immutables-is-array-like}
 * @todo is-arraylike https://github.com/facebook/immutable-js/blob/master/src/utils/isArrayLike.js
 *
 * @param {Array | *} arg
 * @return {boolean} isArray(arg)
 *
 * @func
 * @type {Function}
 *
 * @see {@link underscore-is-array}
 * @see {@link mozilla-isarray}
 * @see {@link immutables-is-array-like}
 *
 */
module.exports = Array.isArray

// function isArray(xs) {
//   return Object.prototype.toString.call(xs) === '[object Array]'
// }
