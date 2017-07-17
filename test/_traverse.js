// eslint-disable-next-line
'use strict'

const {EventEmitter} = require('events')
const log = require('fliplog')
const traverse = require('../src/deps/traverse')
const isArray = require('../src/deps/is/array')
const isObj = require('../src/deps/is/obj')

const {eq} = traverse
const deepEqual = eq

test('deepDates', () => {
  expect.assertions(2)

  expect(
    deepEqual(
      {d: new Date(0, 0, 0, 0), x: [1, 2, 3]},
      {d: new Date(0, 0, 0, 0), x: [1, 2, 3]}
    )
  ).toBeTruthy()

  const d0 = new Date()
  return new Promise(res => setTimeout(res, 5)).then(val => {
    expect(
      !deepEqual({d: d0, x: [1, 2, 3]}, {d: new Date(), x: [1, 2, 3]})
    ).toBeTruthy()
    return Promise.resolve()
  })
})

test.skip('deepCircular', () => {
  // return expect(true).toBe(true)
  var a = [1]
  a.push(a) // a = [ 1, *a ]

  var b = [1]
  b.push(a) // b = [ 1, [ 1, *a ] ]

  expect(!deepEqual(a, b, false)).toBeTruthy()

  var c = [1]
  c.push(c) // c = [ 1, *c ]
  expect(deepEqual(a, c)).toBeTruthy()

  var d = [1]
  d.push(a) // c = [ 1, [ 1, *d ] ]
  expect(deepEqual(b, d)).toBeTruthy()
})

test('deepInstances', () => {
  expect(!deepEqual([new Boolean(false)], [false])).toBeTruthy()

  expect(!deepEqual([new String('x')], ['x'])).toBeTruthy()

  expect(!deepEqual([new Number(4)], [4])).toBeTruthy()

  expect(deepEqual([new RegExp('x')], [/x/])).toBeTruthy()

  expect(!deepEqual([new RegExp(/./)], [/../])).toBeTruthy()

  expect(
    !deepEqual(
      [
        function(x) {
          return x * 2
        },
      ],
      [
        function(x) {
          return x * 2
        },
      ]
    )
  ).toBeTruthy()

  var f = function(x) {
    return x * 2
  }
  expect(deepEqual([f], [f])).toBeTruthy()
})

test('deepEqual', () => {
  expect(!deepEqual([1, 2, 3], {0: 1, 1: 2, 2: 3})).toBeTruthy()
})

test('falsy', () => {
  expect(!deepEqual([undefined], [null])).toBeTruthy()

  expect(!deepEqual([null], [undefined])).toBeTruthy()

  expect(
    !deepEqual(
      {a: 1, b: 2, c: [3, undefined, 5]},
      {a: 1, b: 2, c: [3, null, 5]}
    )
  ).toBeTruthy()

  expect(
    !deepEqual(
      {a: 1, b: 2, c: [3, undefined, 5]},
      {a: 1, b: 2, c: [3, null, 5]}
    )
  ).toBeTruthy()

  expect(
    !deepEqual(
      {a: 1, b: 2, c: [3, undefined, 5]},
      {a: 1, b: 2, c: [3, null, 5]}
    )
  ).toBeTruthy()
})

test.skip('deletedArrayEqual', () => {
  var xs = [1, 2, 3, 4]
  delete xs[2]

  var ys = Object.create(Array.prototype)
  ys[0] = 1
  ys[1] = 2
  ys[3] = 4
  ys = Array.from(ys)

  expect(deepEqual(xs, ys)).toBeTruthy()

  expect(!deepEqual(xs, [1, 2, undefined, 4])).toBeTruthy()

  // expect(!deepEqual(xs, [1, 2, null, 4])).toBeTruthy()
})

test('deletedObjectEqual', () => {
  var obj = {a: 1, b: 2, c: 3}
  delete obj.c

  expect(deepEqual(obj, {a: 1, b: 2})).toBeTruthy()

  expect(!deepEqual(obj, {a: 1, b: 2, c: undefined})).toBeTruthy()

  expect(!deepEqual(obj, {a: 1, b: 2, c: null})).toBeTruthy()
})

test('emptyKeyEqual', () => {
  expect(!deepEqual({a: 1}, {'a': 1, '': 55})).toBeTruthy()
})

test('deepArguments', () => {
  expect(
    !deepEqual(
      [4, 5, 6],
      (function() {
        return arguments
      })(4, 5, 6)
    )
  ).toBeTruthy()

  expect(
    deepEqual(
      (function() {
        return arguments
      })(4, 5, 6),
      (function() {
        return arguments
      })(4, 5, 6)
    )
  ).toBeTruthy()
})

