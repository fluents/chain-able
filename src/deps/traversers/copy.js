const isObjNotNull = require('../is/objNotNull')
const isRegExp = require('../is/regexp')
const isError = require('../is/error')
const isDate = require('../is/date')
const isArray = require('../is/array')

/* prettier-ignore */
/**
 * @desc copy any primitive value, part of clone
 * @version 5.0.0
 * @since 3.0.0
 * @name copy
 * @see clone
 * @memberOf Traverse
 *
 * @param  {*} src value to copy
 * @return {*} copied
 *
 * @example
 *
 *    copy(/eh/gmi) //=> new RegExp('eh', 'gmi')
 *    copy(new Error('eh')) // => new Error with copied stack + msg
 *    copy([1]) // => [1]
 *    copy({}) // => {}
 *
 */
module.exports = function copy(src) {
  if (isObjNotNull(src)) {
    let dst

    // if (isPrimitive(src)) {
    // if (isNullOrUndefined(src)) {
    //   dst = src
    // }

    // @TODO @IMPORTANT @FIXME @!IMPORTANT - COVER THIS OR NOT?
    // for string value number boolean objects...
    // if (isString(src)) {
    //   dst = src + ''
    // }
    // else if (isNumber(src)) {
    //   dst = src + 0
    // }
    // else if (isBoolean(src)) {
    //   dst = !!src
    // }
    // else

    // lists... <- needs to have dot-prop support on Map/Set
    // if (isMap(src)) {
    //   dst = new Map()
    //   const obj = reduce(src)
    //   // src.clear()
    //   ObjectKeys(obj).forEach(key => dst.set(key, obj[key]))
    //   return dst
    // }
    // else if (isSet(src)) {
    //   dst = new Set()
    //   // could clone here too
    //   const obj = toarr(src)
    //   // src.clear()
    //   obj.forEach(value => dst.add(value))
    //   return dst
    // }

    // ------
    if (isArray(src)) {
      dst = []
    }
    else if (isDate(src)) {
      dst = new Date(src.getTime ? src.getTime() : src)
    }
    else if (isRegExp(src)) {
      dst = new RegExp(src)
    }
    else if (isError(src)) {
      dst = new Error(src.message)
      dst.stack = src.stack
    }
    else {
      dst = Object.create(Object.getPrototypeOf(src))
    }

    // @TODO: copy descriptor
    // eslint-disable-next-line
    for (var prop in src) {
      dst[prop] = src
      // const desc = Object.getOwnPropertyDescriptor(src, prop)
      // Object.defineProperty(dst, prop, desc)
    }
    return dst
  }
  else {
    // require('fliplog').red('is NOT OBJ').echo()
    return src
  }
}
