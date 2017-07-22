const flip2 = require('../../src/deps/fp/flip2')

function threeArgs(one, two, three) {
  return [one, two, three]
}

test('returns a function which inverts the first two arguments to the supplied function', function() {
  const f = function(a, b, c) { return a + ' ' + b + ' ' + c }
  const g = flip2(f)
  expect(f('a', 'b', 'c')).toEqual('a b c')
  expect(g('a', 'b', 'c')).toEqual('b a c')
})
test('returns a curried function', function() {
  const f = function(a, b, c) { return a + ' ' + b + ' ' + c }
  const g = flip2(f)('a')
  expect(g('b', 'c')).toEqual('b a c')
})
test('flip2 fosho', function() {
  const oneTwoThree = function($1, $2, $3) {
    const flipped = flip2(threeArgs)
    const actual = flipped($1, $2, $3)
    const usual = threeArgs($1, $2, $3)

    // flipped 1 & 2 (same as .slice.reverse)
    expect(actual[0]).toEqual(usual[1])
    expect(actual[1]).toEqual(usual[0])

    // only flips 2 <- disabled this
    // expect(actual[2]).toEqual(usual[2])
  }

  oneTwoThree(1, 2, 3)
})
