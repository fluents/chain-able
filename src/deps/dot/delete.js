const isObj = require('../is/obj')
const lengthMinusOne = require('../util/lengthMinusOne')
const getPathSegments = require('./segments')
const isDottable = require('./dottable')

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
