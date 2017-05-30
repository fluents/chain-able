var test = require('ava')
var traverse = require('./')

test('interface map', t => {
  var obj = {a: [5, 6, 7], b: {c: [8]}}

  t.deepEqual(
    traverse
      .paths(obj)
      .sort()
      .map(path => {
        return path.join('/')
      })
      .slice(1)
      .join(' '),
    'a a/0 a/1 a/2 b b/c b/c/0'
  )

  t.deepEqual(traverse.nodes(obj), [
    {a: [5, 6, 7], b: {c: [8]}},
    [5, 6, 7],
    5,
    6,
    7,
    {c: [8]},
    [8],
    8,
  ])

  t.deepEqual(
    traverse.map(obj, node => {
      if (typeof node === 'number') {
        return node + 1000
      }
      else if (Array.isArray(node)) {
        return node.join(' ')
      }
    }),
    {a: '5 6 7', b: {c: '8'}}
  )

  var nodes = 0
  traverse.forEach(obj, node => {
    nodes++
  })
  t.deepEqual(nodes, 8)

  t.pass()
})
