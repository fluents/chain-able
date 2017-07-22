const lastIndex = require('./lastIndex')

/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf fp
 * @since 5.0.0-beta.2
 *
 * @param {*} x list to get last index of
 * @return {*}
 *
 * @ramda v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 *
 * @see R.init, R.head, R.tail
 * @extends deps/fp/lastIndex
 *
 * @types fp
 * @tests fp/*
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
module.exports = x => x[lastIndex(x)]
