var test = require('ava')
var chainsaw = require('../../src/deps/chainsaw')

test('nest wait', t => {
  t.plan(4)

  var ch = (function() {
    var vars = {}
    return chainsaw(function(saw) {
      this.do = function(cb) {
        saw.nest(cb, vars)
      }

      this.wait = function(n) {
        setTimeout(() => {
          saw.next()
        }, n)
      }
    })
  })()

  var order = []

  var times = {}

  ch
    .do(function(vars) {
      vars.x = 'y'
      order.push(1)

      this.do(vs => {
        order.push(2)
        vs.x = 'x'
        times.x = Date.now()
      })
        .wait(50)
        .do(vs => {
          order.push(3)
          vs.z = 'z'

          times.z = Date.now()
          var dt = times.z - times.x
          t.truthy(dt >= 50 && dt < 75)
        })
    })
    .do(vars => {
      vars.y = 'y'
      order.push(4)

      times.y = Date.now()
    })
    .wait(100)
    .do(vars => {
      t.deepEqual(order, [1, 2, 3, 4])
      t.deepEqual(vars, {x: 'x', y: 'y', z: 'z'})

      times.end = Date.now()
      var dt = times.end - times.y
      t.truthy(dt >= 100 && dt < 125)

      t.pass()
    })
})
