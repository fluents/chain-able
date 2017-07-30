const isUndefined = require('../../is/undefined')

/**
 * @since 5.0.0-beta.6
 * @name defaultComparator
 * @alias defaultComparer
 * @memberOf sort
 * @memberOf loop
 *
 * {@link https://github.com/facebook/immutable-js/blob/master/src/Operations.js#L875 immutable-default-comparator}
 * {@link https://github.com/mobxjs/mobx/blob/master/src/types/comparer.ts mobx-default-comparer}
 * @see {@link mobx-default-comparer}
 * @see {@link immutable-default-comparator}
 *
 * @param {number | undefined} a compare to b
 * @param {number | undefined} b compare to a
 * @return {number} 0 | 1 | -1
 *
 * @example
 *
 *   /// a > b
 *   defaultComparator(1, 2)
 *   //=> 1
 *
 * @example
 *
 *   /// a < b
 *   defaultComparator(2, 1)
 *   //=> -1
 *
 * @example
 *
 *   /// a == b
 *   defaultComparator(1, 1)
 *   //=> 0
 *
 * @example
 *
 *   defaultComparator(undefined, undefined) //=> 0
 *   defaultComparator(undefined, 1)         //=> 1
 *   defaultComparator(1, undefined)         //=> -1
 *
 */
module.exports = function defaultComparator(a, b) {
  if (isUndefined(a) && isUndefined(b)) {
    return 0
  }
  else if (isUndefined(a)) {
    return 1
  }
  else if (isUndefined(b)) {
    return -1
  }
  else {
    return a > b ? 1 : a < b ? -1 : 0
  }
}
