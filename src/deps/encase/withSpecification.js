const curry = require('../fp/curry')

/**
 * @desc a special encased wrapper with no try catch but same api
 * @name withSpecification
 * @func
 * @memberOf encase
 * @since 4.0.0
 *
 * @param  {Function} specification match
 * @param  {Function} call cb to determine valid or invalid
 * @param  {Function} onInvalid cb when invalid
 * @param  {Function} onInvalid cb when valid
 * @return {Function} a lot of functions...
 *
 * @see fp/curry
 *
 * @example
 *  const onInvalid = console.error
 *  const onValid = console.debug
 *  const onCall = console.log
 *  const encased = withSpecification(x => true)(onCall)(onValid, onInvalid)
 *
 *  encased(1, 2, 3) //=> onCall (did not throw)
 */
module.exports = curry(4, (specification, call, onInvalid, onValid) => (a, b, c) => {
  const result = call(a, b, c)
  if (specification(result)) return onInvalid(result)
  else return onValid(result)
})
