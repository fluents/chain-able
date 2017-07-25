const isArray = require('./array')
const isObjNotNull = require('./objNotNull')
const isFunction = require('./function')

/**
 * @name isObjPure
 * @memberOf is
 *
 * @alias isObjNotArrayOrFunction
 * @alias isObjectNotArrayOrFunction
 * @alias isObjectPure
 * @alias isPureObject
 *
 * @since 3.0.0
 *
 * @param  {*} x value to check
 * @return {boolean} is obj & !null & !undefined & !array & !function
 *
 * @extends isArray
 * @extends isObjNotNull
 * @extends isNullOrUndefined
 * @extends isFunction
 *
 * @example
 *
 *    isObjPure(function() {})
 *    //=> false
 *    isObjPure(null)
 *    //=> false
 *    isObjPure([])
 *    //=> false
 *
 *    isObjPure({})
 *    //=> true
 *
 */
module.exports = x => isObjNotNull(x) && !isArray(x) && !isFunction(x)
