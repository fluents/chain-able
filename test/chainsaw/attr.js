var chainsaw = require('../../dist/deps/chainsaw')

test('attr', () => {
  expect.assertions(4)

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
        expect(xy).toEqual(['x', 'y'])
      },
    }
  })
  expect(ch.h).toBeTruthy()
  expect(ch.h.x).toBeTruthy()
  expect(ch.h.y).toBeTruthy()

  ch.h.x().h.y()
})
