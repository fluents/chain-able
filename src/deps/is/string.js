const toS = require('./toS')
const isStringPrimitive = require('./stringPrimitive')

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @name isString
 * @since 3.0.0
 * @category Lang
 *
 * @memberOf is
 * @extends isStringPrimitive
 * @variation also allows String objects
 *
 * @param {*} x The value to check.
 * @return {boolean} Returns `true` if `value` is a string, else `false`.
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1318 underscore-isstring}
 * {@link https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L42 inferno-isstring}
 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_isString.js ramda-is-string}
 * {@link https://github.com/js-data/js-data/blob/v2/src/utils.js#L57 js-data-is-string}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String mozilla-string}
 * {@link https://github.com/lodash/lodash/blob/master/isString.js lodash-isString}
 * @see {@link lodash-isString}
 * @see {@link mozilla-string}
 * @see {@link js-data-is-string}
 * @see {@link ramda-is-string}
 * @see {@link inferno-isstring}
 * @see {@link underscore-isstring}
 * @see isStringPrimitive
 *
 * @example
 *
 *   isString('abc')
 *   //=> true
 *
 *   isString(new String('abc'))
 *   //=> true
 *
 *   isString(1)
 *   //=> false
 *
 */
module.exports = x => isStringPrimitive(x) || toS(x) === '[object String]'
