'use strict'

/**
 * @see https://github.com/fluture-js/Fluture#encase
 * @since 4.0.0 <- moved out into a dep
 * @since 1.0.0
 *
 * @param  {Function} call
 * @return {boolean | any} validation/encased function call result
 */
const encase = call => (onValid, onInvalid, rethrow) => (a, b, c) => {
  let result
  try {
    // console.log(arguments)
    result = call(a, b, c)
    return onValid ? onValid(result) : result
  }
  catch (error) {
    if (onInvalid) return onInvalid(error)
    if (rethrow === true) throw error
    else return error
  }
}

/**
 * @since 4.0.0
 * @param  {Function} call
 * @return {Function} -> FunctionObject{onInvalid, onValid, rethrow, call}
 */
module.exports = call => {
  const encased = encase(call)

  // left, right, rethrow
  let onInvalid
  let onValid
  let rethrow

  const config = arg => {
    return encased(onValid, onInvalid, rethrow)(arg)
  }

  config.onInvalid = fn => {
    onInvalid = fn
    return config
  }
  config.onValid = fn => {
    onValid = fn
    return config
  }
  config.rethrow = should => {
    rethrow = should
    return config
  }

  config.then = config.onValid
  config.catch = config.onInvalid

  return config
}

// module.exports = encase
