var {deepEqual} = require('./')

test('deepDates', () => {
  expect.assertions(2)

  expect(deepEqual(
    {d: new Date(0, 0, 0, 0), x: [1, 2, 3]},
    {d: new Date(0, 0, 0, 0), x: [1, 2, 3]}
  )).toBeTruthy()

  var d0 = new Date()
  return new Promise(res => setTimeout(res, 5)).then(val => {
    expect(!deepEqual({d: d0, x: [1, 2, 3]}, {d: new Date(), x: [1, 2, 3]})).toBeTruthy()
    return Promise.resolve()
  });
})

test('deepCircular', () => {
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

  expect(!deepEqual(
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
  )).toBeTruthy()

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

  expect(!deepEqual(
    {a: 1, b: 2, c: [3, undefined, 5]},
    {a: 1, b: 2, c: [3, null, 5]}
  )).toBeTruthy()

  expect(!deepEqual(
    {a: 1, b: 2, c: [3, undefined, 5]},
    {a: 1, b: 2, c: [3, null, 5]}
  )).toBeTruthy()

  expect(!deepEqual(
    {a: 1, b: 2, c: [3, undefined, 5]},
    {a: 1, b: 2, c: [3, null, 5]}
  )).toBeTruthy()
})

test('deletedArrayEqual', () => {
  var xs = [1, 2, 3, 4]
  delete xs[2]

  var ys = Object.create(Array.prototype)
  ys[0] = 1
  ys[1] = 2
  ys[3] = 4

  expect(deepEqual(xs, ys)).toBeTruthy()

  expect(!deepEqual(xs, [1, 2, undefined, 4])).toBeTruthy()

  expect(!deepEqual(xs, [1, 2, null, 4])).toBeTruthy()
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
  expect(!deepEqual(
    [4, 5, 6],
    (function() {
      return arguments
    })(4, 5, 6)
  )).toBeTruthy()

  expect(deepEqual(
    (function() {
      return arguments
    })(4, 5, 6),
    (function() {
      return arguments
    })(4, 5, 6)
  )).toBeTruthy()
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

test('null vs undefined', () => {
  expect(!deepEqual(null, undefined)).toBeTruthy()
  expect(!deepEqual(undefined, null)).toBeTruthy()
  expect(deepEqual(null, null)).toBeTruthy()
  expect(deepEqual(undefined, undefined)).toBeTruthy()
})
test('RegExp vs RegExp', () => {
  expect(deepEqual(new RegExp('.*'), new RegExp('.*'))).toBeTruthy()
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

  expect(deepEqual(noop, noop)).toBeTruthy()
  expect(!deepEqual(noop, noops)).toBeTruthy()
})
test('ObjKeys', () => {
  expect(!deepEqual({one: true, two: true}, {one: true, three: false})).toBeTruthy()
})
