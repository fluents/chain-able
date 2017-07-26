const haystackNeedle = require('./haystackNeedle')
const needleHaystack = require('./needleHaystack')
const includesAll = require('./all')
const includesAny = require('./any')

/**
 * @member includes
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L288 underscore-includes}
 * @see {@link underscore-includes}
 */
module.exports = {
  // traditional
  includes: haystackNeedle,
  // rest
  haystackNeedle,
  needleHaystack,
  includesAll,
  includesAny,
}
