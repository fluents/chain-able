const firstIndex = require('./firstIndex')

/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf fp
 * @since v5.0.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 *
 * @extends deps/fp/firstIndex
 * @param {*} x Array or Object find the last key of
 * @return {*} value at last index
 *
 * @see https://github.com/ramda/ramda/blob/master/src/head.js
 * @see R.init, R.head, R.tail
 *
 * @example
 *
 *      first(['fi', 'fo', 'fum']); //=> 'fi'
 *      first([]); //=> undefined
 *
 *      first('abc'); //=> 'a'
 *      first(''); //=> ''
 *
 */
module.exports = x => x[firstIndex(x)]
