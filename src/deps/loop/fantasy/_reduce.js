const isNil = require('../../is/nullOrUndefined')
const isFunction = require('../../is/function')
const hasOwnProperty = require('../../util/hasOwnProperty')
const symIterator = require('../../symbols/iterator')
const isArrayLike = require('../../is/arrayLike')
const bind = require('../../fp/bind')

const ON_INIT = '@@transducer/init'
const ON_STEP = '@@transducer/step'
const ON_REDUCED = '@@transducer/reduced'
const ON_VALUE = '@@transducer/value'
const ON_RESULT = '@@transducer/result'
const FANTASY_LAND_REDUCE = 'fantasy-land/reduce'

var _xwrap = (function() {
  function XWrap(fn) {
    this.f = fn
  }
  XWrap.prototype[ON_INIT] = function() {
    throw new Error('init not implemented on XWrap')
  }
  XWrap.prototype[ON_RESULT] = function(acc) { return acc }
  XWrap.prototype[ON_STEP] = function(acc, x) {
    return this.f(acc, x)
  }

  // @TODO construct?
  return function _xwrap(fn) {
    return new XWrap(fn)
  }
})()

/**
 * @name _reduce
 * @since 5.0.0-beta.6
 * @memberOf loop
 * @return {Function}
 */
// list aka functor
const reduce = (function() {
  function _arrayReduce(xf, acc, list) {
    let idx = 0
    const len = list.length
    while (idx < len) {
      acc = xf[ON_STEP](acc, list[idx])
      if (acc && acc[ON_REDUCED]) {
        acc = acc[ON_VALUE]
        break
      }
      idx += 1
    }
    return xf[ON_RESULT](acc)
  }

  function _iterableReduce(xf, acc, iter) {
    let step = iter.next()
    while (!step.done) {
      acc = xf[ON_STEP](acc, step.value)
      if (hasOwnProperty(acc, ON_REDUCED)) {
        acc = acc[ON_VALUE]
        break
      }
      step = iter.next()
    }
    return xf[ON_RESULT](acc)
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf[ON_RESULT](obj[methodName](bind(xf[ON_STEP], xf), acc))
  }

  return function _reduce(fn, acc, list) {
    if (isFunction(fn)) {
      fn = _xwrap(fn)
    }

    if (isArrayLike(list)) {
      return _arrayReduce(fn, acc, list)
    }
    else if (isFunction(list[FANTASY_LAND_REDUCE])) {
      return _methodReduce(fn, acc, list, FANTASY_LAND_REDUCE)
    }
    else if (!isNil(list[symIterator])) {
      return _iterableReduce(fn, acc, list[symIterator]())
    }
    else if (isFunction(list.next)) {
      return _iterableReduce(fn, acc, list)
    }
    else if (isFunction(list.reduce)) {
      return _methodReduce(fn, acc, list, 'reduce')
    }

    throw new TypeError('reduce: list must be array or iterable')
  }
})()

module.exports = reduce
