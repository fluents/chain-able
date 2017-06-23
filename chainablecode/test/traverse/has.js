var test = require('ava')
var traverse = require('./')

test('has', t => {
  var obj = {a: 2, b: [4, 5, {c: 6}]}

  t.deepEqual(traverse(obj).has(['b', 2, 'c']), true)
  t.deepEqual(traverse(obj).has(['b', 2, 'c', 0]), false)
  t.deepEqual(traverse(obj).has(['b', 2, 'd']), false)
  t.deepEqual(traverse(obj).has([]), true)
  t.deepEqual(traverse(obj).has(['a']), true)
  t.deepEqual(traverse(obj).has(['a', 2]), false)

  t.pass()
})
