'use strict'

const tryCatch = require('./tryCatch')

/**
 * @since 4.0.0
 * @param  {Function} call
 * @param  {Function | undefined} [encaser=tryCatch]
 * @return {Function} -> FunctionObject{onInvalid, onValid, rethrow, call}
 */
module.exports = (call, encaser) => {
  const encased = encaser ? encaser(call) : tryCatch(call)

  // left, right, rethrow
  let onInvalid
  let onValid

  const config = (a, b, c) => encased(onValid, onInvalid)(a, b, c)

  config.then = config.onInvalid = fn => {
    onInvalid = fn
    return config
  }
  config.catch = config.onValid = fn => {
    onValid = fn
    return config
  }

  return config
}
