const isNull = require('./null')
const isIn = require('./in')

/**
 * @param  {Object} obj object to check
 * @param  {any} prop property to check in object
 * @return {boolean}
 *
 * @extends isNull
 * @extends isIn
 */
module.exports = function hasIn(obj, prop) {
  return !isNull(obj) && isIn(obj, prop)
}
