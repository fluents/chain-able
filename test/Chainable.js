const log = require('fliplog')
const {Chainable, ChainedMap, ChainedSet, Chain} = require('../src')

test('can use core Chainable', () => {
  const chain = new Chainable()
})

test('ChainedSet inherits Chainable', () => {
  const chain = new ChainedSet()
  expect(chain instanceof Chainable).toBe(true)
})

test('ChainedMap inherits Chainable', () => {
  const chain = new ChainedMap()
  expect(chain instanceof Chainable).toBe(true)
})

test('Chain(compose) inherits Chainable', () => {
  const chain = new Chain()
  expect(chain instanceof Chainable).toBe(true)
})

// 'Chainable core methods work as expected'
test('.end', () => {
  const parent = {isParent: true}
  const chain = new Chainable(parent)
  expect(chain.end()).toEqual(parent)
})

test('.when', () => {
  expect.assertions(2)
  const chain = new Chainable()
  chain.when(true, c => expect(!!c).toBe(true))
  chain.when(false, () => {}, c => expect(!!c).toBe(true))
})

test('.has', () => {
  expect.assertions(2)
  const chain = new Chain()
  expect(chain.has('not-set') === false).toBe(true)
  chain.set('isset', true)
  expect(chain.has('isset') === true).toBe(true)
})

test('.delete', () => {
  expect.assertions(1)
  const chain = new Chain()
  chain.set('isset', true)
  chain.delete('isset')
  expect(chain.has('isset') === false).toBe(true)
})

test('.clear', () => {
  expect.assertions(1)
  const chain = new Chain()
  chain.set('isset', true)
  chain.clear()
  expect(chain.has('isset') === false).toBe(true)
})
