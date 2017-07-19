const lastIndex = require('./lastIndex')

/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf fp
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 *
 * @param {*} x list to get last index of
 * @return {*}
 *
 * @see R.init, R.head, R.tail
 * @extends deps/fp/lastIndex
 *
 * @example
 *
 *      last(['fi', 'fo', 'fum']); //=> 'fum'
 *      last([]); //=> undefined
 *
 *      last('abc'); //=> 'c'
 *      last(''); //=> ''
 *
 */
module.exports = (x) => {
  return x[lastIndex(x)]
}
