const isNullOrUndefined = require('../is/nullOrUndefined')
const isEnumerable = require('../is/enumerable')
const isUndefined = require('../is/undefined')
const lengthMinusOne = require('../util/lengthMinusOne')
const getPathSegments = require('./segments')
const isDottable = require('./dottable')

/**
 * @desc dot-prop get at path
 * @namespace dot
 * @memberOf dot
 * @since 3.0.0
 *
 * @alias dotGet
 * @alias get
 *
 * @param  {Object} obj the object to retrieve the nested property from.
 * @param  {Dottable | string | Array} path dot-prop-path to use
 * @param  {*} fallback use when there is no value at specified path
 * @return {*} value at path or fallback
 *
 * @func
 * @extends dot/getPathSegments
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L150 underscore-deep-get}
 * @see {@link underscore-deep-get}
 *
 * @example
 *
 *    dot.get({a: {b: 2}}, 'a.b')      //=> 2
 *    dot.get({a: {b: 2}}, ['a', 'b']) //=> 2
 *    dot.get({c: {b: 2}}, ['a', 'b']) //=> undefined
 *
 */
module.exports = function(obj, path, fallback) {
  // if (pathArray.length === 1 && hasOwnProperty(dot, path[0]))
  //   return dot[path[0]]
  // else if (isString(path) && path.includes('.') === false && hasOwnProperty(dot, path))
  //   return dot[path]

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
