const log = require('fliplog')
const {
  keys,
  remove,
  values,
  isReal,
  isEmpty,
  not,
  always,
  concat,
} = require('../../exports')
const {
  arrayEach,
  baseEach,
  baseFor,
  forEach,
  forOwn,
  filterWhere,
  mapObjOrArray,
  mapAcum,
  mapKey,
  mapObj,
  sort,
  sortBy,
  sortByR,
  sortWith,
  comparator,
  keyVal,
  flipped,
} = require('../../src/deps/loop')

test('forOwn', () => {
  const object = {eh: true, oh: 1, canada: 'yes'}
  forOwn(object, function(value, key) {
    delete object[key]
  })
  expect(keys(object).length).toBe(0)
})
test('flipped: forOwn', () => {
  const object = {eh: true, oh: 1, canada: 'yes'}
  flipped.forOwn(object, key => delete object[key])
  expect(keys(object).length).toBe(0)
})
test('flipped: forEach with `remove`', () => {
  const object = {eh: true, oh: 1, canada: 'yes'}
  // curried, nice
  flipped.forEach(object, remove(object))
  expect(keys(object).length).toBe(0)
})
test('flipped: mapKey with .concat', () => {
  const appendEh = concat('_', 'eh')
  const object = {eh: true, oh: 1, canada: 'yes'}
  const result = flipped.mapKey(object, appendEh)

  const ogKeys = keys(object)
  const resultKeys = keys(result)
  const ogToResultKeys = mapObjOrArray(keys(object), appendEh)
  expect(resultKeys).toEqual(ogToResultKeys)
})
test('flipped: mapKey', () => {
  const object = {eh: true, oh: 1, canada: 'yes'}
  const result = flipped.mapKey(object, always(''))
  expect(keys(object).length).toBe(3)
  expect(keys(result).filter(not(isEmpty)).length).toBe(0)
})
test('flipped: map', () => {
  // @TODO use cast/pairs
  // const object = {eh: true, oh: 1, canada: 'yes'}
  const array = ['eh', true, 'oh', 1, 'canada', 'yes']
  const ogLength = array.length
  const result = flipped.mapArray(array, always(null))
  expect(values(array).length).toBe(ogLength)
  expect(values(result).filter(isReal).length).toBe(0)
})

const comparatorMsg = `comparator:
  builds a comparator function
  for sorting out of a simple predicate
  that reports whether the first param is smaller`

test(comparatorMsg, () => {
  const compareLessThan = comparator((a, b) => a < b)
  eq([3, 1, 8, 1, 2, 5].sort(compareLessThan), [1, 1, 2, 3, 5, 8])
})
