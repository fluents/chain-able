const isArray = require('./array')

/**
 * @desc value is an Array, with at least 1 value
 * @param  {*} x value
 * @return {boolean} isNotEmptyArray
 *
 * @since 4.0.0-alpha.1
 * @memberOf is
 * @func isNotEmptyArray
 *
 * @extends isArray
 * @variation && array.length !== 0
 * @see is/objWithKeys
 * @see is/array
 *
 * @example
 *  isNotEmptyArray(new Array(3))
 *  //=> true
 *  isNotEmptyArray([1, 2, 3])
 *  //=> true
 *
 *  isNotEmptyArray(new Array())
 *  //=> false
 *  isNotEmptyArray([])
 *  //=> false
 *  isNotEmptyArray(new Map())
 *  //=> false
 */
module.exports = x => isArray(x) && x.length !== 0
