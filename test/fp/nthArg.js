const nthArg = require('../../src/deps/fp/nthArg')

const eq = (x, y, msg) => expect(x).toEqual(y)

describe('nthArg', function() {
  it.skip('returns a function which returns its nth argument', function() {
    eq(nthArg(0)('foo', 'bar'), 'foo')
    eq(nthArg(1)('foo', 'bar'), 'bar')
  })

  it.skip('accepts negative offsets', function() {
    eq(nthArg(-1)('foo', 'bar'), 'bar')
    eq(nthArg(-2)('foo', 'bar'), 'foo')
    eq(nthArg(-3)('foo', 'bar'), undefined)
  })

  it('returns a function with length n + 1 when n >= 0', function() {
    eq(nthArg(0).length, 1)
    eq(nthArg(1).length, 2)
    eq(nthArg(2).length, 3)
    eq(nthArg(3).length, 4)
  })

  it('returns a function with length 1 when n < 0', function() {
    eq(nthArg(-1).length, 1)
    eq(nthArg(-2).length, 1)
    eq(nthArg(-3).length, 1)
  })

  it('returns a curried function', function() {
    eq(nthArg(1)('foo', 'bar'), nthArg(1)('foo')('bar'))
    eq(nthArg(2)('foo', 'bar', 'baz'), nthArg(2)('foo')('bar')('baz'))
  })
})
