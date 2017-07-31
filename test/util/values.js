const valuesIn = require('../../src/deps/util/valuesIn')
const values = require('../../src/deps/util/values')
const keys = require('../../src/deps/util/keys')
const repeat = require('../../src/deps/fp/repeat')
const map = require('../../src/deps/loop/fantasy/_map')
// const indexOf = require('../../src/deps/fp/indexOf')

const indexOf = (needle, haystack) => haystack.indexOf(needle)

describe('valuesIn', function() {
  var obj = {
    a: 100,
    b: [1, 2, 3],
    c: {x: 200, y: 300},
    d: 'D',
    e: null,
    f: undefined,
  }
  function C() {
    this.a = 100
    this.b = 200
  }
  C.prototype.x = function() {
    return 'x'
  }
  C.prototype.y = 'y'
  var cobj = new C()

  it('returns an array of the given object\'s values', function() {
    var vs = valuesIn(obj)
    eq(vs.length, 6)
    eq(indexOf(100, vs) >= 0, true)
    eq(indexOf('D', vs) >= 0, true)
    eq(indexOf(null, vs) >= 0, true)
    eq(indexOf(undefined, vs) >= 0, true)
    eq(indexOf(obj.b, vs) >= 0, true)
    eq(indexOf(obj.c, vs) >= 0, true)
  })

  it('includes the given object\'s prototype properties', function() {
    var vs = valuesIn(cobj)
    eq(vs.length, 4)
    eq(indexOf(100, vs) >= 0, true)
    eq(indexOf(200, vs) >= 0, true)
    eq(indexOf(cobj.x, vs) >= 0, true)
    eq(indexOf('y', vs) >= 0, true)
  })

  it.skip('works for primitives', function() {
    var result = map(
      function(val) {
        return valuesIn(val)
      },
      [null, undefined, 55, '', true, false, NaN, Infinity, , []]
    )
    eq(result, repeat([], 10))
  })
})

describe('values', function() {
  var obj = {
    a: 100,
    b: [1, 2, 3],
    c: {x: 200, y: 300},
    d: 'D',
    e: null,
    f: undefined,
  }
  function C() {
    this.a = 100
    this.b = 200
  }
  C.prototype.x = function() {
    return 'x'
  }
  C.prototype.y = 'y'
  var cobj = new C()

  it('returns an array of the given object\'s values', function() {
    var vs = values(obj).sort()
    var ts = [[1, 2, 3], 100, 'D', {x: 200, y: 300}, null, undefined]
    eq(vs.length, ts.length)
    eq(vs[0], ts[0])
    eq(vs[1], ts[1])
    eq(vs[2], ts[2])
    eq(vs[3], ts[3])
    eq(vs[4], ts[4])
    eq(vs[5], ts[5])

    eq(
      values({
        hasOwnProperty: false,
      }),
      [false]
    )
  })

  it('does not include the given object\'s prototype properties', function() {
    eq(values(cobj), [100, 200])
  })

  it.skip('returns an empty object for primitives', function() {
    var result = map(
      function(val) {
        return keys(val)
      },
      [null, undefined, 55, '', true, false, NaN, Infinity, , []]
    )
    eq(result, repeat([], 10))
  })
})
