var traverse = require('./index.js')

test('leaves test', () => {
  var acc = []
  traverse({
    a: [1, 2, 3],
    b: 4,
    c: [5, 6],
    d: {e: [7, 8], f: 9},
  }).forEach(function(x) {
    if (this.isLeaf) acc.push(x)
  })

  expect(acc.join(' ')).toEqual('1 2 3 4 5 6 7 8 9')
})
