const isTrue = require('../../is/true')
const includesAny = require('./any')
const includesAll = require('./all')

/**
 * @see includesAll
 * @see includesAny
 * @param  {Array<string> | string} needle
 * @param  {Array<string>} haystack
 * @param  {boolean} any
 * @return {boolean}
 */
module.exports = function anyOrAll(needle, haystack, any = true) {
  if (isTrue(any)) return includesAny(needle, haystack)
  return includesAll(needle, haystack)
}
