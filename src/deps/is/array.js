/**
 * @name isArray
 * @memberOf is
 * @since 3.0.0
 *
 * {@link https://tc39.github.io/ecma262/#sec-isarray emca-isarray}
 * {@link https://github.com/gcanti/tcomb/blob/master/lib/isArray.js tcomb-isarray}
 * {@link https://nodejs.org/api/util.html#util_util_isarray_object node-util-isarray}
 * {@link https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L16 inferno-is-array}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1308 underscore-is-array}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray mozilla-isarray}
 * {@link https://github.com/facebook/immutable-js/blob/master/src/utils/isArrayLike.js immutables-is-array-like}
 *
 * @param {Array | *} arg
 * @return {boolean} isArray(arg)
 *
 * @func
 * @type {Function}
 *
 * @see is/arrayLike
 * @see {@link emca-isarray}
 * @see {@link mozilla-isarray}
 * @see {@link underscore-is-array}
 * @see {@link tcomb-isarray}
 * @see {@link immutables-is-array-like}
 * @see {@link inferno-is-array}
 * @see {@link node-util-isarray}
 *
 */
module.exports = Array.isArray

// function isArray(xs) {
//   return Object.prototype.toString.call(xs) === '[object Array]'
// }
