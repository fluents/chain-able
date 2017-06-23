var test = require('ava')
var {traverse, deepEqual} = require('./')
var util = require('util')

test('circular', t => {
  t.plan(1)

  var obj = {x: 3}
  obj.y = obj
  traverse(obj).forEach(function(x) {
    if (this.path.join('') == 'y') {
      t.true(util.inspect(this.circular.node) == util.inspect(obj))
    }
  })
})

test('deepCirc', t => {
  t.plan(2)
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj

  var times = 0
  traverse(obj).forEach(function(x) {
    if (this.circular) {
      t.deepEqual(this.circular.path, [])
      t.true(deepEqual(this.path, ['y', 2], true))
    }
  })
})

test('doubleCirc', t => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var circs = []
  traverse(obj).forEach(function(x) {
    if (this.circular) {
      circs.push({circ: this.circular, self: this, node: x})
    }
  })

  const de = (a, b) => t.true(deepEqual(a, b, true))
  de(circs[0].self.path, ['x', 3, 2])
  de(circs[0].circ.path, [])

  de(circs[1].self.path, ['y', 2])
  de(circs[1].circ.path, [])

  de(circs.length, 2)
  t.pass()
})

test('circDubForEach', t => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  traverse(obj).forEach(function(x) {
    if (this.circular) this.update('...')
  })

  t.deepEqual(obj, {x: [1, 2, 3, [4, 5, '...']], y: [4, 5, '...']})
  t.pass()
})

test('circDubMap', t => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var c = traverse(obj).map(function(x) {
    if (this.circular) {
      this.update('...')
    }
  })

  t.deepEqual(c, {x: [1, 2, 3, [4, 5, '...']], y: [4, 5, '...']})
  t.pass()
})

test('circClone', t => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var clone = traverse.clone(obj)
  t.truthy(obj !== clone)

  t.truthy(clone.y[2] === clone)
  t.truthy(clone.y[2] !== obj)
  t.truthy(clone.x[3][2] === clone)
  t.truthy(clone.x[3][2] !== obj)
  t.deepEqual(clone.x.slice(0, 3), [1, 2, 3])
  t.deepEqual(clone.y.slice(0, 2), [4, 5])
  t.pass()
})

test('circMapScrub', t => {
  var obj = {a: 1, b: 2}
  obj.c = obj

  var scrubbed = traverse(obj).map(function(node) {
    if (this.circular) this.remove()
  })
  t.deepEqual(Object.keys(scrubbed).sort(), ['a', 'b'])
  t.truthy(deepEqual(scrubbed, {a: 1, b: 2}, true))

  t.truthy(deepEqual(obj.c, obj, true))
  t.pass()
})
