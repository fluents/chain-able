var chainsaw = require('../../src/deps/chainsaw')

test('down', done => {
  expect.assertions(1)

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
      done.fail('raise didn\'t skip over this do block')
    })
    .catch(err => {
      expect(err == 'pow').toBe(true)
    })
    .do(() => {})
})
