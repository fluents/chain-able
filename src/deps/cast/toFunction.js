const keys = require('../util/keys')
const isObj = require('../is/obj')
const isFunction = require('../is/function')
const isClass = require('../is/class')
const construct = require('../fp/construct')
const always = require('../fp/always')

/**
 * @name toFunction
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param  {Class|Object|*} x class or object to wrap
 * @param  {Function|*} [onCall=null] not implemented, would be onConstruct/call
 * @return {Function}
 *
 * @see fp/construct
 * @see is/class
 *
 * @example
 *
 *    class Eh {}
 *    const eh = toFunction(Eh)
 *
 *    isInstanceOf(eh(), Eh)
 *    //=> true
 *
 */
function toFunction(x, onCall = null) {
  if (isClass(x)) {
    return construct(x)
  }
  else if (isFunction(x)) {
    return construct(x.length, (x))
  }
  else if (isObj(x)) {
    // could bind
    const first = keys(x).filter(key => isFunction(x[key]))[0]
    if (isFunction(first)) return first
    else return always(x)
  }
  // else if (isObj(x)) return construct(x)
  else {
    return always(x)
  }
}
module.exports = toFunction
