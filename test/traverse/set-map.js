var test = require('ava')
var log = require('fliplog')
var traverse = require('./')

test.failing('Map can iterate in order with leaves', t => {
  var acc = []

  const map = new Map()
  map.set('a', {a: [1, 2, 3]})
  map.set('b', 4)
  map.set('c', [5, 6])
  map.set('d', {e: [7, 8], f: 9})
  const obj = map

  traverse({obj}).forEach(function(x) {
    if (this.isLeaf) acc.push(x)
  })

  t.deepEqual(
    acc.join(' '),
    '1 2 3 4 5 6 7 8 9',
    'Traversal in the right(?) order'
  )
})

test.failing('Set can iterate in order', t => {
  var acc = []

  const set = new Set()
  set.add({a: [1, 2, 3]})
  set.add([4])
  set.add([5, 6])
  set.add({e: [7, 8], f: 9})

  traverse(set).forEach(function(x) {
    if (this.isLeaf) acc.push(x)
  })

  t.deepEqual(
    acc.join(' '),
    '1 2 3 4 5 6 7 8 9',
    'Traversal in the right(?) order'
  )
})
