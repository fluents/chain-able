const escapeStringRegExp = require('../../src/deps/string/escapeRegExp')

test('excape string regexp', () => {
  const actual = escapeStringRegExp('\\ ^ $ * + ? . ( ) | { } [ ]')
  const escaped = '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]'
  expect(actual).toEqual(escaped)
})
