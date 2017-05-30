const test = require('ava')
const log = require('fliplog')
const {Chainable, ChainedMap, ChainedSet, Chain} = require('../dist')

test('can use core Chainable', t => {
  const chain = new Chainable()
  t.pass()
})

test('ChainedSet inherits Chainable', t => {
  const chain = new ChainedSet()
  t.true(chain instanceof Chainable)
})

test('ChainedMap inherits Chainable', t => {
  const chain = new ChainedMap()
  t.true(chain instanceof Chainable)
})

test('Chain(compose) inherits Chainable', t => {
  const chain = new Chain()
  t.true(chain instanceof Chainable)
})

// 'Chainable core methods work as expected'
test('.end', t => {
  const parent = {isParent: true}
  const chain = new Chainable(parent)
  t.deepEqual(chain.end(), parent)
})

test('.when', t => {
  t.plan(2)
  const chain = new Chainable()
  chain.when(true, c => t.true(!!c))
  chain.when(false, () => {}, c => t.true(!!c))
})

test('.has', t => {
  t.plan(2)
  const chain = new Chain()
  t.true(chain.has('not-set') === false)
  chain.set('isset', true)
  t.true(chain.has('isset') === true)
})

test('.delete', t => {
  t.plan(1)
  const chain = new Chain()
  chain.set('isset', true)
  chain.delete('isset')
  t.true(chain.has('isset') === false)
})

test('.clear', t => {
  t.plan(1)
  const chain = new Chain()
  chain.set('isset', true)
  chain.clear()
  t.true(chain.has('isset') === false)
})
