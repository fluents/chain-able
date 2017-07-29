const first = require('../../src/deps/fp/first')
const map = require('../../src/deps/loop/map/mapObjOrArray')
const castArguments = require('../../src/deps/cast/args')

// https://github.com/jashkenas/underscore/blob/master/test/arrays.js#L6
const eq = (x, y, msg) => expect(x).toEqual(y)
test('first', () => {
  eq(first([1, 2, 3]), 1, 'can pull out the first element of an array')
  eq(first([1, 2, 3], 0), [], 'returns an empty array when n <= 0 (0 case)')
  eq(first([1, 2, 3], -1), [], 'returns an empty array when n <= 0 (negative case)')
  eq(first([1, 2, 3], 2), [1, 2], 'can fetch the first n elements')
  eq(first([1, 2, 3], 5), [1, 2, 3], 'returns the whole array if n > length')

  let result = castArguments(4, 3, 2, 1)
  eq(result, 4, 'works on an arguments object')
  result = map([[1, 2, 3], [1, 2, 3]], first)
  eq(result, [1, 1], 'works well with map')
  eq(first(null), void 0, 'returns undefined when called on null')

  Array.prototype[0] = 'boo'
  eq(first([]), void 0, 'return undefined when called on a empty array')
  delete Array.prototype[0]
})
