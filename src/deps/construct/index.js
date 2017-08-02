/* istanbul ignore next */

const constructMap = require('./map')
const constructSet = require('./set')
const constructRegExp = require('./regexp')

/**
 * @member construct
 * @type {Object}
 * @TODO map to `newX` ?
 */
module.exports = {
  constructMap,
  constructSet,
  constructRegExp,
}
