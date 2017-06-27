var chainsaw = require('../../src/deps/chainsaw')

test('builder', () => {
  expect.assertions(4)

  var cx = chainsaw(function(saw) {
    this.x = function() {}
  })
  expect(cx.x).toBeTruthy()

  var cy = chainsaw(saw => {
    return {y() {}}
  })
  expect(cy.y).toBeTruthy()

  var cz = chainsaw(saw => {
    return {
      z(cb) {
        saw.nest(cb)
      },
    }
  })
  expect(cz.z).toBeTruthy()

  cz.z(function() {
    expect(this.z).toBeTruthy()
  })
})
