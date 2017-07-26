const tryCatch = require('./tryCatch')

/**
 * @desc wrap in tryCatch, or a tryCatch-like api
 * @version 5.0.0 wrapped tryCatch & withSpecification in curry
 * @version 4.0.1 added custom encaser
 * @since   4.0.0
 * @member encase
 * @alias attempt
 * @symb 🛡
 *
 * @param   {Function} call function to _encase_
 * @param   {Function | undefined} [encaser=tryCatch] function to encase _with_
 * @return  {Function} -> FunctionObject{onInvalid, onValid, rethrow, call}
 *
 * {@link https://github.com/fluture-js/Fluture#encase fluture-encase}
 * {@link https://github.com/lodash/lodash/blob/master/attempt.js lodash-attempt}
 * @see {@link lodash-attempt}
 * @see {@link fluture-encase}
 *
 * @example
 *
 *  const throws = x => {
 *    if (x === false) {
 *       throw new Error('invalid - cannot be false')
 *    }
 *    return true
 *  }
 *  const api = encase(throws)
 *
 *
 *  api.onValid(console.log)
 *  api.onInvalid(console.error)
 *
 *  //--- invalid
 *  api.call(false)
 *  //=> 'invalid - cannot be false'
 *
 *  //--- valid
 *  api.call(true)
 *  //=> 'true'
 *
 */
module.exports = (call, encaser) => {
  const encased = encaser ? encaser(call) : tryCatch(call)

  // @TODO rethink this scoped approach
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
