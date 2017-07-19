const escapeStringRegExp = require('../../src/deps/matcher/escape-string-regex')

test('excape string regexp', () => {
  const actual = escapeStringRegExp('\\ ^ $ * + ? . ( ) | { } [ ]')
  const escaped = '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]'
  expect(actual).toEqual(escaped)
})
