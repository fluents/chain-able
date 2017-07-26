const keys = require('../util/keysObjOrArray')
const curry = require('./curry')
const pipe = require('./pipe')
const replace = require('./replace')

/**
 * @desc replace an array of patterns, or an object with {pattern: replacement}
 * @since v5.0.0
 * @memberOf fp
 * @category String
 *
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 *
 * @curried
 * @func
 * @name replaceWith
 *
 * @TODO could use `toTester`/`toMatcher` on keys
 * @TODO might also be using a map
 * @TODO need to finish the mapping ones,
 * @TODO need to externalize some functionality as needed point where
 * @TODO need to tighten up the .method stuff, fully test
 *
 * @example
 *
 *   const stripEh = replaceWith({'eh': ''})
 *   stripEh('ehs') //=> 's'
 *
 */
const replaceWith = (map, str, castToMatcher = false) => {
  const replacements = keys(map)
    .map(key => replace(key, map[key]))

  return pipe.apply(null, replacements)(str)
}

module.exports = curry(2, replaceWith)
