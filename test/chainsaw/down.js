var test = require('ava')
var chainsaw = require('../../src/deps/chainsaw')

test('down', t => {
  t.plan(1)

  var error = null
  var s
  var ch = chainsaw(function(saw) {
    s = saw
    this.raise = function(err) {
      error = err
      saw.down('catch')
    }

    this.do = function(cb) {
      cb.call(this)
    }

    this.catch = function(cb) {
      if (error) {
        saw.nest(cb, error)
        error = null
      }
      else saw.next()
    }
  })

  ch
    .do(function() {
      this.raise('pow')
    })
    .do(() => {
      t.fail('raise didn\'t skip over this do block')
    })
    .catch(err => {
      t.true(err == 'pow')
    })
    .do(() => {
      t.pass()
    })
})
