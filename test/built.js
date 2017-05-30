const test = require('ava')
const log = require('fliplog')
const dist = require('../index.cjs.js')

test('works with dist', t => {
  const exported = [
    'Chainable',
    'ChainedSet',
    'ChainedMap',
    'FactoryChain',
    'MergeChain',
    'Chain',
    'dopemerge',
    'compose',
  ]
  t.plan(exported.length)
  // log.quick(exported.map(exp => ({[exp]: dist[exp]})))
  exported
    .map(exp => typeof dist[exp])
    .forEach(type => t.true(type === 'object' || type === 'function'))
})
