var test = require('ava')
var chainsaw = require('../../src/deps/chainsaw')

test('attr', t => {
  t.plan(4)

  var xy = []
  var ch = chainsaw(function(saw) {
    this.h = {
      x() {
        xy.push('x')
        saw.next()
      },
      y() {
        xy.push('y')
        saw.next()
        t.deepEqual(xy, ['x', 'y'])
      },
    }
  })
  t.truthy(ch.h)
  t.truthy(ch.h.x)
  t.truthy(ch.h.y)

  ch.h.x().h.y()
})
