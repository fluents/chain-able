const escapeStringRegExp = require('../string/escapeRegExp')
const isStringPrimitive = require('../is/stringPrimitive')
const isRegExp = require('../is/regexp')
const newRegExp = require('../construct/regexp')
const replaceEscapedStar = require('../string/escapedToDotStar')
// const pipe = require('../fp/pipeTwo')

/**
 * @func
 * @name toRegExp
 * @memberOf cast
 * @module to-regexp
 * @extends escapeStringRegExp
 *
 * @param {string} x string to escape
 * @return {RegExp} x -> RegExp
 *
 * @see deps/matcher
 * @TODO flags as 2nd param?
 *
 * @example
 *
 *    toRegExp('*')
 *    => '.*'
 *
 *    toRegExp('eh')
 *    => 'eh'
 *
 */
module.exports = x => {
  if (isStringPrimitive(x)) {
    return newRegExp(escapeStringRegExp(replaceEscapedStar(x)))
  }
  else if (isRegExp(x)) {
    return x
  }
  else {
    // always false regexp
    return newRegExp('(?:)')
  }
}
