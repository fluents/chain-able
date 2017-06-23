var test = require('ava')
var chainsaw = require('../../src/deps/chainsaw')

test('builder', t => {
  t.plan(4)

  var cx = chainsaw(function(saw) {
    this.x = function() {}
  })
  t.truthy(cx.x)

  var cy = chainsaw(saw => {
    return {y() {}}
  })
  t.truthy(cy.y)

  var cz = chainsaw(saw => {
    return {
      z(cb) {
        saw.nest(cb)
      },
    }
  })
  t.truthy(cz.z)

  cz.z(function() {
    t.truthy(this.z)
  })
})
