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
 *  @category Lang
 *
 * {@link https://github.com/lodash/lodash/blob/master/isRegExp.js lodash-is-regexp}
 * {@link https://github.com/js-data/js-data/blob/v2/src/utils.js#L52 js-data-is-regexp}
 * @see {@link lodash-is-regexp}
 * @see {@link js-data-is-regexp}
 *
 * @example
 *
 * isRegExp(/abc/)
 * //=> true
 *
 * isRegExp('/abc/')
 * //=> false
 *
 */
module.exports = x => toS(x) === '[object RegExp]'
// obj instanceof RegExp ||
