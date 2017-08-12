const or = require('../../src/deps/conditional/or')
const always = require('../../src/deps/fp/always')
const isString = require('../../src/deps/is/string')
const isNumber = require('../../src/deps/is/number')

const eq = (x, y) => expect(x).toEqual(y)

const T = always(true)
const F = always(false)
describe('or', () => {
  it.only('works with izzes', () => {
    const num = or(isString, isNumber)(100)
    const str = or(isString, isNumber)('100')
    const bool = or(isString, isNumber)(true)
    expect(num).toBe(true)
    expect(str).toBe(true)
    expect(bool).toBe(false)
  })
  it('compares two values with js && - calling functions', () => {
    eq(or(T, T)(), true)
    eq(or(T, F)(), true)
    eq(or(F, T)(), true)
    eq(or(F, F)(), false)
  })

  it('is curried', () => {
    eq(or(F)(F)(true), false)
    eq(or(F)(T)(true), true)
  })
})
// describe('or', () => {
//   it('compares two values with js &&', function() {
//     eq(or(true, true), true)
//     eq(or(true, false), true)
//     eq(or(false, true), true)
//     eq(or(false, false), false)
//   })
//
//   it('is curried', function() {
//     eq(or(false)(false), false)
//     eq(or(false)(true), true)
//   })
// })
