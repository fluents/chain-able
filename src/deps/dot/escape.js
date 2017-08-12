const replace = require('../fp/replace')

/**
 * @memberOf dot
 * @name escapeDot
 * @extends fp/replace
 */
module.exports = replace(/[.]/gim, '')
