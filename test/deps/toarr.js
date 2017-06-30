// https://github.com/substack/camelize/blob/master/test/camel.js
const log = require('fliplog')
const toarr = require('../../src/deps/to-arr')
const isArray = require('../../src/deps/is/array')

test('toarr', () => {
  const truth = a => expect(isArray(a)).toBe(true)

  truth(toarr([]))
  truth(toarr(''))

  const eq = (a, b) => {
    // eslint-disable-next-line
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

test.skip('toarr - edge - all marked as isArray', () => {
  const shouldWork = [
    'should work for Int8Array',
    'should work for Uint8Array',
    'should work for Uint8ClampedArray',
    'should work for Int16Array',
    'should work for Uint16Array',
    'should work for Int32Array',
    'should work for Uint32Array',
    'should work for Float32Array',
    'should work for Float64Array',
  ]
  console.log(shouldWork)

  // 0
  var int8array = new Int8Array()

  // expect(kindOf(int8array)).toBe('int8array')
  expect(toarr(int8array)).toBe([])

  // 1
  var uint8array = new Uint8Array()
  // expect(kindOf(uint8array)).toBe('uint8array')
  expect(toarr(uint8array)).toBe([])

  // 2
  var uint8clampedarray = new Uint8ClampedArray()
  // expect(kindOf(uint8clampedarray)).toBe('uint8clampedarray')
  expect(toarr(uint8clampedarray)).toBe([])

  // 3
  var int16array = new Int16Array()
  // expect(kindOf(int16array)).toBe('int16array')
  expect(toarr(int16array)).toBe([])

  // 4
  var uint16array = new Uint16Array()
  // expect(kindOf(uint16array)).toBe('uint16array')
  expect(toarr(uint16array)).toBe([])

  // 5
  var int32array = new Int32Array()
  // expect(kindOf(int32array)).toBe('int32array')
  expect(toarr(int32array)).toBe([])

  // 6
  var uint32array = new Uint32Array()
  // expect(kindOf(uint32array)).toBe('uint32array')
  expect(toarr(uint32array)).toBe([])

  // 7
  var float32array = new Float32Array()
  // expect(kindOf(float32array)).toBe('float32array')
  expect(toarr(float32array)).toBe([])

  // 8
  var float64array = new Float64Array()
  // expect(kindOf(float64array)).toBe('float64array')
  expect(toarr(float64array)).toBe([])
})
