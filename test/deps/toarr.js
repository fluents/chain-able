// https://github.com/substack/camelize/blob/master/test/camel.js
const test = require('ava')
const log = require('fliplog')
const toarr = require('../../dist/deps/to-arr')

test('toarr', t => {
  const isArr = Array.isArray
  const truth = a => t.true(isArr(a))

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
