const toKey = require('../../cast/toKey')
const isNil = require('../../is/nullOrUndefined')
const isObj = require('../../is/obj')

// @TODO ~ also see reduceMap it has keyValReducer, can do `isPairs`
const defaultReduceArrayToObjIterator = (reduced, next, index) => {
  if (isObj(next)) Object.assign(reduced, next)
  else reduced[toKey(index)] = next

  return reduced
}

/**
 * @since 4.0.0
 * @version 5.0.0 <- added index
 *
 * @param {Array} array array to reduce to object
 * @param {Function} iterator function to call on reduced, with `next`
 * @return {Object} reduced array
 *
 *
 * @name reduceObj
 * @alias reduceObject
 * @alias toObj
 *
 * @see Chainable
 *
 * @TODO example
 * @TODO @curried 2
 */
module.exports = function reduceArrayToObj(array, iterator) {
  if (isNil(iterator)) iterator = defaultReduceArrayToObjIterator

  let index = 0
  return array.reduce(function(reduced, next) {
    iterator(reduced, next, index)
    return reduced
  }, {})
}
