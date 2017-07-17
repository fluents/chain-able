var curryN = require('../../src/deps/fp/curry')

describe('curryN', function() {
  function source(a, b, c, d) {
    void d
    return a * b * c
  }
  it('accepts an arity', function() {
    var curried = curryN(3, source)
    expect(curried(1)(2)(3)).toEqual(6)
    expect(curried(1, 2)(3)).toEqual(6)
    expect(curried(1)(2, 3)).toEqual(6)
    expect(curried(1, 2, 3)).toEqual(6)
  })

  it.skip('can be partially applied', function() {
    var curry3 = curryN(3)
    var curried = curry3(source)
    expect(curried.length, 3)
    expect(curried(1)(2)(3)).toEqual(6)
    expect(curried(1, 2)(3)).toEqual(6)
    expect(curried(1)(2, 3)).toEqual(6)
    expect(curried(1, 2, 3)).toEqual(6)
  })

  it('preserves context', function() {
    var ctx = {x: 10}
    var f = function(a, b) {
      return a + b * this.x
    }
    var g = curryN(2, f)

    expect(g.call(ctx, 2, 4)).toEqual(42)
    expect(g.call(ctx, 2).call(ctx, 4)).toEqual(42)
  })

  it('supports R.__ placeholder', function() {
    var f = function() {
      return Array.from(arguments)
    }
    var g = curryN(3, f)
    var _ = '_' // R.__

    expect(g(1)(2)(3)).toEqual([1, 2, 3])
    expect(g(1)(2, 3)).toEqual([1, 2, 3])
    expect(g(1, 2)(3)).toEqual([1, 2, 3])
    expect(g(1, 2, 3)).toEqual([1, 2, 3])

    expect(g(_, 2, 3)(1)).toEqual([1, 2, 3])
    expect(g(1, _, 3)(2)).toEqual([1, 2, 3])
    expect(g(1, 2, _)(3)).toEqual([1, 2, 3])

    expect(g(1, _, _)(2)(3)).toEqual([1, 2, 3])
    expect(g(_, 2, _)(1)(3)).toEqual([1, 2, 3])
    expect(g(_, _, 3)(1)(2)).toEqual([1, 2, 3])

    expect(g(1, _, _)(2, 3)).toEqual([1, 2, 3])
    expect(g(_, 2, _)(1, 3)).toEqual([1, 2, 3])
    expect(g(_, _, 3)(1, 2)).toEqual([1, 2, 3])

    expect(g(1, _, _)(_, 3)(2)).toEqual([1, 2, 3])
    expect(g(_, 2, _)(_, 3)(1)).toEqual([1, 2, 3])
    expect(g(_, _, 3)(_, 2)(1)).toEqual([1, 2, 3])

    expect(g(_, _, _)(_, _)(_)(1, 2, 3)).toEqual([1, 2, 3])
    expect(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3)).toEqual([1, 2, 3])
  })

  it('supports @@functional/placeholder', function() {
    var f = function() {
      return Array.from(arguments)
    }
    var g = curryN(3, f)
    var _ = '_' //{'@@functional/placeholder': true, 'x': Math.random()}

    expect(g(1)(2)(3)).toEqual([1, 2, 3])
    expect(g(1)(2, 3)).toEqual([1, 2, 3])
    expect(g(1, 2)(3)).toEqual([1, 2, 3])
    expect(g(1, 2, 3)).toEqual([1, 2, 3])

    expect(g(_, 2, 3)(1)).toEqual([1, 2, 3])
    expect(g(1, _, 3)(2)).toEqual([1, 2, 3])
    expect(g(1, 2, _)(3)).toEqual([1, 2, 3])

    expect(g(1, _, _)(2)(3)).toEqual([1, 2, 3])
    expect(g(_, 2, _)(1)(3)).toEqual([1, 2, 3])
    expect(g(_, _, 3)(1)(2)).toEqual([1, 2, 3])

    expect(g(1, _, _)(2, 3)).toEqual([1, 2, 3])
    expect(g(_, 2, _)(1, 3)).toEqual([1, 2, 3])
    expect(g(_, _, 3)(1, 2)).toEqual([1, 2, 3])

    expect(g(1, _, _)(_, 3)(2)).toEqual([1, 2, 3])
    expect(g(_, 2, _)(_, 3)(1)).toEqual([1, 2, 3])
    expect(g(_, _, 3)(_, 2)(1)).toEqual([1, 2, 3])

    expect(g(_, _, _)(_, _)(_)(1, 2, 3)).toEqual([1, 2, 3])
    expect(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3)).toEqual([1, 2, 3])
  })

  it('forwards extra arguments', function() {
    var f = function() {
      return Array.from(arguments)
    }
    var g = curryN(3, f)

    expect(g(1, 2, 3)).toEqual([1, 2, 3])
    expect(g(1, 2, 3, 4)).toEqual([1, 2, 3, 4])
    expect(g(1, 2)(3, 4)).toEqual([1, 2, 3, 4])
    expect(g(1)(2, 3, 4)).toEqual([1, 2, 3, 4])
    expect(g(1)(2)(3, 4)).toEqual([1, 2, 3, 4])
  })
})
