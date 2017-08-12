const isFunction = require('../../is/function')
const isObjTag = require('../../is/objTag')
const curry = require('../../fp/curry')
const keys = require('../../util/keys')
const preAllocate = require('../../array/preAllocate')
const reduce = require('./_reduce')

/**
 * @desc `while (index < list.length) push fn(list[index++])`
 * @name _map
 * @alias baseMaps
 * @since 5.0.0-beta.1
 * @memberOf loop
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_map.js ramda-_map}
 * @see {@link ramda-_map}
 *
 * @param {Function} fn function to apply
 * @param {Function|List} functorList function/list
 * @return {Array}
 */
function _map(fn, functorList) {
  let idx = 0
  const len = functorList.length
  const result = preAllocate(len)

  while (idx < len) {
    result[idx] = fn(functorList[idx])
    idx += 1
  }

  return result
}

function map(fn, functor) {
  if (isFunction(functor)) {
    return curry(functor.length, function() {
      return fn.call(this, functor.apply(this, arguments))
    })
  }
  else if (isObjTag(functor)) {
    return reduce(function(acc, key) {
      acc[key] = fn(functor[key])
      return acc
    }, {}, keys(functor))
  }
  else {
    return _map(fn, functor)
  }
}

module.exports = map
