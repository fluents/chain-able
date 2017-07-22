const construct = require('../fp/construct')

// @TODO own file
const constructMap = construct(1, Map)

const objToMap = obj => {
  const map = constructMap()

  // can just use obj.hasOwnProperty again?
  const objHasProp = hasOwnProperty(obj)
  for (let prop in obj) {
    if (objHasProp(prop)) map.set(prop, obj[prop])
  }
  // Object.keys(obj).forEach(key => map.set(key, obj[key]))

  return map
}
