/**
 * @since 4.0.0
 *
 * @param  {Array} array array to reduce to object
 * @param  {Function} iterator function to call on reduced, with `next`
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
module.exports = function reduceObj(array, iterator) {
  return array.reduce(function(reduced, next) {
    iterator(reduced, next)
    return reduced
  }, {})
}
