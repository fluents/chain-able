const isNullOrUndefined = require('../is/nullOrUndefined')
const isEnumerable = require('../is/enumerable')
const isUndefined = require('../is/undefined')
const lengthMinusOne = require('../util/lengthMinusOne')
const getPathSegments = require('./segments')
const isDottable = require('./dottable')

module.exports = function(obj, path, value) {
  if (!isDottable(obj, path)) {
    return isUndefined(value) ? obj : value
  }

  const pathArr = getPathSegments(path)

  for (let i = 0; i < pathArr.length; i++) {
    if (!isEnumerable(obj, pathArr[i])) {
      return value
    }

    obj = obj[pathArr[i]]

    if (isNullOrUndefined(obj)) {
      // `obj` is either `undefined` or `null` so we want to stop the loop, and
      // if this is not the last bit of the path, and
      // if it did't return `undefined`
      // it would return `null` if `obj` is `null`
      // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
      if (i !== lengthMinusOne(pathArr)) {
        return value
      }

      break
    }
  }

  return obj
}
