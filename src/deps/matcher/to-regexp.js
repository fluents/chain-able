const replace = require('../fp/replace')
const pipe = require('../fp/pipe')
const escapeStringRegExp = require('./escape-string-regex')

/**
 * @func toRegExp
 * @memberOf matcher
 * @module to-regexp
 * @extends escapeStringRegExp
 *
 * @param {string} str string to escape
 * @return {string} escaped str
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
module.exports = pipe(escapeStringRegExp, replace(/\\\*/g, '.*'))
