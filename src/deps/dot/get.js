const isNullOrUndefined = require('../is/nullOrUndefined')
const isEnumerable = require('../is/enumerable')
const isUndefined = require('../is/undefined')
const lengthMinusOne = require('../util/lengthMinusOne')
const getPathSegments = require('./segments')
const isDottable = require('./dottable')

/**
 * @name dot.get
 * @memberOf dot
 * @func
 * @since 3.0.0
 * @extends dot/getPathSegments
 *
 * @param  {Object} obj the object to retrieve the nested property from.
 * @param  {Dottable | string | Array} path dot-prop-path to use
 * @param  {*} fallback use when there is no value at specified path
 * @return {*} value at path or fallback
 *
 * @example
 *
 *    dot.get({a: {b: 2}}, 'a.b'); //=> 2
 *    dot.get({a: {b: 2}}, ['a', 'b']); //=> 2
 *    dot.get({c: {b: 2}}, ['a', 'b']); //=> undefined
 *
 */
module.exports = function(obj, path, fallback) {
  if (!isDottable(obj, path)) {
    return isUndefined(fallback) ? obj : fallback
  }

  const pathArr = getPathSegments(path)

  for (let i = 0; i < pathArr.length; i++) {
    if (!isEnumerable(obj, pathArr[i])) {
      return fallback
    }

    obj = obj[pathArr[i]]

    if (isNullOrUndefined(obj)) {
      /*
       * `obj` is either `undefined` or `null` so we want to stop the loop, and
       * if this is not the last bit of the path, and
       * if it did't return `undefined`
       * it would return `null` if `obj` is `null`
       * but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied fallback, not `null`
       */
      if (i !== lengthMinusOne(pathArr)) {
        return fallback
      }

      break
    }
  }

  return obj
}
