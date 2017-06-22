// const isReal = require('./is/real')
// const isString = require('./is/string')
const isArray = require('./is/array')
const isSet = require('./is/set')
const isMap = require('./is/map')
const isIterator = require('./is/iterator')
const ArrayFrom = require('./util/from')

/**
 * @since 0.0.1
 * @param  {any} ar
 * @return {Array}
 */
module.exports = function(ar) {
  // @NOTE: !'' === true
  if (typeof ar === 'string') return ar.includes(',') ? ar.split(',') : [ar]
  else if (!ar) return [ar]
  else if (isArray(ar)) return ar
  else if (isSet(ar) || isMap(ar) || ar.values) {
    // @NOTE: when using `new Set().values`... no forEach o.o
    // @NOTE: .values is also on `Object`...
    return ArrayFrom(ar.values(ar))
  }
  else if (isIterator(ar)) return ArrayFrom(ar)
  else return [ar]
}
