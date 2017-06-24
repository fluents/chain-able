// https://github.com/substack/camelize/blob/master/test/camel.js
const test = require('ava')
const log = require('fliplog')
const toarr = require('../../dist/deps/to-arr')
const isArray = require('../../dist/deps/is/array')

test('toarr', t => {
  const truth = a => t.true(isArray(a))

  truth(toarr([]))
  truth(toarr(''))

  const eq = (a, b) => {
    for (var prop in a) {
      t.true(b[prop] == a[prop])
    }
  }
  eq(toarr(''), [''])
  eq(toarr('1,2'), ['1', '2'])
})

test('toarr - iterator', t => {
  const map = new Map()
  map.set('eh', true)
  const arr = toarr(map.entries())
  t.true(isArray(arr))
})

test('toarr - !', t => {
  const arr = toarr('').concat(toarr(false)).concat(toarr(null))
  t.true(isArray(arr))
  t.deepEqual(arr, ['', false, null])
})
