/**
 * @param  {*} x value
 * @return {boolean} isObjLoose
 *
 * @since 3.0.0
 * @memberOf is
 * @func isObjLoose
 * @see is/obj
 * @see is/objWithKeys
 * @see is/objStrict
 * @see is/null
 *
 * @example
 *
 *  isObjLoose(new Object())
 *  //=> true
 *  isObjLoose({})
 *  //=> true
 *  isObjLoose(Object.create(null))
 *  //=> true
 *  isObjLoose(null)
 *  //=> true
 *
 *  isObjLoose(new Set())
 *  //=> false
 *  isObjLoose(function() {})
 *  //=> false
 *  isObjLoose('')
 *  //=> false
 *  isObjLoose(1)
 *  //=> false
 *
 */
module.exports = x => typeof x === 'object'
