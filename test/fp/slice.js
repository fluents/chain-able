const castArgs = require('../../src/deps/cast/toArguments')
const slice = require('../../src/deps/flipped/sliceFlipped')

const eq = (x, y, msg) => expect(x).toEqual(y)

describe('slice', function() {
  it('retrieves the proper sublist of a list', function() {
    var list = [8, 6, 7, 5, 3, 0, 9]
    eq(slice(2, 5, list), [7, 5, 3])
  })
  it('handles array-like object', function() {
    var args = castArgs(1, 2, 3, 4, 5)
    eq(slice(1, 4, args), [2, 3, 4])
  })
  it('can operate on strings', function() {
    eq(slice(0, 0, 'abc'), '')
    eq(slice(0, 1, 'abc'), 'a')
    eq(slice(0, 2, 'abc'), 'ab')
    eq(slice(0, 3, 'abc'), 'abc')
    eq(slice(0, 4, 'abc'), 'abc')
    eq(slice(1, 0, 'abc'), '')
    eq(slice(1, 1, 'abc'), '')
    eq(slice(1, 2, 'abc'), 'b')
    eq(slice(1, 3, 'abc'), 'bc')
    eq(slice(1, 4, 'abc'), 'bc')
    eq(slice(0, -4, 'abc'), '')
    eq(slice(0, -3, 'abc'), '')
    eq(slice(0, -2, 'abc'), 'a')
    eq(slice(0, -1, 'abc'), 'ab')
    eq(slice(0, -0, 'abc'), '')
    eq(slice(-2, -4, 'abc'), '')
    eq(slice(-2, -3, 'abc'), '')
    eq(slice(-2, -2, 'abc'), '')
    eq(slice(-2, -1, 'abc'), 'b')
    eq(slice(-2, -0, 'abc'), '')
  })
})
