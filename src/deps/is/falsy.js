const isReal = require('./real')
const isFalse = require('./false')

/**
 * @desc is falsy value
 * @since 5.0.0-beta.5
 * @memberOf is
 *
 * @param  {null | undefined | false | 0 | '' | *} x value to check
 * @return {boolean} x is Falsy
 *
 * @name isFalsy
 *
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy mozilla-falsy}
 * @see {@link mozilla-falsy}
 * @see is/real
 *
 * @example
 *
 *    isFalsy(null)           //=> true
 *    isFalsy(undefined)      //=> true
 *    isFalsy(0)              //=> true
 *    isFalsy(NaN)            //=> true
 *    isFalsy('')             //=> true
 *    isFalsy(1)              //=> false
 *    isFalsy({})             //=> false
 *    isFalsy([])             //=> false
 *
 */
module.exports = function isFalsy(x) {
  return !isReal(x) || isFalse(x) || x === 0 || x === ''
}
