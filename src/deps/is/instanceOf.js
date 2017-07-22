const curry = require('../fp/curry')

/**
 * @see https://github.com/lodash/lodash/issues/620
 * @see https://github.com/ramda/ramda/commit/9d4cb895595aca3d83ce0a4b10416ae7302bd8ac
 *
 * @since 5.0.0-beta.4
 * @param  {Object} instanceToCheckAgainst check the second arg against this
 * @param  {Object} isThisInstanceOfThat check this against first arg
 * @return {boolean} arg2 instanceof arg1
 *
 * @example
 *
 *  const isObjInstance = instanceOf(Object)
 *  isObjInstance({})
 *  //=> true
 *
 *  const isArrInstance = instanceOf(Array)
 *  isArrInstance({})
 *  //=> false
 *
 *  isArrInstance(new Array)
 *  //=> true
 *
 */
function instanceOf(instanceToCheckAgainst, isThisInstanceOfThat) {
  return isThisInstanceOfThat instanceof instanceToCheckAgainst
  // || arg1.constructor === arg2
}

module.exports = curry(2, instanceOf)
