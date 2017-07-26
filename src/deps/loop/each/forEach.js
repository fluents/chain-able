const isArray = require('../../is/array')
const arrayEach = require('./arrayEach')
const baseEach = require('./baseEach')

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `forIn`
 * or `forOwn` for object iteration.
 * @since 5.0.0-beta.6
 * @memberOf loop
 *
 * @fork 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Array|Object} Returns `collection`.
 *
 * @see forEachRight, forIn, forInRight, forOwn, forOwnRight
 *
 * @example
 *
 * forEach([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 *
 * forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 *
 */
function forEach(collection, iteratee) {
  const func = isArray(collection) ? arrayEach : baseEach
  return func(collection, iteratee)
}

module.exports = forEach
