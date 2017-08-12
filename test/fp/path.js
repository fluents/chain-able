var eq = (actual, expected) => expect(actual).toEqual(expected)
var path = require('../../src/deps/fp/path')

describe('path', function() {
  var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']}
  it('takes a path and an object and returns the value at the path or undefined', function() {
    var obj = {
      a: {
        b: {
          c: 100,
          d: 200,
        },
        e: {
          f: [100, 101, 102],
          g: 'G',
        },
        h: 'H',
      },
      i: 'I',
      j: ['J'],
    }
    eq(path(['a', 'b', 'c'], obj), 100)
    eq(path([], obj), obj)
    eq(path(['a', 'e', 'f', 1], obj), 101)
    eq(path(['j', 0], obj), 'J')
    eq(path(['j', 1], obj), undefined)
  })

  it('gets a deep property\'s value from objects', function() {
    eq(path(['a', 'b', 'c'], deepObject), 'c')
    eq(path(['a'], deepObject), deepObject.a)
  })

  it('returns undefined for items not found', function() {
    eq(path(['a', 'b', 'foo'], deepObject), undefined)
    eq(path(['bar'], deepObject), undefined)
    eq(path(['a', 'b'], {a: null}), undefined)
  })

  it('works with falsy items', function() {
    eq(path(['toString'], false), Boolean.prototype.toString)
  })

  it('is curried', function() {
    eq(path(['arrayVal', '0'])(deepObject), 'arr')
  })
})
