const isArray = require('../is/array')
const isUndefined = require('../is/undefined')
const isString = require('../is/string')
const from = require('../util/from')
const arraySlice = require('../native/arraySlice')
const curry = require('../fp/curry')
const preferExistingMethod = require('../fp/preferExistingMethod')

const stringSlice = String.prototype.slice

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 * Dispatches to the `slice` method of the third argument, if present.
 * @memberOf array
 * @memberOf string
 * @memberOf fp
 * @since 5.0.0-beta.6
 *
 * @param {*} list array | string to slice on
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @return {*}
 *
 * @tests fp/slice
 * @curried 3
 * @see fp/preferExistingMethod
 *
 * @func
 * @fork v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 *
 * {@link https://github.com/lodash/lodash/blob/master/slice.js lodash-slice}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/castSlice.js lodash-cast-slice}
 * {@link https://github.com/lodash/lodash/commit/e5e8f35c066c71a04ba584f65acc017d032c0174 lodash-commit-remove-base-slice}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1650 underscore-slice}
 * {@link https://github.com/ramda/ramda/blob/master/src/slice.js}
 * @see {@link ramda-slice}
 * @see {@link underscore-slice}
 * @see {@link lodash-commit-remove-base-slice}
 * @see {@link lodash-cast-slice}
 * @see {@link lodash-slice}
 *
 * @example
 *
 *      slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      slice(0, 3, 'ramda');                     //=> 'ram'
 *
 */
function slice(list, fromIndex, toIndex) {
  const to = isUndefined(toIndex) ? list.length : toIndex
  if (isString(list)) return stringSlice.call(list, fromIndex, to)

  // let array = isArray(list) ? list : from(list)
  let array = list
  return arraySlice.call(array, fromIndex, to)
}

// @TODO put in flipped
//

module.exports = curry(3, preferExistingMethod('slice', slice))
// module.exports = curry(3, slice)
