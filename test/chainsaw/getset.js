var test = require('ava')
var chainsaw = require('../../src/deps/chainsaw')

test('getset', t => {
  t.plan(4)
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
      t.true(times == 3)
    })
  })

  var times = 0
  ch
    .get(x => {
      t.true(x == 0)
      times++
    })
    .set(10)
    .get(x => {
      t.true(x == 10)
      times++
    })
    .set(20)
    .get(x => {
      t.true(x == 20)
      times++
    })
})
