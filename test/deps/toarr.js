// https://github.com/substack/camelize/blob/master/test/camel.js
const log = require('fliplog')
const toarr = require('../../src/deps/to-arr')
const isArray = require('../../src/deps/is/array')

test('toarr', () => {
  const truth = a => expect(isArray(a)).toBe(true)

  truth(toarr([]))
  truth(toarr(''))

  const eq = (a, b) => {
    for (var prop in a) {
      expect(b[prop] === a[prop]).toBe(true)
    }
  }
  eq(toarr(''), [''])
  eq(toarr('1,2'), ['1', '2'])
})

test('toarr - iterator', () => {
  const map = new Map()
  map.set('eh', true)
  const arr = toarr(map.entries())
  expect(isArray(arr)).toBe(true)
})

test('toarr - !', () => {
  const arr = toarr('').concat(toarr(false)).concat(toarr(null))
  expect(isArray(arr)).toBe(true)
  expect(arr).toEqual(['', false, null])
})
