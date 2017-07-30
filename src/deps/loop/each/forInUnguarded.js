/**
 * @desc loop for in, no checks on hasOwnProperty, useful for flattening proto
 * @since 5.0.0-beta.6
 * @memberOf loop
 * @curried 2
 *
 * @param  {Array|Object|Iteratable} collection collection to iterate
 * @param {Function} iteratee The function invoked per iteration
 * @return {Object|Array|*} collection
 */
module.exports = function forInUnguarded(collection, iteratee) {
  // eslint-disable-next-line
  for (let prop in collection) iteratee(collection[prop], prop, collection)
  return collection
}
