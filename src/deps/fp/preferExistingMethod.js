const isArray = require('../is/array')
const isFunction = require('../is/function')
const argumentor = require('../argumentor')

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the internal
 * implementation.
 *
 * @memberOf fp
 * @since 5.0.0-beta.5
 *
 * @name preferExistingMethod
 * @alias useMethodIfExists
 * @alias _checkForMethod
 *
 * @param {Function} fn internal implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_checkForMethod.js ramda-check-for-method}
 * @see {@link ramda-check-for-method}
 *
 * @TODO arity
 *
 * @example
 *
 *    const fallback = (list, index) => Array.prototype.slice.call(list, index)
 *    const slice = useMethodIfExists('slice', fallback)
 *
 *    const list = ['zero', 'one']
 *    const sliced = (list, 0)
 *    /// uses list.slice(0)
 *    //=> 0
 *
 */
module.exports = function preferExistingMethod(methodname, fn) {
  return function() {
    const length = arguments.length
    if (length === 0) {
      return fn()
    }
    else {
      const obj = arguments[length - 1]
      return (isArray(obj) || !isFunction(obj[methodname]))
        ? fn.apply(this, arguments)
        : obj[methodname]
          .apply(
            obj,
            argumentor.apply(null, arguments).slice(length - 1)
          )
    }
  }
}
