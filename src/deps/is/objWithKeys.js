const ObjectKeys = require('../util/keys')
const isObj = require('./obj')

/**
 * @TODO @NOTE need to be more careful, needs to check for vanilla objects, not native ones since e.g. Error has no keys
 *
 * @param  {*} x value
 * @return {boolean} isObjWithKeys
 *
 * @since 3.0.0
 * @memberOf is
 * @func isObjWithKeys
 * @see is/obj
 * @see is/objWithKeys
 * @see is/objStrict
 * @see is/null
 *
 * @extends isObj
 * @variation Object.keys(obj).length !== 0
 *
 * @example
 *
 *  isObjWithKeys({eh: true})
 *  //=> true
 *  isObjWithKeys({})
 *  //=> false
 *  isObjWithKeys(new Object())
 *  //=> false
 *  isObjWithKeys(Object.create(null))
 *  //=> false
 *  isObjWithKeys(null)
 *  //=> false
 *  isObjWithKeys(new Set())
 *  //=> false
 *  isObjWithKeys(function() {})
 *  //=> false
 *  isObjWithKeys('')
 *  //=> false
 *  isObjWithKeys(1)
 *  //=> false
 *
 */
module.exports = val => isObj(val) && ObjectKeys(val).length !== 0
