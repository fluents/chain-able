const isObj = require('../is/obj')
const lengthMinusOne = require('../util/lengthMinusOne')
const getPathSegments = require('./segments')
const isDottable = require('./dottable')

module.exports = function dotset(obj, path, value) {
  if (!isDottable(obj, path)) {
    return
  }

  const pathArr = getPathSegments(path)

  for (let i = 0; i < pathArr.length; i++) {
    const p = pathArr[i]

    if (!isObj(obj[p])) {
      obj[p] = {}
    }

    // isLast
    if (i === lengthMinusOne(pathArr)) {
      obj[p] = value
    }

    obj = obj[p]
  }
}
