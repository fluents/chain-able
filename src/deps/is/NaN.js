const isNumber = require('./number')

/**
 * Checks if `value` is `NaN`
 * @category Lang
 * @memberOf is
 * @since 5.0.0-beta.5
 *
 * @param  {*} x The value to check.
 * @return {boolean} x isNaN
 *
 * @name isNaN
 * @alias isNotNumber
 * @alias isNotEhNumber
 *
 * {@link https://tc39.github.io/ecma262/#sec-isnan-number emca-isnan}
 * {@link https://github.com/lodash/lodash/tree/npm-packages/lodash.isnan lodash-isnan}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN mozilla-isnan}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1347 underscore-is-nan}
 * @see {@link emca-isnan}
 * @see {@link mozilla-isnan}
 * @see {@link underscore-is-nan}
 * @see {@link lodash-isnan}
 * @see is/number
 * @see is/real
 *
 * @example
 *
 *  isNaN(Number(null)) //=> true
 *  isNaN(NaN) //=> true
 *
 *  isNaN(0) //=> false
 *  isNaN(Number(100)) //=> false
 *
 */
module.exports = function isNaN(x) {
  return isNumber(x) && Number.isNaN(x)
}
