var traverse = require('./')

test('traverse an object with nested functions', () => {
  expect.assertions(1)

  function Cons(x) {
    expect(x).toEqual(10)
  }
  traverse(new Cons(10))
})
