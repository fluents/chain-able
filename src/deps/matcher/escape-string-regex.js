const replace = require('../fp/replace')

/**
 * @func escapeStringRegExp
 * @module escape-string-regexp
 * @memberOf matcher
 * @since 3.0.0
 *
 * @param  {string} str string to escape
 * @return {string} escaped string
 *
 * {@link https://github.com/sindresorhus/escape-string-regexp escape-string-regexp}
 * @see {@link escape-string-regexp *} 🍴
 * @see fp/replace
 *
 * @NOTE also as const escapeStringRegexp = require('escape-string-regexp');
 *
 * @example
 *
 *    const escaped = escapeStringRegexp('how much $ for a unicorn?');
 *    //=> 'how much \$ for a unicorn\?'
 *    new RegExp(escaped);
 *
 */
module.exports = replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
