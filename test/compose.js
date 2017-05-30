const test = require('ava')
const log = require('fliplog')
const {compose} = require('../dist')
// const ChainedMap = require('../ChainedMap')
// const compose = require('../compose')

const PreComposed = compose({
  define: false,
  dot: false,
  observe: false,
  shorthands: false,
  transform: false,
  types: false,
  extend: false,
})

class Composed extends PreComposed {}

test('composable', t => {
  const map = new Composed({isParent: true})
  t.deepEqual(map.parent, {isParent: true})
})

test('clearable', t => {
  const map = new Composed({isParent: true}).set('eh', 'eh!')

  t.deepEqual(map.entries(), {
    eh: 'eh!',
  })

  map.clear()
  t.deepEqual(map.store, new Map())
})

test('mergeable', t => {
  const map = new Composed({isParent: true})
    .extend(['igloo'])
    .set('eh', 'eh!')
    .set('eh2', 'eh2!')
    .merge({dis: 1, eh: ['string-to-arr'], igloo: 0, neuw: Boolean})

  t.deepEqual(map.entries(), {
    eh: ['string-to-arr'],
    eh2: 'eh2!',
    dis: 1,
    igloo: 0,
    neuw: Boolean,
  })
})

test('.className', t => {
  t.plan(1)
  const chain = new Composed()
  t.true(typeof chain.className === 'string')
})
