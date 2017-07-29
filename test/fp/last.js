const last = require('../../src/deps/fp/last')
const lastIndex = require('../../src/deps/fp/lastIndex')
const arrayToObj = require('../../src/deps/cast/arrayToObj')

// https://github.com/jashkenas/underscore/blob/master/test/arrays.js#L61
const eq = (x, y, msg) => expect(x).toEqual(y)
test('last', () => {
  const obj = arrayToObj([1, 2, 3])

  eq(last(obj), 3)
  eq(last([1, 2, 3]), 3, 'can pull out the last element of an array')

  eq(last(null), undefined, 'returns undefined when called on null')

  var arr = []
  arr[-1] = 'boo'
  eq(last(arr), 'boo', 'return undefined when called on a empty array')
})

test.skip('last with index @TODO', () => {
  // let result = (function() { return _(arguments).last() })(1, 2, 3, 4)
  // eq(result, 4, 'works on an arguments object')
  // result = map([[1, 2, 3], [1, 2, 3]], last)
  // eq(result, [3, 3], 'works well with map')

  eq(last([1, 2, 3], 0), [], 'returns an empty array when n <= 0 (0 case)')
  eq(last([1, 2, 3], -1), [], 'returns an empty array when n <= 0 (negative case)')
  eq(last([1, 2, 3], 2), [2, 3], 'can fetch the last n elements')
  eq(last([1, 2, 3], 5), [1, 2, 3], 'returns the whole array if n > length')

  // changed to -1
  eq(last(null), void 0, 'returns undefined when called on null')
  var arr = []
  arr[-1] = 'boo'
  eq(last(arr), void 0, 'return undefined when called on a empty array')
})
