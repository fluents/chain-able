const isUndefined = require('./undefined')

/**
 * @desc Checks if `value` is `undefined` OR `"undefined"`
 * @since 5.0.0-beta.4
 * @memberOf is
 * @category Lang
 *
 * @param  {*} x value
 * @return {boolean} x isUndefinedLike
 *
 * @extends isUndefined
 * @func isUndefinedLike
 *
 * @see is/nullOrUndefined
 *
 * @example
 *
 *  isUndefined(void 0)      //=> true
 *  isUndefined(undefined)   //=> true
 *  isUndefined('undefined') //=> true
 *  isUndefined(NaN)         //=> false
 *  isUndefined({})          //=> false
 *
 */
module.exports = x => isUndefined(x) || x === 'undefined'
