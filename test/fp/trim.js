var trim = require('../../src/deps/string/trim')

var eq = (x, y) => expect(x).toEqual(y)

describe('trim', function() {
  var test = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFFHello, World!\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'

  it('trims a string', function() {
    eq(trim('   xyz  '), 'xyz')
  })

  it('trims all ES5 whitespace', function() {
    eq(trim(test), 'Hello, World!')
    eq(trim(test).length, 13)
  })

  it('does not trim the zero-width space', function() {
    eq(trim('\u200b'), '\u200b')
    eq(trim('\u200b').length, 1)
  })

  if (typeof String.prototype.trim !== 'function') {
    it('falls back to a shim if String.prototype.trim is not present', function() {
      eq(trim('   xyz  '), 'xyz')
      eq(trim(test), 'Hello, World!')
      eq(trim(test).length, 13)
      eq(trim('\u200b'), '\u200b')
      eq(trim('\u200b').length, 1)
    })
  }
})
