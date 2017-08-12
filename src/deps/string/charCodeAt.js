const curry = require('../fp/curry')

/**
 * @memberOf string
 * @name charCodeAt
 * @version 5.0.0 <- moved from util to string
 * @since 4.0.0
 *
 * @param {string} str string to getCharCodeAt
 * @return {number}
 *
 * @example charCodeAt('eh') //=> code for e
 */
module.exports = curry(2, (str, index) => str.charCodeAt(index))
