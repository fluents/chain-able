var chainsaw = require('../../src/deps/chainsaw')

test('getset', () => {
  expect.assertions(4)
  var ch = chainsaw(function(saw) {
    var num = 0

    this.get = function(cb) {
      cb(num)
      saw.next()
    }

    this.set = function(n) {
      num = n
      saw.next()
    }

    saw.on('end', () => {
      expect(times == 3).toBe(true)
    })
  })

  var times = 0
  ch
    .get(x => {
      expect(x == 0).toBe(true)
      times++
    })
    .set(10)
    .get(x => {
      expect(x == 10).toBe(true)
      times++
    })
    .set(20)
    .get(x => {
      expect(x == 20).toBe(true)
      times++
    })
})
