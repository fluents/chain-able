var chainsaw = require('../../src/deps/chainsaw')

test('nest', () => {
  expect.assertions(2)

  var ch = (function() {
    var vars = {}
    return chainsaw(function(saw) {
      this.do = function(cb) {
        saw.nest(cb, vars)
      }
    })
  })()

  var order = []

  ch
    .do(function(vars) {
      vars.x = 'y'
      order.push(1)

      this.do(vs => {
        order.push(2)
        vs.x = 'x'
      }).do(vs => {
        order.push(3)
        vs.z = 'z'
      })
    })
    .do(vars => {
      vars.y = 'y'
      order.push(4)
    })
    .do(vars => {
    expect(order).toEqual([1, 2, 3, 4])
    expect(vars).toEqual({x: 'x', y: 'y', z: 'z'})
  })
})
