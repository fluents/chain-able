const curry = require('../fp/curry')
const toString = require('../cast/toString')
const concatArray = require('../array/concat')
const isString = require('../is/stringPrimitive')

/**
 * @name concat
 * @alias concatAny
 * @since 5.0.0-beta.6
 *
 * @curried 2
 * @see array/concat
 *
 * @param  {string|Array} a
 * @param  {string|Array} b
 * @return {string|Array} y
 */
function concat(a, b) {
  if (isString(a)) {
    if (isString(b)) {
      return a + b
    }
    else {
      return a + toString(b)
    }
  }
  else {
    return concatArray(a, b)
  }
}

module.exports = curry(2, concat)