test('deepUn', () => {
  expect(!deepEqual({a: 1, b: 2}, undefined)).toBeTruthy()
  expect(!deepEqual({a: 1, b: 2}, {})).toBeTruthy()
  expect(!deepEqual(undefined, {a: 1, b: 2})).toBeTruthy()
  expect(!deepEqual({}, {a: 1, b: 2})).toBeTruthy()
  expect(deepEqual(undefined, undefined)).toBeTruthy()
  expect(deepEqual(null, null)).toBeTruthy()
  expect(!deepEqual(undefined, null)).toBeTruthy()
})

test('deepLevels', () => {
  var xs = [1, 2, [3, 4, [5, 6]]]
  expect(!deepEqual(xs, [])).toBeTruthy()
})

test('number, string, Error, Promise', () => {
  const ErrorOne = new Error('1')
  expect(deepEqual(1, 1)).toBe(true)
  expect(deepEqual(1, 0)).toBe(false)
  expect(deepEqual('string', 'string')).toBe(true)
  expect(deepEqual('1', '1')).toBe(true)
  expect(deepEqual(ErrorOne, ErrorOne)).toBe(true)
  expect(deepEqual('1', 1)).toBe(false)
  expect(deepEqual(new Promise(r => r()), 'string')).toBe(false)
  expect(deepEqual(new Error(), '1')).toBe(false)
  // expect(deepEqual(new Promise(r => r()), new Error('2'))).toBe(false)
})

test('Error vs Error', () => {
  expect(deepEqual(new Error('1'), new Error('2'))).toBe(false)
})

test('null vs undefined', () => {
  expect(!deepEqual(null, undefined)).toBeTruthy()
  expect(!deepEqual(undefined, null)).toBeTruthy()
  expect(deepEqual(null, null)).toBeTruthy()
  expect(deepEqual(undefined, undefined)).toBeTruthy()
})
test('RegExp vs RegExp', () => {
  expect(deepEqual(new RegExp('.*'), new RegExp('.*'))).toBeTruthy()
})
test('RegExp vs RegExp !', () => {
  expect(!deepEqual(new RegExp('not-the-same'), new RegExp('.*'))).toBeTruthy()
})

test('Fn vs Fn', () => {
  const noop = function() {
    /* noop */
  }
  const noops = function() {
    /* noops */
  }
  noops.eh = true
  noop()
  noops()

  console.log('noop == noop')
  expect(deepEqual(noop, noop)).toBeTruthy()
  console.log('noop != noops')
  expect(!deepEqual(noop, noops)).toBeTruthy()
})
test('ObjKeys', () => {
  expect(
    !deepEqual({one: true, two: true}, {one: true, three: false})
  ).toBeTruthy()
})

test.skip('edge', () => {
  // '[Number(4)], [4]'
  expect(deepEqual([new Number(4)], [4])).toBe(true)

  // 'Number(4), 4'
  expect(deepEqual(new Number(4), 4)).toBe(true)

  // '4, Number(4)'
  expect(deepEqual(4, new Number(4))).toBe(true)

  // '[4], [Number(4)]'
  expect(deepEqual([4], [new Number(4)])).toBe(true)

  // 'RegExp(x), /x/',
  expect(deepEqual([new RegExp('x')], [/x/])).toBe(true)

  // '! RegExp(/./), /../'
  expect(deepEqual([new RegExp(/./)], [/../])).toBe(true)

  expect(deepEqual(1, 1)).toBe(true)
  expect(deepEqual(1, 0)).toBe(true)
  expect(deepEqual('string', 'string')).toBe(true)
  expect(deepEqual('string', 'str')).toBe(true)
  expect(deepEqual('stringy', new String('stringy'))).toBe(true)
  expect(deepEqual('1', '1')).toBe(true)

  const ErrorOne = new Error('1')
  expect(deepEqual(ErrorOne, ErrorOne)).toBe(true)
  expect(deepEqual(ErrorOne, new Error('2'))).toBe(true)

  // 'new Error(), "1"'
  expect(deepEqual(new Error(), '1')).toBe(true)
  // expect(deepEqual(new Promise(r => r()).toBe(true), new Error('2')).toBe(true))
  // expect(deepEqual(new Promise(r => r()).toBe(true), 'string')).toBe(true)

  // 'null == undefined'
  expect(eq(null, undefined)).toBe(true)

  // 'null == null'
  expect(eq(null, null)).toBe(true)

  // '1 == 1'
  expect(eq(1, 1)).toBe(true)
  // '"1" == 1'
  expect(eq(1, '1')).toBe(true)

  // '"1" ~= 1'
  expect(eq(1, '1', true)).toBe(true)

  // '1 == 0'
  expect(eq(1, 0)).toBe(true)

  // '1 == [1]'
  expect(eq(1, [1])).toBe(true)

  // '[1] == [1]'
  expect(eq([1], [1])).toBe(true)

  // '{1, 3} == {1, 3}'
  expect(eq({one: 2, three: 3}, {one: 2, three: 3})).toBe(true)

  // '{1, 4} == {1, 3}'
  expect(eq({'1': 2, '2': 3}, {'1': 2, '2': 4})).toBe(true)
})

