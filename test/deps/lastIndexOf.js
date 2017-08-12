// const lastIndexOf = require('../../src/deps/fp/lastIndexOf')
// const map = require('../../src/deps/loop/map/map')

// https://github.com/jashkenas/underscore/blob/master/test/arrays.js#L61
const eq = (x, y, msg) => expect(x).toEqual(y)

test.skip('lastIndexOf', () => {
  var numbers = [1, 0, 1]
  var falsy = [void 0, '', 0, false, NaN, null, void 0]
  eq(lastIndexOf(numbers, 1), 2)

  numbers = [1, 0, 1, 0, 0, 1, 0, 0, 0]
  numbers.lastIndexOf = null
  eq(lastIndexOf(numbers, 1), 5, 'can compute lastIndexOf, even without the native function')
  eq(lastIndexOf(numbers, 0), 8, 'lastIndexOf the other element')
  var result = (function() { return lastIndexOf(arguments, 1) })(1, 0, 1, 0, 0, 1, 0, 0, 0)
  eq(result, 5, 'works on an arguments object')

  each([null, void 0, [], false], function(val) {
    var msg = 'Handles: ' + (isArray(val) ? '[]' : val)
    eq(lastIndexOf(val, 2), -1, msg)
    eq(lastIndexOf(val, 2, -1), -1, msg)
    eq(lastIndexOf(val, 2, -20), -1, msg)
    eq(lastIndexOf(val, 2, 15), -1, msg)
  })

  numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3]
  var index = lastIndexOf(numbers, 2, 2)
  eq(index, 1, 'supports the fromIndex argument')

  var array = [1, 2, 3, 1, 2, 3]

  eq(lastIndexOf(array, 1, 0), 0, 'starts at the correct from idx')
  eq(lastIndexOf(array, 3), 5, 'should return the index of the last matched value')
  eq(lastIndexOf(array, 4), -1, 'should return `-1` for an unmatched value')

  eq(lastIndexOf(array, 1, 2), 0, 'should work with a positive `fromIndex`')

  each([6, 8, Math.pow(2, 32), Infinity], function(fromIndex) {
    eq(lastIndexOf(array, void 0, fromIndex), -1)
    eq(lastIndexOf(array, 1, fromIndex), 3)
    eq(lastIndexOf(array, '', fromIndex), -1)
  })

  var expected = map(falsy, function(value) {
    return typeof value === 'number' ? -1 : 5
  })

  var actual = map(falsy, function(fromIndex) {
    return lastIndexOf(array, 3, fromIndex)
  })

  eq(actual, expected, 'should treat falsy `fromIndex` values, except `0` and `NaN`, as `array.length`')
  eq(lastIndexOf(array, 3, '1'), 5, 'should treat non-number `fromIndex` values as `array.length`')
  eq(lastIndexOf(array, 3, true), 5, 'should treat non-number `fromIndex` values as `array.length`')

  eq(lastIndexOf(array, 2, -3), 1, 'should work with a negative `fromIndex`')
  eq(lastIndexOf(array, 1, -3), 3, 'neg `fromIndex` starts at the right index')

  eq(map([-6, -8, -Infinity], function(fromIndex) {
    return lastIndexOf(array, 1, fromIndex)
  }), [0, -1, -1])
})
