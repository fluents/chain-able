const isStringPrimitive = require('../../is/stringPrimitive')
const curry = require('../../fp/curry')
const includes = require('./includes')

/**
 * @param  {string} needle
 * @param  {Array<string>} haystack
 * @return {boolean}
 *
 * @example
 *
 */
function stringIncludesAll(needle, haystack) {
  if (needle === haystack) return true

  for (let i = 0, len = haystack.length; i < len; i++)
    if (!includes(haystack[i], needle)) return false

  return true
}

/**
 * @see stringIncludesAll
 * @param  {Array<string>} needles
 * @param  {Array<string>} haystack
 * @return {boolean}
 */
function arrayIncludesAll(needles, haystack) {
  // loop needles
  for (let i = 0; i < needles.length; i++)
    if (!stringIncludesAll(needles[i], haystack)) return false

  return true
}

/**
 * @since 4.0.0
 * @param  {Array<string> | string} needle everything in haystack is in this
 * @param  {Array<string>} haystack everything in this is in the needle
 * @return {boolean}
 *
 * @see arrayIncludesAll
 * @see stringIncludesAll
 *
 * @example
 *
 *    /// 'canada' and 'can' are both in it, so true
 *    includesAll('canada', ['canada', 'can'])
 *    includesAll(['eh'], 'e') //=> true
 *    includesAll(['eh'], 'nope') //=> false
 *    includesAll('eh', ['no', 'eh']) //=> false
 *
 */
function includesAll(needle, haystack) {
  if (isStringPrimitive(needle)) return stringIncludesAll(needle, haystack)
  else return arrayIncludesAll(needle, haystack)
}

module.exports = curry(2, includesAll)
