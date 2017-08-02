const curry = require('../fp/curry')

/**
 * @name tryCatch
 * @curried 3
 * @memberOf encase
 *
 * @version 4.0.0 <- moved out into a dep
 * @since 1.0.0
 *
 * @param {Function} call function that may throw
 * @param {Function} [onValid] call when valid
 * @param {Function} [onInvalid] call when invalid
 * @return {boolean | any} validation/encased function call result
 *
 * @TODO `call.apply(null, arguments)` > a, b, c
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch mozilla-trycatch}
 * {@link https://github.com/fluture-js/Fluture#encase fluture-encase}
 * @see {@link fluture-encase}
 * @see {@link mozilla-trycatch}
 */
module.exports = curry(3, (call, onValid, onInvalid) => (a, b, c) => {
  let result
  try {
    result = call(a, b, c)
    return onValid ? onValid(result) : result
  }
  catch (error) {
    // error.caught = true
    // @NOTE: defaults to rethrow... if (isTrue(rethrow)) throw error
    if (onInvalid) return onInvalid(error)
    else return error
  }
})
