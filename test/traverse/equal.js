var test = require('ava')
// var deepEqual = require('./lib/deep_equal')
var {deepEqual} = require('./')

test('deepDates', t => {
  t.plan(2)

  t.truthy(
    deepEqual({d: new Date(), x: [1, 2, 3]}, {d: new Date(), x: [1, 2, 3]}),
    'dates should be equal'
  )

  var d0 = new Date()
  return new Promise(res => setTimeout(res, 5)).then(val => {
    t.truthy(
      !deepEqual({d: d0, x: [1, 2, 3]}, {d: new Date(), x: [1, 2, 3]}),
      'microseconds should count in date equality'
    )
    return Promise.resolve()
  })
})

test('deepCircular', t => {
  var a = [1]
  a.push(a) // a = [ 1, *a ]

  var b = [1]
  b.push(a) // b = [ 1, [ 1, *a ] ]

  t.truthy(
    !deepEqual(a, b, false),
    'circular ref mount points count towards equality'
  )

  var c = [1]
  c.push(c) // c = [ 1, *c ]
  t.truthy(deepEqual(a, c), 'circular refs are structurally the same here')

  var d = [1]
  d.push(a) // c = [ 1, [ 1, *d ] ]
  t.truthy(deepEqual(b, d), 'non-root circular ref structural comparison')

  t.pass()
})

test('deepInstances', t => {
  t.truthy(
    !deepEqual([new Boolean(false)], [false]),
    'boolean instances are not real booleans'
  )

  t.truthy(
    !deepEqual([new String('x')], ['x']),
    'string instances are not real strings'
  )

  t.truthy(
    !deepEqual([new Number(4)], [4]),
    'number instances are not real numbers'
  )

  t.truthy(
    deepEqual([new RegExp('x')], [/x/]),
    'regexp instances are real regexps'
  )

  t.truthy(
    !deepEqual([new RegExp(/./)], [/../]),
    'these regexps aren\'t the same'
  )

  t.truthy(
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
    ),
    'functions with the same .toString() aren\'t necessarily the same'
  )

  var f = function(x) {
    return x * 2
  }
  t.truthy(deepEqual([f], [f]), 'these functions are actually equal')

  t.pass()
})

test('deepEqual', t => {
  t.truthy(!deepEqual([1, 2, 3], {0: 1, 1: 2, 2: 3}), 'arrays are not objects')
  t.pass()
})

test('falsy', t => {
  t.truthy(!deepEqual([undefined], [null]), 'null is not undefined!')

  t.truthy(!deepEqual([null], [undefined]), 'undefined is not null!')

  t.truthy(
    !deepEqual(
      {a: 1, b: 2, c: [3, undefined, 5]},
      {a: 1, b: 2, c: [3, null, 5]}
    ),
    'undefined is not null, however deeply!'
  )

  t.truthy(
    !deepEqual(
      {a: 1, b: 2, c: [3, undefined, 5]},
      {a: 1, b: 2, c: [3, null, 5]}
    ),
    'null is not undefined, however deeply!'
  )

  t.truthy(
    !deepEqual(
      {a: 1, b: 2, c: [3, undefined, 5]},
      {a: 1, b: 2, c: [3, null, 5]}
    ),
    'null is not undefined, however deeply!'
  )

  t.pass()
})

test('deletedArrayEqual', t => {
  var xs = [1, 2, 3, 4]
  delete xs[2]

  var ys = Object.create(Array.prototype)
  ys[0] = 1
  ys[1] = 2
  ys[3] = 4

  t.truthy(
    deepEqual(xs, ys),
    'arrays with deleted elements are only equal to' +
      ' arrays with similarly deleted elements'
  )

  t.truthy(
    !deepEqual(xs, [1, 2, undefined, 4]),
    'deleted array elements cannot be undefined'
  )

  t.truthy(
    !deepEqual(xs, [1, 2, null, 4]),
    'deleted array elements cannot be null'
  )

  t.pass()
})

test('deletedObjectEqual', t => {
  var obj = {a: 1, b: 2, c: 3}
  delete obj.c

  t.truthy(
    deepEqual(obj, {a: 1, b: 2}),
    'deleted object elements should not show up'
  )

  t.truthy(
    !deepEqual(obj, {a: 1, b: 2, c: undefined}),
    'deleted object elements are not undefined'
  )

  t.truthy(
    !deepEqual(obj, {a: 1, b: 2, c: null}),
    'deleted object elements are not null'
  )

  t.pass()
})

test('emptyKeyEqual', t => {
  t.truthy(!deepEqual({a: 1}, {'a': 1, '': 55}))

  t.pass()
})

test('deepArguments', t => {
  t.truthy(
    !deepEqual(
      [4, 5, 6],
      (function() {
        return arguments
      })(4, 5, 6)
    ),
    'arguments are not arrays'
  )

  t.truthy(
    deepEqual(
      (function() {
        return arguments
      })(4, 5, 6),
      (function() {
        return arguments
      })(4, 5, 6)
    ),
    'arguments should equal'
  )

  t.pass()
})

test('deepUn', t => {
  t.truthy(!deepEqual({a: 1, b: 2}, undefined))
  t.truthy(!deepEqual({a: 1, b: 2}, {}))
  t.truthy(!deepEqual(undefined, {a: 1, b: 2}))
  t.truthy(!deepEqual({}, {a: 1, b: 2}))
  t.truthy(deepEqual(undefined, undefined))
  t.truthy(deepEqual(null, null))
  t.truthy(!deepEqual(undefined, null))

  t.pass()
})

test('deepLevels', t => {
  var xs = [1, 2, [3, 4, [5, 6]]]
  t.truthy(!deepEqual(xs, []))
  t.pass()
})

test('null vs undefined', t => {
  t.truthy(!deepEqual(null, undefined))
  t.truthy(!deepEqual(undefined, null))
  t.truthy(deepEqual(null, null))
  t.truthy(deepEqual(undefined, undefined))
  t.pass()
})
test('RegExp vs RegExp', t => {
  t.truthy(deepEqual(new RegExp('.*'), new RegExp('.*')))
  t.truthy(!deepEqual(new RegExp('not-the-same'), new RegExp('.*')))
  t.pass()
})
test('ObjKeys', t => {
  t.truthy(!deepEqual({one: true, two: true}, {one: true, three: false}))
  t.pass()
})
