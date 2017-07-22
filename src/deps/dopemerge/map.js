/* istanbul ignore: WIP */
const ObjectKeys = require('../util/keys')
const isMap = require('../is/map')
const isFalse = require('../is/false')
const reduce = require('../reduce')
const dopemerge = require('./dopemerge')

/**
 * merge maps & sets
 * @memberOf dopemerge
 *
 * @param  {Map | Set} obj1 merge with 2
 * @param  {Map | Set} obj2 merge with 1
 * @return {Map | Set} merged
 *
 * @TODO easy clone
 *
 * @example
 *
 *   var targetMap = new Map()
 *   targetMap.set('true', false)
 *   targetMap.set('obj', {obj: []})
 *   targetMap.set('arr', [1])
 *   var srcMap = new Map()
 *   srcMap.set('true', true)
 *   srcMap.set('obj', {obj: [Symbol]})
 *   srcMap.set('arr', [2])
 *   srcMap.set('emptyArr', [])
 *   var mergedMap = dopemergeMap(targetMap, srcMap, {clone: true})
 *
 */
module.exports = function dopemergeMap(obj1, obj2) {
  const oneIsMap = isMap(obj1)
  const twoIsMap = isMap(obj2)

  // eslint-disable-next-line
  const eq = (one, two) => oneIsMap == one && twoIsMap == two

  let dest = obj1
  let src = obj2

  /* prettier-ignore */
  // both maps
  if (eq(true, true)) {
    src = reduce(obj2)
  }
  // obj1 is map
  else if (eq(true, false)) {
    src = obj2
  }
  // obj2 is map
  else if (eq(false, true)) {
    src = reduce(obj2)
  }
  // false, false
  else {
    return dopemerge(obj1, obj2)
  }

  const keys = ObjectKeys(src)
  for (var i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (isFalse(dest.has(key))) {
      dest.set(key, src[key])
    }
    else {
      dest.set(key, dopemerge(dest.get(key), src[key]))
    }
  }

  return dest
}
