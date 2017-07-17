const log = require('fliplog')
const {Chainable, ChainedSet} = require('../src')

class Lists extends Chainable {
  constructor(parent) {
    super(parent)
    this.people = new ChainedSet(this)
    this.places = new ChainedSet(this)
  }
  add(type, value) {
    this[type].add(value)
    return this
  }
  all() {
    const {people, places} = this
    return new ChainedSet().merge(people).merge(places).values()
  }
}

let fns = {}

function add(lists) {
  // with a simple factory like method
  lists.add('people', 'sam').add('people', 'sue').add('places', 'moon')
  return fns
}
function addDirect(lists) {
  // or with property
  lists.places.add('sun')
  lists.people.add('joe')
  return fns
}
function prepend(lists) {
  lists.people.prepend('first')
  return fns
}
function merge(lists) {
  lists.people.merge(['frank', 'john'])
  return fns
}

function makeTests() {
  const lists = new Lists()
  fns = {}
  fns.add = add.bind(null, lists)
  fns.addDirect = addDirect.bind(null, lists)
  fns.prepend = prepend.bind(null, lists)
  fns.merge = merge.bind(null, lists)
  fns.result = lists
  return fns
}

test('add, merge, append, prepend', () => {
  const {result} = makeTests().add().addDirect().prepend().merge()
  expect(result.all()).toEqual([
    'first',
    'sam',
    'sue',
    'joe',
    'frank',
    'john',
    'moon',
    'sun',
  ])
})

test('add, merge, append, prepend - raw', () => {
  const lists = new Lists()

  lists.add('people', 'sam').add('people', 'sue').add('places', 'moon')

  // directly
  lists.places.add('sun')

  // operations
  lists.people.add('joe')
  lists.people.prepend('first')
  lists.people.merge(['frank', 'john'])

  expect(lists.all()).toEqual([
    'first',
    'sam',
    'sue',
    'joe',
    'frank',
    'john',
    'moon',
    'sun',
  ])
})

test.skip('species', () => {
  const set = new ChainedSet()
  var fakeArray = new ChainedSet()
  fakeArray.add(100)
  fakeArray.add([200, 300])
  var x = [1, 2, 3]

  // x.concat(fakeArray)
  const vals = fakeArray.values()
  vals[Symbol.isConcatSpreadable] = true
  expect(x.concat(vals)).toEqual([1, 2, 3100, 200, 300])
})

// --- from webpack-chain
test('is Chainable', () => {
  const parent = {parent: true}
  const set = new ChainedSet(parent)

  expect(set.end()).toBe(parent)
})

test('creates a backing Set', () => {
  const set = new ChainedSet()

  expect(set.store instanceof Set).toBe(true)
})

test('add', () => {
  const set = new ChainedSet()

  expect(set.add('alpha')).toBe(set)
  expect(set.store.has('alpha')).toBe(true)
  expect(set.store.size).toBe(1)
})

test('prepend', () => {
  const set = new ChainedSet()

  set.add('alpha')

  expect(set.prepend('beta')).toBe(set)
  expect(set.store.has('beta')).toBe(true)
  expect([...set.store]).toEqual(['beta', 'alpha'])
})

test('clear', () => {
  const set = new ChainedSet()

  set.add('alpha')
  set.add('beta')
  set.add('gamma')

  expect(set.store.size).toBe(3)
  expect(set.clear()).toBe(set)
  expect(set.store.size).toBe(0)
})

test('delete', () => {
  const set = new ChainedSet()

  set.add('alpha')
  set.add('beta')
  set.add('gamma')

  expect(set.delete('beta')).toBe(set)
  expect(set.store.size).toBe(2)
  expect(set.store.has('beta')).toBe(false)
})

test('has', () => {
  const set = new ChainedSet()

  set.add('alpha')
  set.add('beta')
  set.add('gamma')

  expect(set.has('beta')).toBe(true)
  expect(set.has('delta')).toBe(false)
  expect(set.has('beta')).toBe(set.store.has('beta'))
})

test('values', () => {
  const set = new ChainedSet()

  set.add('alpha')
  set.add('beta')
  set.add('gamma')

  expect(set.values()).toEqual(['alpha', 'beta', 'gamma'])
})

test('merge with no values', () => {
  const set = new ChainedSet()
  const arr = ['alpha', 'beta', 'gamma']

  expect(set.merge(arr)).toBe(set)
  expect(set.values()).toEqual(arr)
})

test('merge with existing values', () => {
  const set = new ChainedSet()
  const arr = ['alpha', 'beta', 'gamma']

  set.add('delta')

  expect(set.merge(arr)).toBe(set)
  expect(set.values()).toEqual(['delta', 'alpha', 'beta', 'gamma'])
})

test('when true', () => {
  const set = new ChainedSet()
  const right = instance => {
    expect(instance).toBe(set)
    instance.add('alpha')
  }
  const left = instance => {
    instance.add('beta')
  }

  expect(set.when(true, right, left)).toBe(set)
  expect(set.has('alpha')).toBe(true)
  expect(set.has('beta')).toBe(false)
})

test('when false', () => {
  const set = new ChainedSet()
  const right = instance => {
    instance.add('alpha')
  }
  const left = instance => {
    expect(instance).toBe(set)
    instance.add('beta')
  }

  expect(set.when(false, right, left)).toBe(set)
  expect(set.has('alpha')).toBe(false)
  expect(set.has('beta')).toBe(true)
})
