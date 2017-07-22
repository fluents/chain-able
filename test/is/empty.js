const isEmpty = require('../../src/deps/is/empty')

test('returns false for null', function() {
  expect(isEmpty(null)).toBe(false)
})

test('returns false for undefined', function() {
  expect(isEmpty(undefined)).toBe(false)
})

test('returns true for empty string', function() {
  console.log(isEmpty(''), isEmpty(''), isEmpty(''))
  expect(isEmpty('')).toBe(true)
  expect(isEmpty(' ')).toBe(false)
})

test('returns true for empty array', function() {
  expect(isEmpty([])).toBe(true)
  // expect(isEmpty([[]])).toBe(false)
})

test('returns true for empty object', function() {
  expect(isEmpty({})).toBe(true)
  expect(isEmpty({x: 0})).toBe(false)
})

test('returns true for empty arguments object', function() {
  expect(
    isEmpty(
      (function() {
        return arguments
      })()
    )
  ).toBe(true)

  expect(
    isEmpty(
      (function() {
        return arguments
      })(0)
    )
  ).toBe(false)
})

test('returns false for every other value', function() {
  expect(isEmpty(0)).toBe(false)
  expect(isEmpty(NaN)).toBe(false)
  expect(isEmpty([''])).toBe(false)
})
