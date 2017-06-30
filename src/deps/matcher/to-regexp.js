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
module.exports = str => escapeStringRegExp(str).replace(/\\\*/g, '.*')
