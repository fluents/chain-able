const isStringPrimitive = require('../../is/stringPrimitive')
const curry = require('../../fp/curry')
const includes = require('./haystackNeedle')

/**
 * @desc tripple equals, or every haystack item, is needle
 * @since 0.1.0
 * @version 1.0.0
 *
 * @param  {string} needle includes(haystack[index], needle)
 * @param  {Array<string>} haystack includes(haystack[index], needle)
 * @return {boolean}
 *
 * @example
 *
 *    stringIncludesAll('eh', ['e', 'h']) //=> true
 *    stringIncludesAll('eh', ['e'])      //=> false
 *
 */
function stringIncludesAll(needle, haystack) {
  if (needle === haystack) return true

  for (let i = 0, len = haystack.length; i < len; i++)
    if (!includes(haystack[i], needle)) return false

  return true
}

/**
 * @desc every needle is in every hay
 * @since 0.1.0
 * @version 1.0.0
 *
 * @see stringIncludesAll
 * @extends stringIncludesAll
 *
 * @param  {Array<string>} needles includes(haystack[index], needle)
 * @param  {Array<string>} haystack includes(haystack[index], needle)
 * @return {boolean}
 *
 * @example
 *
 *  arrayIncludesAll(['eh'], 'eh')
 *
 */
function arrayIncludesAll(needles, haystack) {
  // loop needles
  for (let i = 0; i < needles.length; i++)
    if (!stringIncludesAll(needles[i], haystack)) return false

  return true
}

/**
 * @desc every needle is in every hay
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
