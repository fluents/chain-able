/* istanbul ignore next: @docblocks @exports */

const all = require('./all')
const and = require('./and')
const some = require('./some')
const not = require('./not')
const or = require('./or')
const eq = require('./eq')

/**
 * @member conditional
 * @type {Object}
 */
const conditional = {all, and, some, not, or, eq}

module.exports = conditional
