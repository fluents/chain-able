var test = require('ava')
var traverse = require('./')

test('subexpr', t => {
  var obj = ['a', 4, 'b', 5, 'c', 6]
  var r = traverse(obj).map(function(x) {
    if (typeof x === 'number') {
      this.update([x - 0.1, x, x + 0.1], true)
    }
  })

  t.deepEqual(obj, ['a', 4, 'b', 5, 'c', 6])
  t.deepEqual(r, ['a', [3.9, 4, 4.1], 'b', [4.9, 5, 5.1], 'c', [5.9, 6, 6.1]])
  t.pass()
})

test('block', t => {
  var obj = [[1], [2], [3]]
  var r = traverse(obj).map(function(x) {
    if (Array.isArray(x) && !this.isRoot) {
      if (x[0] === 5) this.block()
      else this.update([[x[0] + 1]])
    }
  })

  t.deepEqual(r, [[[[[[5]]]]], [[[[5]]]], [[[5]]]])
  t.pass()
})
