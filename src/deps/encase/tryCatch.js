const curry = require('../fp/curry')

/**
 * @TODO could curry
 *
 * @memberOf encase
 * @see https://github.com/fluture-js/Fluture#encase
 * @since 4.0.0 <- moved out into a dep
 * @since 1.0.0
 *
 * @param  {Function} call
 * @return {boolean | any} validation/encased function call result
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
