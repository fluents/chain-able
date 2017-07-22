const flip = require('../../src/deps/fp/flip')

function threeArgs(one, two, three) {
  return [one, two, three]
}

test('flips fosho', function() {
  const oneTwoThree = function($1, $2, $3) {
    const flipped = flip(threeArgs)
    const actual = flipped($1, $2, $3)
    const usual = threeArgs($1, $2, $3)

    // flipped 1 & 2 (same as .slice.reverse)
    // expect(actual[0]).toEqual(usual[1])
    // expect(actual[1]).toEqual(usual[2])

    // only flips 2 <- disabled this
    // expect(actual[2]).toEqual(usual[2])
    expect(actual.reverse()).toEqual(usual)
  }

  oneTwoThree(1, 2, 3)
})
