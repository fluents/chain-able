const toS = require('./toS')

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @since 0.1.0
 * @memberOf is
 *
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a regexp, else `false`.
 *
 * @category Lang
 *
 * {@link https://tc39.github.io/ecma262/#sec-isregexp emca-isregexp}
 * {@link https://nodejs.org/api/util.html#util_util_isregexp_object node-util-isregexp}
 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_isRegExp.js ramda-isregexp}
 * {@link https://github.com/lodash/lodash/blob/master/isRegExp.js lodash-is-regexp}
 * {@link https://github.com/js-data/js-data/blob/v2/src/utils.js#L52 js-data-is-regexp}
 * @see {@link emca-isregexp}
 * @see {@link lodash-is-regexp}
 * @see {@link js-data-is-regexp}
 * @see {@link ramda-isregexp}
 * @see {@link node-util-isregexp}
 *
 * @example
 *
 *   isRegExp(/abc/)             //=> true
 *   isRegExp(new RegExp('abc')) //=> true
 *   isRegExp('/abc/')           //=> false
 *
 */
module.exports = x => toS(x) === '[object RegExp]'
// obj instanceof RegExp ||
