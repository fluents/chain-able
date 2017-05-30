var test = require('ava')
var traverse = require('./')

test('traverse an Error', t => {
  var obj = new Error('test')
  var results = traverse(obj).map(node => {})
  t.deepEqual(results, {message: 'test'})

  t.pass()
})
