const matchRegExpEscapable = require('../regexp/matchRegExpEscapable')
const replace = require('../fp/replace')

/**
 * @name escapeStringRegExp
 * @alias escapeString
 * @alias escapeStr
 * @module escape-string-regexp 🍴
 * @memberOf string
 * @memberOf matcher
 *
 * @since 3.0.0
 * @version 5.0.0 <- moved to string from matcher
 *
 * @param {string} str string to escape
 * @return {string} escaped string
 *
 * @func
 *
 * {@link https://github.com/sindresorhus/escape-string-regexp escape-string-regexp}
 * @see {@link escape-string-regexp}
 * @see fp/replace
 *
 * @example
 *
 *    const escaped = escapeStringRegexp('how much $ for a unicorn?');
 *    //=> 'how much \$ for a unicorn\?'
 *    new RegExp(escaped);
 *
 */
module.exports = replace(matchRegExpEscapable, '\\$&')
