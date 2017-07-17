var {traverse, deepEqual} = require('./')
// var deepEqual = require('./lib/deep_equal')

test('super_deep', () => {
  // var util = require('util')
  var a0 = make()
  var a1 = make()
  expect(deepEqual(a0, a1)).toBeTruthy()

  a0.c.d.moo = true
  expect(!deepEqual(a0, a1)).toBeTruthy()

  a1.c.d.moo = true
  expect(deepEqual(a0, a1)).toBeTruthy()
})

function make() {
  var a = {self: 'a'}
  var b = {self: 'b'}
  var c = {self: 'c'}
  var d = {self: 'd'}
  var e = {self: 'e'}

  a.a = a
  a.b = b
  a.c = c

  b.a = a
  b.b = b
  b.c = c

  c.a = a
  c.b = b
  c.c = c
  c.d = d

  d.a = a
  d.b = b
  d.c = c
  d.d = d
  d.e = e

  e.a = a
  e.b = b
  e.c = c
  e.d = d
  e.e = e

  return a
}
