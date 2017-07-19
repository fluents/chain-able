const curry = require('./curry')

/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf fp
 * @since v5.0.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 *
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 *
 * @see https://github.com/ramda/ramda/blob/master/src/replace.js
 *
 * @example
 *
 *      replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 *
 */
module.exports = curry(3, function replace(regex, replacement, str) {
  return str.replace(regex, replacement)
})