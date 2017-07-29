const isIndexable = require('../is/indexable')
const firstIndex = require('./firstIndex')

/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @memberOf fp
 * @since v5.0.0
 *
 * @extends deps/fp/firstIndex
 * @param {*} x Array or Object find the last key of
 * @return {*} value at last index
 *
 * @func
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 *
 * @see https://github.com/lodash/lodash/blob/master/head.js
 * @see https://github.com/ramda/ramda/blob/master/src/head.js
 * @see R.init, R.head, R.tail
 * @TODO could just pipe nth
 *
 * @example
 *
 *      first(['fi', 'fo', 'fum']); //=> 'fi'
 *      first([]);                  //=> undefined
 *
 *      first('abc');               //=> 'a'
 *      first('');                  //=> ''
 *
 */
module.exports = x => (isIndexable(x) ? x[firstIndex(x)] : undefined)
