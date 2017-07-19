const isNull = require('./null')
const isIn = require('./in')

/**
 * @desc isIn, but first checks it is not null
 * @since 5.0.0
 *
 * @param  {Object} obj object to check
 * @param  {any} prop property to check in object
 * @return {boolean}
 *
 * @extends isNull
 * @extends isIn
 *
 * @example
 *
 *  hasIn({}, 'eh') //=> false
 *  hasIn(null, 'eh') //=> false
 *  hasIn({eh: true}, 'eh') //=> true
 *
 */
module.exports = function hasIn(obj, prop) {
  return !isNull(obj) && isIn(obj, prop)
}
