const keysIn = require('../../src/deps/util/keysIn')
const keys = require('../../src/deps/util/keys')
const repeat = require('../../src/deps/fp/repeat')
const map = require('../../src/deps/loop/fantasy/_map')

const eq = (x, y, msg) => expect(x).toEqual(y)
// eslint-disable-next-line
const PRIMITIVES_LIST = [null, undefined, 55, '', true, false, NaN, Infinity, , []]

var obj = {
  a: 100,
  b: [1, 2, 3],
  c: {x: 200, y: 300},
  d: 'D',
  e: null,
  f: undefined,
}

function C() { this.a = 100; this.b = 200 }
C.prototype.x = function() { return 'x' }
C.prototype.y = 'y'
var cobj = new C()

describe('keysIn', function() {
  it('returns an array of the given object\'s keys', function() {
    eq(keysIn(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f'])
  })

  it('includes the given object\'s prototype properties', function() {
    eq(keysIn(cobj).sort(), ['a', 'b', 'x', 'y'])
  })
  it('ignores proto with guard', function() {
    eq(keysIn(cobj, true).sort(), ['a', 'b'])
  })

  it.skip('works for primitives', function() {
    var result = map(function(val) {
      return keysIn(val)
    }, PRIMITIVES_LIST)
    eq(result, repeat([], 10))
  })
})


describe('keys', function() {
  it('returns an array of the given object\'s own keys', function() {
    eq(keys(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f'])
  })

  it('works with hasOwnProperty override', function() {
    eq(keys({
      hasOwnProperty: false,
    }), ['hasOwnProperty'])
  })

  it.skip('works for primitives', function() {
    var result = map(function(val) {
      return keys(val)
    }, PRIMITIVES_LIST)
    eq(result, repeat([], 10))
  })

  it('does not include the given object\'s prototype properties', function() {
    eq(keys(cobj).sort(), ['a', 'b'])
  })
})
