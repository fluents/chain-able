const curry = require('../fp/curry')

/**
 * map all values in an array to see if all match
 * Returns `true` if all elements of the list match the predicate, `false` if there are any that don't.
 *
 * @alias every
 * @name all
 * @memberOf conditional
 * @since 4.0.1
 *
 * @TODO `not(some)` ?
 *
 * @curried
 * @param  {Function} predicate match the value
 * @param  {Array} list to match against predicate
 * @return {boolean} all match predicate
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L262 underscore-all}
 * {@link https://github.com/ramda/ramda/blob/master/src/all.js ramda-all}
 * @see {@link ramda-all}
 * @see {@link underscore-all}
 * @see fp/curry
 *
 * @sig (a -> Boolean) -> [a] -> Boolean
 *
 * @example
 *
 *    const allBoolean = all(x => typeof x === 'boolean'q)
 *
 *    allBoolean([true])
 *    //=> true
 *
 *    allBoolean([1])
 *    //=> false
 *
 */
const all = curry(2, (predicate, list) => {
  for (let i in list) {
    if (!predicate(list[i])) return false
  }
  return true
})

module.exports = all
