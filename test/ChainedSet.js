const test = require('ava')
const log = require('fliplog')
const {Chainable, ChainedSet} = require('../dist')

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
    return new ChainedSet()
      .merge(this.people)
      .merge(this.places)
      .values()
  }
}

let fns = {}

function add(lists) {
  // with a simple factory like method
  lists
    .add('people', 'sam')
    .add('people', 'sue')
    .add('places', 'moon')
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

test('add, merge, append, prepend', t => {
  const {result} = makeTests().add().addDirect().prepend().merge()
  t.deepEqual(result.all(), [
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
