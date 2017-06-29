var traverse = require('./')

test('stop', () => {
  var visits = 0
  traverse('abcdefghij'.split('')).forEach(function(node) {
    if (typeof node === 'string') {
      visits++
      if (node === 'e') this.stop()
    }
  })

  expect(visits).toEqual(5)
})

test('stopMap', () => {
  var s = traverse('abcdefghij'.split(''))
    .map(function(node) {
      if (typeof node === 'string') {
        if (node === 'e') this.stop()
        return node.toUpperCase()
      }
    })
    .join('')

  expect(s).toEqual('ABCDEfghij')
})

test('stopReduce', () => {
  var obj = {
    a: [4, 5],
    b: [6, [7, 8, 9]],
  }
  var xs = traverse(obj).reduce(function(acc, node) {
    if (this.isLeaf) {
      if (node === 7) this.stop()
      else acc.push(node)
    }
    return acc
  }, [])

  expect(xs).toEqual([4, 5, 6])
})
