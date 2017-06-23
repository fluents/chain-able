<<<<<<< HEAD
import test from 'ava';
import ChainedSet from '../src/ChainedSet';

test('is Chainable', t => {
  const parent = { parent: true };
  const set = new ChainedSet(parent);

  t.is(set.end(), parent);
});

test('creates a backing Set', t => {
  const set = new ChainedSet();

  t.true(set.store instanceof Set);
});

test('add', t => {
  const set = new ChainedSet();

  t.is(set.add('alpha'), set);
  t.true(set.store.has('alpha'));
  t.is(set.store.size, 1);
});

test('prepend', t => {
  const set = new ChainedSet();

  set.add('alpha');

  t.is(set.prepend('beta'), set);
  t.true(set.store.has('beta'));
  t.deepEqual([...set.store], ['beta', 'alpha']);
});

test('clear', t => {
  const set = new ChainedSet();

  set.add('alpha');
  set.add('beta');
  set.add('gamma');

  t.is(set.store.size, 3);
  t.is(set.clear(), set);
  t.is(set.store.size, 0);
});

test('delete', t => {
  const set = new ChainedSet();

  set.add('alpha');
  set.add('beta');
  set.add('gamma');

  t.is(set.delete('beta'), set);
  t.is(set.store.size, 2);
  t.false(set.store.has('beta'));
});

test('has', t => {
  const set = new ChainedSet();

  set.add('alpha');
  set.add('beta');
  set.add('gamma');

  t.true(set.has('beta'));
  t.false(set.has('delta'));
  t.is(set.has('beta'), set.store.has('beta'));
});

test('values', t => {
  const set = new ChainedSet();

  set.add('alpha');
  set.add('beta');
  set.add('gamma');

  t.deepEqual(set.values(), ['alpha', 'beta', 'gamma']);
});

test('merge with no values', t => {
  const set = new ChainedSet();
  const arr = ['alpha', 'beta', 'gamma'];

  t.is(set.merge(arr), set);
  t.deepEqual(set.values(), arr);
});

test('merge with existing values', t => {
  const set = new ChainedSet();
  const arr = ['alpha', 'beta', 'gamma'];

  set.add('delta');

  t.is(set.merge(arr), set);
  t.deepEqual(set.values(), ['delta', 'alpha', 'beta', 'gamma']);
});

test('when true', t => {
  const set = new ChainedSet();
  const right = instance => {
    t.is(instance, set);
    instance.add('alpha');
  };
  const left = instance => {
    instance.add('beta');
  };

  t.is(set.when(true, right, left), set);
  t.true(set.has('alpha'));
  t.false(set.has('beta'));
});

test('when false', t => {
  const set = new ChainedSet();
  const right = instance => {
    instance.add('alpha');
  };
  const left = instance => {
    t.is(instance, set);
    instance.add('beta');
  };

  t.is(set.when(false, right, left), set);
  t.false(set.has('alpha'));
  t.true(set.has('beta'));
});
=======
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
>>>>>>> ⛓ core chainable, ⚡drop unused & 🔬 test updates
