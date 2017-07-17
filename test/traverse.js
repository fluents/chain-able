const traverse = require('../src/deps/traverse')

const eq = traverse.eq

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

const made = make()
// const cloned = clone(make)
const cloned = new Set([make])
const fake = {a: false, b: {}}

// log.quick(
//   cloned === made,
//   Object.is(made, cloned),
//   eq(made, cloned),
//   eq(made, fake)
// )

let its = [0, 1, [2]]
const circulars = {one: {two: 3, check: [0]}}
circulars.circulars = circulars
its = [0, circulars, 'stringy', new Date()]

const map = new Map()
map.set('a', {a: [1, 2, 3]})
map.set('b', 4)
map.set('c', [5, 6])
map.set('d', {e: [7, 8], f: 9})

its = 1
const full = [
  circulars,
  5,
  [1],
  {stringy: 'stringy', arr: [1]},
  0,
  6,
  -3,
  [7, 8, -2, 1],
  {f: 10, g: -13},
  [0, circulars, 'stringy', new Date()],
  [5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}],
  map,
  ['a', [3.9, 4, 4.1], 'b', [4.9, 5, 5.1], 'c', [5.9, 6, 6.1]],
  made,
  cloned,
  fake,
  make(),
]

const circ = {eh: true}
circ.circ = circ
its = [circ, {eh: true}, 1000000]
its = [its, full]

const log = require('fliplog')

const timer = log.fliptime()
timer.start('loop')

const set = new Set()
let times = 0

test('traverse', () => {
  // for (let i = 0; i < 100000; i++) {
  traverse(its).forEach((prop, val, it) => {
    // log.bold('iterate').data({prop, val}).echo()
    times++

    if (prop === 'eh') it.remove()
    else if (typeof val === 'number') it.update(val + 1)

    set.add(prop)
    eq(val, its)

    // const {paths, key, isCircular, isLeaf, isRoot, depth, iteratable} = it
    // const data = {paths, key, isCircular, isLeaf, isRoot, depth, iteratable}

    // log.underline(it.paths.join('...')).data(data).echo()
    // console.log('\n')
    // log.data(it).echo()
    // console.log(it)
  })
  // }
  // log.quick({times, set})
  timer.stop('loop').log('loop')
  expect(times >= 99).toBe(true)
  expect(set.size >= 10).toBe(true)
})

// console.log(times, set)
// works to delete!
// console.log(its)
