const not = require('../../src/deps/conditional/not')
const always = require('../../src/deps/fp/always')

// describe('not', function() {
//   it('reverses argument', function() {
//     expect(not(false)).toBe(true)
//     expect(not(1)).toBe(false)
//     expect(not('')).toBe(true)
//   })
// })
test('not', () => {
  expect(not(always(false))(false)).toBe(true)
  expect(not(always(true))(true)).toBe(false)
})
