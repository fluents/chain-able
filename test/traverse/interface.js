var traverse = require('./')

test.skip('interface normal .forEach', () => {
  const arr = []
  traverse([1, 2, 3]).forEach(x => {
    arr.push(x)
  })
  expect(arr).toEqual([1, 2, 3])
})

test('interface map', () => {
  var obj = {a: [5, 6, 7], b: {c: [8]}}

  expect(
    traverse
      .paths(obj)
      .sort()
      .map(path => {
        return path.join('/')
      })
      .slice(1)
      .join(' ')
  ).toEqual('a a/0 a/1 a/2 b b/c b/c/0')

  expect(traverse.nodes(obj)).toEqual([
    {a: [5, 6, 7], b: {c: [8]}},
    [5, 6, 7],
    5,
    6,
    7,
    {c: [8]},
    [8],
    8,
  ])

  expect(
    traverse.map(obj, node => {
      if (typeof node === 'number') {
        return node + 1000
      }
      else if (Array.isArray(node)) {
        return node.join(' ')
      }
    })
  ).toEqual({a: '5 6 7', b: {c: '8'}})

  var nodes = 0
  traverse.forEach(obj, node => {
    nodes++
  })
  expect(nodes).toEqual(8)
})
