const isArrayLike = require('../is/arrayLike')
const isNill = require('../is/nullOrUndefined')
const baseForOwn = require('./baseForOwn')

/**
 * The base implementation of `forEach`.
 * @since 5.0.0-beta.6
 * @memberOf loop
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Array|Object} Returns `collection`.
 */
function baseEach(collection, iteratee) {
  if (isNill(collection)) {
    return collection
  }
  else if (!isArrayLike(collection)) {
    return baseForOwn(collection, iteratee)
  }

  // @TODO toObj, length
  const length = collection.length
  const iterable = Object(collection)
  let index = -1

  while (++index < length) {
    // stop when they return false
    if (iteratee(iterable[index], index, iterable) === false) {
      break
    }
  }

  return collection
}

module.exports = baseEach
