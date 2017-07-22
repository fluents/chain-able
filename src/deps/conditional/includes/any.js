const isStringPrimitive = require('../../is/stringPrimitive')
const curry = require('../../fp/curry')
const includes = require('./includes')

/**
 * @param  {string} needle
 * @param  {Array<string>} haystack
 * @return {boolean}
 */
function strHasAny(needle, haystack) {
  if (needle.includes(haystack)) return true

  for (let i = 0, len = haystack.length; i < len; i++)
    if (haystack[i].includes(needle)) return true

  return false
}

/**
 * @param  {Array<string>} needles
 * @param  {Array<string>} haystack
 * @return {boolean}
 *
 * @see strHasAny
 */
function arrayHasAny(needles, haystack) {
  if (needles.includes(haystack)) return true

  // loop needles
  for (let i = 0; i < needles.length; i++)
    if (strHasAny(needles[i], haystack)) return true

  return false
}

/**
 * @param  {Array<string> | string} needle
 * @param  {Array<string>} haystack
 * @return {boolean}
 *
 * @see arrayHasAny
 * @see strHasAny
 *
 * @example
 *
 *    includesAny('eh', 'e') //=> true
 *    includesAny('eh', 'eh') //=> true
 *    includesAny(['eh'], 'e') //=> true
 *    includesAny(['eh'], 'nope') //=> false
 *
 */
function includesAny(needle, haystack) {
  if (isStringPrimitive(needle)) return strHasAny(needle, haystack)
  else return arrayHasAny(needle, haystack)
}

module.exports = curry(2, includesAny)
