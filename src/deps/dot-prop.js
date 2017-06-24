// https://github.com/mariocasciaro/object-path/blob/master/index.js
// https://github.com/sindresorhus/dot-prop/blob/master/index.js
// https://github.com/sindresorhus/is-obj/blob/master/index.js
const isObj = require('./is/obj')
const isArray = require('./is/array')
const isNullOrUndefined = require('./is/nullOrUndefined')
const isEnumerable = require('./is/enumerable')
const isUndefined = require('./is/undefined')
const getPathSegments = require('./dot-segments')

// const isDot = require('./is/dot')
// const isDottable = (obj, path) => isObj(obj) && isDot(path)
const isDottable = (obj, path) =>
  (isObj(obj) && typeof path === 'string') || isArray(path)

module.exports = {
  get(obj, path, value) {
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
        if (i !== pathArr.length - 1) {
          return value
        }

        break
      }
    }

    return obj
  },

  set(obj, path, value) {
    if (!isDottable(obj, path)) {
      return
    }

    const pathArr = getPathSegments(path)

    for (let i = 0; i < pathArr.length; i++) {
      const p = pathArr[i]

      if (!isObj(obj[p])) {
        obj[p] = {}
      }

      if (i === pathArr.length - 1) {
        obj[p] = value
      }

      obj = obj[p]
    }
  },

  delete(obj, path) {
    if (!isDottable(obj, path)) {
      return
    }

    const pathArr = getPathSegments(path)

    for (let i = 0; i < pathArr.length; i++) {
      const p = pathArr[i]

      if (i === pathArr.length - 1) {
        delete obj[p]
        return
      }

      obj = obj[p]

      if (!isObj(obj)) {
        return
      }
    }
  },

  has(obj, path) {
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
  },
}
