const isArray = require('../../is/array')
const includes = require('./includes')

/**
 * @param  {string} needle
 * @param  {Array<string>} haystack
 * @return {boolean}
 */
function strHasAll(needle, haystack) {
  if (needle === haystack) {
    return true
  }
  for (let i = 0, len = haystack.length; i < len; i++)
    if (!includes(haystack[i], needle)) return false
  return true
}

/**
 * @see strHasAll
 * @param  {Array<string>} needles
 * @param  {Array<string>} haystack
 * @return {boolean}
 */
function arrayHasAll(needles, haystack) {
  // loop needles
  for (let i = 0; i < needles.length; i++) {
    if (!strHasAll(needles[i], haystack)) return false
  }
  return true
}

/**
 * @see arrayHasAll
 * @see strHasAll
 * @param  {Array<string> | string} needle
 * @param  {Array<string>} haystack
 * @return {boolean}
 */
function includesAll(needle, haystack) {
  if (isArray(needle)) return arrayHasAll(needle, haystack)
  else return strHasAll(needle, haystack)
}

module.exports = includesAll
