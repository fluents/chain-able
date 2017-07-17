const isArray = require('./array')
const isObjTypeof = require('./objTypeof')
const isNullOrUndef = require('./nullOrUndefined')
const isFunction = require('./function')

/**
 * @name isObjPure
 * @memberOf is
 * @alias isObjNotArrayOrFunction
 * @since 3.0.0
 *
 *
 * @param  {*} x value to check
 * @return {boolean} is obj & !null & !undefined & !array & !function
 *
 * @extends isArray
 * @extends isObjTypeof
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
module.exports = x =>
  !isNullOrUndef(x) && !isArray(x) && !isFunction(x) && isObjTypeof(x)
