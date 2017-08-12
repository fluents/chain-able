const prop = require('../../fp/prop')
const curry = require('../../fp/curry')
const map = require('./_map')

/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `map(prop(k), f)`.
 * @since 5.0.0-beta.6
 * @memberOf loop
 *
 * @func
 * @fork v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 *
 * @param {Number|String} path The key name to pluck off of each object.
 * @param {Array} functorList The array or functor to consider.
 * @return {Array} The list of values for the given key.
 *
 * @see fp/props
 * {@link https://github.com/ramda/ramda/blob/master/src/pluck.js ramda-pluck}
 * @see {@link ramda-pluck}
 *
 * @symb pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 *
 * @example
 *
 *      pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 *
 */
function _pluck(path, functorList) {
  return map(prop(path), functorList)
}

module.exports = curry(2, _pluck)
