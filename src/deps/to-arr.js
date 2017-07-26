const isStringPrimitive = require('./is/stringPrimitive')
const isArray = require('./is/array')
const isSet = require('./is/set')
const isMap = require('./is/map')
const isIterator = require('./is/iterator')
const ArrayFrom = require('./util/from')

/**
 * @desc anything into an array
 * @memberOf cast
 * @name toArr
 * @alias toArray
 *
 * @sig * => Array
 * @since 0.0.1
 *
 * @param  {any} ar turn this into an array
 * @return {Array} anything into an array
 *
 * @tests deps/to-arr
 * @types deps
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L465 underscore-to-arr}
 * @see {@link underscore-to-arr}
 *
 * @example
 *
 *   toarr([])
 *   // => []
 *
 *   toarr('')
 *   // => ['']
 *
 *   toarr('1,2')
 *   // => ['1', '2']
 *
 *   toarr('1,2')
 *   // => ['1', '2']
 *
 *   const map = new Map()
 *   map.set('eh', true)
 *   const arr = toarr(map.entries())
 *   // => ['eh', true]
 *
 *   const set = new Set()
 *   set.add('eh')
 *   set.add(true)
 *   const arr = toarr(map.entries())
 *   // => ['eh', true]
 *
 *   toarr('').concat(toarr(false)).concat(toarr(null))
 *   // => ['', false, null]
 *
 */
module.exports = function(ar) {
  // @NOTE: !'' === true
  if (isStringPrimitive(ar)) return ar.includes(',') ? ar.split(',') : [ar]
  else if (!ar) return [ar]
  else if (isArray(ar)) return ar
  else if (isSet(ar) || isMap(ar) || ar.values) {
    /**
     * @desc when using `new Set().values`... no forEach o.o
     *       .values is also on `Object`...
     */
    return ArrayFrom(ar.values(ar))
  }
  else if (isIterator(ar)) return ArrayFrom(ar)
  else return [ar]
}
