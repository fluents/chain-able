const argumentor = require('../argumentor')
const slice = require('../native/arraySlice')
const isNill = require('../is/nullOrUndefined')
const isFunction = require('../is/function')
const hasIn = require('../is/hasIn')
const curry = require('./curry')

/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 * @since 5.0.0-beta.6
 *
 * @func
 * @memberOf fp
 * @ramda v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 *
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/invoker.js ramda-invoker}
 * @see {@link ramda-invoker}
 * @see fp/construct
 *
 * @symb invoker(0, 'method')(o) = o['method']()
 * @symb invoker(1, 'method')(a, o) = o['method'](a)
 * @symb invoker(2, 'method')(a, b, o) = o['method'](a, b)
 *
 * @example
 *
 *      const sliceFrom = invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *
 *      const sliceFrom6 = invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 *
 */
module.exports = curry(2, function invoker(arity, method) {
  return curry(arity + 1, function() {
    const args = argumentor.apply(null, arguments)
    const target = args[arity]

    // !isNill(target) && isFunction(target[method])
    // if (hasIn(target, method)) {
    if (hasIn(target, method) && isFunction(target[method])) {
      return target[method]
        .apply(
          target
            .apply(target, args
              .slice(0, arity))
        )
    }
    else {
      return undefined
    }
    // throw new TypeError(toString(target) + ' does not have a method named "' + method + '"')
  })
})
