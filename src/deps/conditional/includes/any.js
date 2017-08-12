const isStringPrimitive = require('../../is/stringPrimitive')
const curry = require('../../fp/curry')
const haystackNeedle = require('./haystackNeedle')

/**
 * @desc needle includes haystack, haystack includes needle
 * @version 4.0.0
 * @memberOf includes
 *
 * @param  {string} needle serves dualy as haystack
 * @param  {Array<string>} haystack serves dualy as needle
 * @return {boolean}
 *
 * @example
 *
 *  strHas('eh', 'eh')    //=> true
 *  strHas('eh', 'e')     //=> true
 *  strHas('eh', 'nope')  //=> false
 *
 */
function strHasAny(needle, haystack) {
  if (haystackNeedle(needle, haystack)) return true

  for (let i = 0, len = haystack.length; i < len; i++)
    if (haystackNeedle(haystack[i], needle)) return true

  return false
}

/**
 * @memberOf includes
 * @version 1.0.0
 * @since 0.1.0
 *
 * @param  {Array<string>} needles also serves as haystack
 * @param  {Array<string>} haystack also serves as needle
 * @return {boolean}
 *
 * @extends strHasAny
 * @see includes/any#strHasAny
 *
 * @example
 *
 *  arrayHasAny(['eh'], ['eh']) //=> true
 *  arrayHasAny('eh', ['e'])    //=> true
 *  arrayHasAny(['eh'], 'e')    //=> true
 *  arrayHasAny(['eh'], 'eh')   //=> true
 *
 */
function arrayHasAny(needles, haystack) {
  if (haystackNeedle(needles, haystack)) return true

  // loop needles
  for (let i = 0; i < needles.length; i++)
    if (strHasAny(needles[i], haystack)) return true

  return false
}

/**
 * @desc any haystack includes any needle
 * @since 0.1.0
 * @version 1.0.0
 * @memberOf includes
 *
 * @param  {Array<string> | string} needle also serves as haystack
 * @param  {Array<string>} haystack also serves as needle
 * @return {boolean}
 *
 * @see arrayHasAny
 * @see strHasAny
 * @see isStringPrimitive
 *
 * @example
 *
 *    includesAny('eh', 'e')      //=> true
 *    includesAny('eh', 'eh')     //=> true
 *    includesAny(['eh'], 'e')    //=> true
 *    includesAny(['eh'], 'nope') //=> false
 *
 */
function includesAny(needle, haystack) {
  if (isStringPrimitive(needle)) return strHasAny(needle, haystack)
  else return arrayHasAny(needle, haystack)
}

module.exports = curry(2, includesAny)