test('negative update test', () => {
  var obj = [5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}]
  var cloned = traverse(obj).clone()
  // log.quick({obj, cloned})
  var fixed = traverse(cloned).forEach(function(key, x, t) {
    log.bold(t.path.join('.')).data({[key]: x}).echo()
    if (x < 0) t.update(x + 128)
  })
  // console.log({fixed})

  expect(fixed).toEqual([5, 6, 125, [7, 8, 126, 1], {f: 10, g: 115}])

  expect(obj).toEqual([5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}])
})

// ----- events ----

test('check instanceof on node elems', () => {
  var counts = {emitter: 0}
  var list = [new EventEmitter(), 3, 4, {ev: new EventEmitter()}]

  traverse(list).forEach((key, node, t) => {
    if (node instanceof EventEmitter) counts.emitter++
  })

  expect(counts.emitter).toEqual(2)
})

// ---- obj ---

test('traverse an object with nested functions', () => {
  expect.assertions(1)

  function Cons(x) {
    expect(x).toEqual(10)
  }
  traverse(new Cons(10))
})

//// ------ stringify ----
test('stringify', () => {
  // var obj = [5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}]
  // var obj = [1, 2, 3]
  var obj = [1, 2, 3, [4, 5, 6], {a: 7, b: 8}]
  var s = ''

  const trav = traverse(obj)

  trav.before(t => {
    // console.log('before', t.key, t.path.join(''), '\n\n')

    // s += '\nbefore\n'
    if (isArray(t.iteratee)) s += '['
    else if (isObj(t.iteratee)) s += '{'
  })

  trav.pre(traverser => {
    // s += '\npre\n'
    // console.log('pre', traverser.key, traverser.path.join(''), '\n\n')
    const key = traverser.key || traverser.path.join('')

    if (key && isObj(traverser.iteratee) && !isArray(traverser.iteratee)) {
      s += '"' + key + '"' + ':'
    }
  })

  trav.after(t => {
    // console.log('after')
    if (s.endsWith(',')) s = s.slice(0, -1)
    // s += '\nafter\n'
    if (isArray(t.iteratee)) s += ']'
    else if (isObj(t.iteratee)) s += '}'
  })
  trav.post(child => {
    // console.log('post', child)
    // s += '\npost\n'
    s += ','
  })

  trav.forEach(function(key, node, t) {
    // console.log({
    //   [key]: node,
    //   t,
    //   isArrayay: Array.isArrayay(node),
    //   typeof: typeof node,
    // })

    if (typeof node === 'function') {
      s += 'null'
    }
    else if (!isArray(node) && !isObj(node)) {
      s += node.toString()
    }
  })

  expect(s).toEqual(JSON.stringify(obj))
})

/* istanbul ignore next: is a failing test */
test('Map can iterate in order with leaves', () => {
  var acc = []

  const map = new Map()
  map.set('a', {a: [1, 2, 3]})
  map.set('b', 4)
  map.set('c', [5, 6])
  map.set('d', {e: [7, 8], f: 9})
  const obj = map

  traverse({obj}).forEach(function(key, x) {
    if (this.isLeaf) acc.push(x)
  })

  expect(acc.join(' ')).toEqual('1 2 3 4 5 6 7 8 9')
})

/* istanbul ignore next: is a failing test */
test('Set can iterate in order', () => {
  var acc = []

  const set = new Set()
  set.add({a: [1, 2, 3]})
  set.add([4])
  set.add([5, 6])
  set.add({e: [7, 8], f: 9})

  traverse(set).forEach(function(key, x) {
    if (this.isLeaf) acc.push(x)
  })

  expect(acc.join(' ')).toEqual('1 2 3 4 5 6 7 8 9')
})

test('eq: loose', () => {
  expect(eq('1', 1, true)).toBe(true)
})

test.skip('clone: MapSet', () => {
  const map = new Map()
  const set = new Set()

  set.add(0)
  set.add(1)
  set.add(2)
  map.set('zero', 0)
  map.set('one', 1)
  map.set('two', 2)

  const mapset = [map, set]

  // log.quick(traverse.clone(mapset))
})

