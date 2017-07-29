const equals = require('../../src/deps/fp/equals')
const where = require('../../src/deps/fp/where')

const eq = (x, y) => expect(x).toEqual(y)

describe('where', function() {
  it('returns true if the test object satisfies the spec', function() {
    var spec = {x: equals(1), y: equals(2)}
    var test1 = {x: 0, y: 200}
    var test2 = {x: 0, y: 10}
    var test3 = {x: 1, y: 101}
    var test4 = {x: 1, y: 2}
    eq(where(spec, test1), false)
    eq(where(spec, test2), false)
    eq(where(spec, test3), false)
    eq(where(spec, test4), true)
  })

  it('does not need the spec and the test object to have the same interface (the test object will have a superset of the specs properties)', function() {
    var spec = {x: equals(100)}
    var test1 = {x: 20, y: 100, z: 100}
    var test2 = {w: 1, x: 100, y: 100, z: 100}

    eq(where(spec, test1), false)
    eq(where(spec, test2), true)
  })

  it('matches specs that have undefined properties', function() {
    var spec = {x: equals(undefined)}
    var test1 = {}
    var test2 = {x: null}
    var test3 = {x: undefined}
    var test4 = {x: 1}
    eq(where(spec, test1), true)
    eq(where(spec, test2), false)
    eq(where(spec, test3), true)
    eq(where(spec, test4), false)
  })

  it('is curried', function() {
    var predicate = where({x: equals(1), y: equals(2)})
    eq(predicate({x: 1, y: 2, z: 3}), true)
    eq(predicate({x: 3, y: 2, z: 1}), false)
  })

  it('is true for an empty spec', function() {
    eq(where({}, {a: 1}), true)
  })

  it('matches inherited properties', function() {
    var spec = {
      toString: equals(Object.prototype.toString),
      valueOf: equals(Object.prototype.valueOf),
    }
    eq(where(spec, {}), true)
  })

  it('does not match inherited spec', function() {
    function Spec() { this.y = equals(6) }
    Spec.prototype.x = equals(5)
    var spec = new Spec()

    eq(where(spec, {y: 6}), true)
    eq(where(spec, {x: 5}), false)
  })
})
