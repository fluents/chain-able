// https://github.com/jashkenas/underscore/blob/master/test/arrays.js#L87
const flattens = require('../../src/deps/array/flatten')
const flatten = require('../../src/deps/array/flattenRecursive')
const range = require('../../src/deps/math/range')

const eq = (x, y, msg) => expect(x).toEqual(y)
test('flatten', () => {
  eq(flatten(null), [], 'supports null')
  eq(flatten(void 0), [], 'supports undefined')

  eq(flatten([[], [[]], []]), [], 'supports empty arrays')
  // eq(flatten([[], [[]], []], true), [[]], 'can shallowly flatten empty arrays')

  let list = [1, [2], [3, [[[4]]]]]
  eq(flatten(list), [1, 2, 3, 4], 'can flatten nested arrays')
  eq(flattens(list, true), [1, 2, 3, [[[4]]]], 'can shallowly flatten nested arrays')
  eq(flatten(list, true), [1, 2, 3, 4], 'can shallowly flatten nested arrays')

  let result = (function() { return flatten(arguments) })(1, [2], [3, [[[4]]]])
  eq(result, [1, 2, 3, 4], 'works on an arguments object')
  list = [[1], [2], [3], [[4]]]
  eq(flattens(list, true), [1, 2, 3, [4]], 'can shallowly flatten arrays containing only other arrays')
  eq(flatten(list, true), [1, 2, 3, 4], 'can shallowly flatten arrays containing only other arrays')
})

// slows down test suite
test.skip('hardcore huge & heavy', () => {
  eq(flatten([range(10), range(10), 5, 1, 3], true).length, 23, 'can flatten medium length arrays')
  eq(flatten([range(10), range(10), 5, 1, 3]).length, 23, 'can shallowly flatten medium length arrays')
  eq(flatten([new Array(100000), range(56000), 5, 1, 3]).length, 156003, 'can handle massive arrays')
  eq(flatten([new Array(100000), range(56000), 5, 1, 3], true).length, 156003, 'can handle massive arrays in shallow mode')

  let x = range(100000)
  for (let i = 0; i < 1000; i++) x = [x]
  eq(flatten(x), range(100000), 'can handle very deep arrays')
  eq(flattens(x, true), x[0], 'can handle very deep arrays in shallow mode')
})
