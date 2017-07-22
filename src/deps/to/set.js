const construct = require('../fp/construct')

// @TODO own file
const constructSet = construct(1, Set)

const arrayToSet = arr => {
  const aSet = constructSet()
  for (let key = 0; key < arr.length; key++) aSet(arr[key])
  return aSet
}
