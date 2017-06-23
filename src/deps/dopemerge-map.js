const reduce = require('./reduce')
const isMap = require('./is/map')
const dopemerge = require('./dopemerge')

// const keys = Object.keys(validators)
// keys.forEach(key => {
//   let validator = validators[key]
//   if (scoped.has(key))
//     validator = dopemerge(map.get(key), validators[key])
//   scoped.set(key)
// })

function dopemergeMap(obj1, obj2) {
  const maps = [isMap(obj1), isMap(obj2)]
  const eq = (one, two) => maps[0] == one && maps[1] == two
  let dest = obj1
  let src = obj2
  switch (true) {
    // both maps
    case eq(true, true): {
      src = reduce(obj2)
      break
    }
    // obj1 is map
    // case maps.includes(true)
    case eq(true, false): {
      src = obj2
      break
    }
    // obj2 is map
    case eq(false, true): {
      src = reduce(obj2)
      break
    }
    // false, false
    default: {
      return dopemerge(obj1, obj2)
    }
  }
  const keys = Object.keys(src)
  keys.forEach(key => {
    if (dest.has(key) === false) {
      dest.set(key, src[key])
    }
    else {
      dest.set(key, dopemerge(dest.get(key), src[key]))
    }
  })

  return dest
}

var targetMap = new Map()
targetMap.set('true', false)
targetMap.set('obj', {obj: []})
targetMap.set('arr', [1])
var srcMap = new Map()
srcMap.set('true', true)
srcMap.set('obj', {obj: [Symbol]})
srcMap.set('arr', [2])
srcMap.set('emptyArr', [])
var mergedMap = dopemergeMap(targetMap, srcMap, {clone: true})
