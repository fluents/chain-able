const assert = require('assert')
const isFunction = require('../../src/deps/is/function')
const pipe = require('../../src/deps/fp/pipeTwo')
const pipeAll = require('../../src/deps/fp/pipe')

describe('pipe', function() {
  it('is in correct order', function() {
    function x(val) {
      return val + 'x'
    }
    function y(val) {
      return val + 'y'
    }
    function z(val) {
      return val + 'z'
    }

    expect(pipeAll(x, y, z)('w')).toBe('wxyz')
  })
  it('is a variadic function', function() {
    expect(isFunction(pipe)).toBe(true)
    expect(isFunction(pipeAll)).toBe(true)

    // is a smaller version just 2 args
    // expect(pipe.length).toBe(0)
  })

  it('passes context to functions', function() {
    function x(val) {
      return this.x * val
    }
    function y(val) {
      return this.y * val
    }
    function z(val) {
      return this.z * val
    }
    var context = {
      a: pipe(pipe(x, y), z),
      x: 4,
      y: 2,
      z: 1,
    }
    expect(context.a(5)).toBe(40)
  })

  it.skip('throws if given no arguments', function() {
    assert.throws(
      function() { pipe() },
      function(err) {
        return err.constructor === Error &&
               err.message === 'pipe requires at least one argument'
      }
    )
  })

  it('can be applied to one argument, (with 2 fns)', function() {
    var f = function(a, b, c) { return [a, b, c] }
    var g = pipe(f, x => x)
    // expect(g.length).toEqual(3)
    expect(g(1, 2, 3)).toEqual([1, 2, 3])
  })
})
