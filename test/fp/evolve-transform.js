const evolve = require('../../src/deps/fp/evolve')
const add = require('../../src/deps/math/add')

const eq = (x, y, msg) => expect(x).toEqual(y)

describe('evolve', function() {
  it('creates a new object by evolving the `object` according to the `transformation` functions', function() {
    var transf   = {elapsed: add(1), remaining: add(-1)}
    var object   = {name: 'Tomato', elapsed: 100, remaining: 1400}
    var expected = {name: 'Tomato', elapsed: 101, remaining: 1399}
    eq(evolve(transf, object), expected)
  })

  it('does not invoke function if object does not contain the key', function() {
    var transf   = {n: add(1), m: add(1)}
    var object   = {m: 3}
    var expected = {m: 4}
    eq(evolve(transf, object), expected)
  })

  it('is not destructive', function() {
    var transf   = {elapsed: add(1), remaining: add(-1)}
    var object   = {name: 'Tomato', elapsed: 100, remaining: 1400}
    var expected = {name: 'Tomato', elapsed: 100, remaining: 1400}
    evolve(transf, object)
    eq(object, expected)
  })

  it('is recursive', function() {
    var transf   = {nested: {second: add(-1), third: add(1)}}
    var object   = {first: 1, nested: {second: 2, third: 3}}
    var expected = {first: 1, nested: {second: 1, third: 4}}
    eq(evolve(transf, object), expected)
  })

  it('is curried', function() {
    var tick = evolve({elapsed: add(1), remaining: add(-1)})
    var object   = {name: 'Tomato', elapsed: 100, remaining: 1400}
    var expected = {name: 'Tomato', elapsed: 101, remaining: 1399}
    eq(tick(object), expected)
  })

  it('ignores primitive value transformations', function() {
    var transf   = {n: 2, m: 'foo'}
    var object   = {n: 0, m: 1}
    var expected = {n: 0, m: 1}
    eq(evolve(transf, object), expected)
  })

  it('ignores null transformations', function() {
    var transf   = {n: null}
    var object   = {n: 0}
    var expected = {n: 0}
    eq(evolve(transf, object), expected)
  })
})
