const isObj = require('../is/obj')
const getPathSegments = require('./segments')
const isDottable = require('./dottable')

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
