const always = require('../../src/deps/fp/always')

test('works with various types', function() {
  expect(always(false)()).toEqual(false)
  expect(always('abc')()).toEqual('abc')

  expect(always({a: 1, b: 2})()).toEqual({a: 1, b: 2})

  var obj = {a: 1, b: 2}
  expect(always(obj)()).toEqual(obj)

  var now = new Date(1776, 6, 4)
  expect(always(now)()).toEqual(now)

  expect(always(undefined)()).toEqual(undefined)
  expect(always(null)()).toEqual(null)
  expect(always(100)()).toEqual(100)
})
