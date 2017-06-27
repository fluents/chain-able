var traverse = require('./')

test('traverse an Error', () => {
  var obj = new Error('test')
  var results = traverse(obj).map(node => {})
  expect(results).toEqual({message: 'test'})
})
