const isObj = require('../is/obj')
const lengthMinusOne = require('../util/lengthMinusOne')
const getPathSegments = require('./segments')
const isDottable = require('./dottable')

/**
 * @desc delete a path on an object
 * @name dot.delete
 * @memberOf dot
 * @func
 * @since 3.0.0
 * @extends dot/getPathSegments
 *
 * @param  {Object} obj the object to DELETE the nested property from.
 * @param  {Dottable | string | Array} path dot-prop-path to use
 * @return {void}
 *
 *
 * @example
 *
 *    dot.get({a: {b: 2}}, 'a.b'); //=> 2
 *    dot.get({a: {b: 2}}, ['a', 'b']); //=> 2
 *    dot.get({c: {b: 2}}, ['a', 'b']); //=> undefined
 *
 */
module.exports = function dotdelete(obj, path) {
  if (!isDottable(obj, path)) {
    return
  }

  const pathArr = getPathSegments(path)

  for (let i = 0; i < pathArr.length; i++) {
    const p = pathArr[i]

    if (i === lengthMinusOne(pathArr)) {
      delete obj[p]
      return
    }

    obj = obj[p]

    if (!isObj(obj)) {
      return
    }
  }
}
