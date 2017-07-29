const isUndefined = require('./undefined')
const isString = require('./string')

/**
 * @desc Checks if `value` is `undefined`
 *       OR `"undefined"`
 *       OR `'"undefined"'` (which happens say when you save localStorage or cookie for undefined)
 *
 * @since 5.0.0-beta.4
 * @memberOf is
 *
 * @param  {*} x value
 * @return {boolean} x isUndefinedLike
 *
 * @func
 * @extends isUndefined
 * @name isUndefinedLike
 * @category Lang
 *
 * @see is/nullOrUndefined
 *
 * @example
 *
 *  isUndefined(void 0)        //=> true
 *  isUndefined(undefined)     //=> true
 *  isUndefined('undefined')   //=> true
 *  isUndefined('"undefined"') //=> true
 *  isUndefined(NaN)           //=> false
 *  isUndefined({})            //=> false
 *
 */
module.exports = x =>
  isUndefined(x) ||
  x === 'undefined' ||
  (isString(x) && (/undefined/).test(x))
