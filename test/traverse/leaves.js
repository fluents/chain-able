var test = require('ava')
var traverse = require('./index.js')

test('leaves test', t => {
  var acc = []
  traverse({
    a: [1, 2, 3],
    b: 4,
    c: [5, 6],
    d: {e: [7, 8], f: 9},
  }).forEach(function(x) {
    if (this.isLeaf) acc.push(x)
  })

  t.deepEqual(
    acc.join(' '),
    '1 2 3 4 5 6 7 8 9',
    'Traversal in the right(?) order'
  )

  t.pass()
})
