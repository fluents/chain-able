const isArray = require('../../is/array')
const includes = require('./includes')

/**
 * @param  {string} needle
 * @param  {Array<string>} haystack
 * @return {boolean}
 */
function strHasAny(needle, haystack) {
  for (let i = 0, len = haystack.length; i < len; i++)
    if (includes(needle, haystack[i])) return true
  return false
}

/**
 * @see strHasAny
 * @param  {Array<string>} needles
 * @param  {Array<string>} haystack
 * @return {boolean}
 */
function arrayHasAny(needles, haystack) {
  // loop needles
  for (let i = 0; i < needles.length; i++) {
    if (strHasAny(needles[i], haystack)) return true
  }
  return false
}

/**
 * @see arrayHasAny
 * @see strHasAny
 * @param  {Array<string> | string} needle
 * @param  {Array<string>} haystack
 * @return {boolean}
 */
function includesAny(needle, haystack) {
  if (isArray(needle)) return arrayHasAny(needle, haystack)
  return strHasAny(needle, haystack)
}
