const replace = require('../../src/deps/fp/replace')

test('replaces substrings of the input string', () => {
  expect(replace('1', 'one', '1 two three')).toEqual('one two three')
})

test('replaces regex matches of the input string', () => {
  expect(replace(/\d+/g, 'num', '1 2 three')).toEqual('num num three')
})

test('is curried up to 3 arguments', () => {
  expect(replace('').constructor, Function)
  expect(replace('', '').constructor, Function)

  var replaceSemicolon = replace(';')
  var removeSemicolon = replaceSemicolon('')
  expect(removeSemicolon('return 42;')).toEqual('return 42')
})
