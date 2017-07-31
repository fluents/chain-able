const toPairs = require('../../src/deps/cast/toPairs')

const eq = (x, y, msg) => expect(x).toEqual(y)

describe('toPairs', function() {
  it('converts an object into an array of two-element [key, value] arrays', function() {
    eq(toPairs({a: 1, b: 2, c: 3}), [['a', 1], ['b', 2], ['c', 3]])
  })

  it('only iterates the object\'s own properties', function() {
    var F = function() {
      this.x = 1
      this.y = 2
    }
    F.prototype.protoProp = 'you can\'t see me'
    var f = new F()
    eq(toPairs(f), [['x', 1], ['y', 2]])
  })
})
