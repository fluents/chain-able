const isObjLoose = require('./objLoose')
const isNullOrUndef = require('./nullOrUndefined')

/**
 * @param  {*} x value
 * @return {boolean} isObjStrict
 *
 * @since 3.0.0
 * @memberOf is
 * @func isObjStrict
 * @see is/obj
 * @see is/objWithKeys
 * @see is/objLoose
 * @see is/null
 * @see https://github.com/sindresorhus/is-obj/blob/master/index.js
 * @TODO !Array.isArray
 *
 * @extends isObjLoose
 * @variation null will not count as an object
 *
 * @example
 *
 *  isObjStrict(new Object())
 *  //=> true
 *  isObjStrict({})
 *  //=> true
 *  isObjStrict(Object.create(null))
 *  //=> true
 *  isObjStrict(null)
 *  //=> false
 *
 *  isObjStrict(new Set())
 *  //=> false
 *  isObjStrict(function() {})
 *  //=> false
 *  isObjStrict('')
 *  //=> false
 *  isObjStrict(1)
 *  //=> false
 *
 */
module.exports = x => !isNullOrUndef(x) && isObjLoose(x)
