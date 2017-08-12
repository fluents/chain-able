/**
 * @desc loop for in, no checks on hasOwnProperty, useful for flattening proto
 * @since 5.0.0-beta.6
 * @param  {Array|Object|Iteratable} collection collection to iterate
 * @param {Function} iteratee The function invoked per iteration
 * @return {Object|Array|*} initial with results of iteratee returns
 */
module.exports = function forInUnguarded(collection, iteratee, initial = {}) {
  // eslint-disable-next-line
  for (let prop in collection) {
    initial[prop] = collection[prop]
  }
  return initial
}
