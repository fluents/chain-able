var {traverse, deepEqual} = require('./')
var util = require('util')

test('circular', () => {
  expect.assertions(1)

  var obj = {x: 3}
  obj.y = obj
  traverse(obj).forEach(function(x) {
    if (this.path.join('') == 'y') {
      expect(util.inspect(this.circular.node) == util.inspect(obj)).toBe(true)
    }
  })
})

test('deepCirc', () => {
  expect.assertions(2)
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj

  var times = 0
  traverse(obj).forEach(function(x) {
    if (this.circular) {
      expect(this.circular.path).toEqual([])
      expect(deepEqual(this.path, ['y', 2], true)).toBe(true)
    }
  })
})

test('doubleCirc', () => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var circs = []
  traverse(obj).forEach(function(x) {
    if (this.circular) {
      circs.push({circ: this.circular, self: this, node: x})
    }
  })

  const de = (a, b) => expect(deepEqual(a, b, true)).toBe(true)
  de(circs[0].self.path, ['x', 3, 2])
  de(circs[0].circ.path, [])

  de(circs[1].self.path, ['y', 2])
  de(circs[1].circ.path, [])

  de(circs.length, 2)
})

test('circDubForEach', () => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  traverse(obj).forEach(function(x) {
    if (this.circular) this.update('...')
  })

  expect(obj).toEqual({x: [1, 2, 3, [4, 5, '...']], y: [4, 5, '...']})
})

test('circDubMap', () => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var c = traverse(obj).map(function(x) {
    if (this.circular) {
      this.update('...')
    }
  })

  expect(c).toEqual({x: [1, 2, 3, [4, 5, '...']], y: [4, 5, '...']})
})

test('circClone', () => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var clone = traverse.clone(obj)
  expect(obj !== clone).toBeTruthy()

  expect(clone.y[2] === clone).toBeTruthy()
  expect(clone.y[2] !== obj).toBeTruthy()
  expect(clone.x[3][2] === clone).toBeTruthy()
  expect(clone.x[3][2] !== obj).toBeTruthy()
  expect(clone.x.slice(0, 3)).toEqual([1, 2, 3])
  expect(clone.y.slice(0, 2)).toEqual([4, 5])
})

test('circMapScrub', () => {
  var obj = {a: 1, b: 2}
  obj.c = obj

  var scrubbed = traverse(obj).map(function(node) {
    if (this.circular) this.remove()
  })
  expect(Object.keys(scrubbed).sort()).toEqual(['a', 'b'])
  expect(deepEqual(scrubbed, {a: 1, b: 2}, true)).toBeTruthy()

  expect(deepEqual(obj.c, obj, true)).toBeTruthy()
})
