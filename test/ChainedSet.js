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