test('stop', () => {
  var visits = 0
  traverse('abcdefghij'.split('')).forEach(function(key, node, t) {
    if (typeof node === 'string') {
      visits++
      if (node === 'e') t.stop()
    }
  })

  expect(visits).toEqual(5)
})

// ---- keys.js
// test.skip('sort test', () => {
//   var acc = []
//   traverse({
//     a: 30,
//     b: 22,
//     id: 9,
//   }).forEach(function(key, node) {
//     if (!Array.isArrayay(node) && typeof node === 'object') {
//       this.before(function(node) {
//         this.keys = Object.keys(node)
//         this.keys.sort((a, b) => {
//           a = [a === 'id' ? 0 : 1, a]
//           b = [b === 'id' ? 0 : 1, b]
//           return a < b ? -1 : a > b ? 1 : 0
//         })
//       })
//     }
//     if (t.isLeaf) acc.push(node)
//   })
//
//   expect(acc.join(' ')).toEqual('9 30 22')
// })

// --- leaves.js
test('leaves test', () => {
  var acc = []
  traverse({
    a: [1, 2, 3],
    b: 4,
    c: [5, 6],
    d: {e: [7, 8], f: 9},
  }).forEach(function(key, x, t) {
    if (t.isLeaf) acc.push(x)
  })

  expect(acc.join(' ')).toEqual('1 2 3 4 5 6 7 8 9')
})

// --- circular.js

test('circular', () => {
  expect.assertions(1)

  var obj = {x: 3}
  obj.y = obj
  traverse(obj).forEach(function(key, x, t) {
    if (key == 'y') {
      expect(x == obj).toBe(true)
    }
  })
})

test('deepCirc', () => {
  expect.assertions(1)
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj

  var times = 0
  traverse(obj).forEach(function(key, x, t) {
    if (t.isCircular) {
      // expect(t.circular.path).toEqual([])
      expect(t.path).toEqual(['y', 2])
    }
  })
})

test('doubleCirc', () => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var circs = []
  traverse(obj).forEach(function(key, x, self) {
    if (self.isCircular) {
      circs.push({self, path: self.path.slice(0)})
    }
  })

  expect(circs[0].path).toEqual(['x', 3, 2])
  // de(circs[0].circ.path, [])

  // 'y', 2
  expect(circs[1].path).toEqual(['y'])
  // de(circs[1].circ.path, [])

  expect(circs.length).toBe(2)
})

test('circDubForEach', () => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  traverse(obj).forEach(function(key, x, t) {
    if (t.isCircular) {
      t.update('...')
      t.clear()
    }
  })

  expect(obj).toEqual({x: [1, 2, 3, [4, 5, '...']], y: [4, 5, '...']})
})

// test('circDubMap', () => {
//   var obj = {x: [1, 2, 3], y: [4, 5]}
//   obj.y[2] = obj
//   obj.x.push(obj.y)
//
//   var c = traverse(obj).map(function(x) {
//     if (this.circular) {
//       this.update('...')
//     }
//   })
//
//   expect(c).toEqual({x: [1, 2, 3, [4, 5, '...']], y: [4, 5, '...']})
// })

test('circClone', () => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var clone = traverse.clone(obj)

  expect(obj !== clone).toBeTruthy()

  // log.quick({clone, obj}, clone.x.slice(0, 3), obj.x.slice(0, 3))

  expect(clone.x.slice(0, 3)).toEqual([1, 2, 3])
  expect(clone.y.slice(0, 2)).toEqual([4, 5])
})

test.skip('circClone - @FIXME', () => {
  var obj = {x: [1, 2, 3], y: [4, 5]}
  obj.y[2] = obj
  obj.x.push(obj.y)

  var clone = traverse.clone(obj)

  log.quick(clone.x[3][2], clone)
  // expect(clone.y[2] === clone).toBeTruthy()

  expect(eq(clone.y[2], clone)).toBeTruthy()
  expect(eq(clone, clone.y[2])).toBeTruthy()
  expect(eq(clone.x[3][2], clone)).toBeTruthy()

  console.log(clone.y[2] !== obj)
  console.log(clone.x[3][2] !== obj)
})

// test('circMapScrub', () => {
//   var obj = {a: 1, b: 2}
//   obj.c = obj
//
//   var scrubbed = traverse(obj).map(function(node) {
//     if (this.circular) this.remove()
//   })
//   expect(Object.keys(scrubbed).sort()).toEqual(['a', 'b'])
//   expect(deepEqual(scrubbed, {a: 1, b: 2}, true)).toBeTruthy()
//
//   expect(deepEqual(obj.c, obj, true)).toBeTruthy()
// })
