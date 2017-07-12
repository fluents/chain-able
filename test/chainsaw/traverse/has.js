var traverse = require('./')

test('has', () => {
  var obj = {a: 2, b: [4, 5, {c: 6}]}

  expect(traverse(obj).has(['b', 2, 'c'])).toEqual(true)
  expect(traverse(obj).has(['b', 2, 'c', 0])).toEqual(false)
  expect(traverse(obj).has(['b', 2, 'd'])).toEqual(false)
  expect(traverse(obj).has([])).toEqual(true)
  expect(traverse(obj).has(['a'])).toEqual(true)
  expect(traverse(obj).has(['a', 2])).toEqual(false)
})
