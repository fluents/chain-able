const isObj = require('../is/obj')
const getPathSegments = require('./segments')
const isDottable = require('./dottable')

/**
 * @name dot.has
 * @memberOf dot
 * @func
 * @since 3.0.0
 * @extends dot/getPathSegments
 *
 * @param  {Object} obj the object to retrieve the nested property from.
 * @param  {Dottable | string | Array} path dot-prop-path to use
 * @return {boolean} has at path
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1369 underscore-has}
 * @see {@link underscore-has}
 *
 * @example
 *
 *    dot.has({a: {b: 2}}, 'a.b'); //=> true
 *    dot.has({a: {b: 2}}, ['a', 'b']); //=> true
 *    dot.has({c: {b: 2}}, ['a', 'b']); //=> undefined
 *
 */
module.exports = function dotHas(obj, path) {
  if (!isDottable(obj, path)) {
    return false
  }

  const pathArr = getPathSegments(path)

  for (let i = 0; i < pathArr.length; i++) {
    if (isObj(obj)) {
      if (!(pathArr[i] in obj)) {
        return false
      }

      obj = obj[pathArr[i]]
    }
    else {
      return false
    }
  }

  return true
}
