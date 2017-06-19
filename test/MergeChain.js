const test = require('ava')
const log = require('fliplog')
const stress = require('./_stress')
const {MergeChain, Chain, ChainedSet} = require('../dist')

test('instantiate', t => {
  t.plan(1)
  t.true(new MergeChain() instanceof MergeChain)
})

function getChain(useMerge = false) {
  class Mergeable extends Chain {
    merge(obj) {
      return super.merge(obj, useMerge)
    }
  }
  const chain = new Chain()
  chain.extend(['shorthanded', 'str', 'obj', 'emptyArr', 'emptyObj'])
  chain.set('str', 'stringy')
  chain.set('obj', {eh: true, conflict: 0, arr: ['tricky'], str: ''})
  chain.set('arr', [[11], [22], 3, 4])
  chain.set('emptyArr', [])
  chain.set('emptyObj', {})
  chain.shorthanded('zoo')
  return chain
}

test('nothing merges when returning nothing in onValue', t => {
  t.plan(2)
  const chain = getChain()
  const merge = new MergeChain(chain)
  merge.onValue(val => {
    t.false(val.conflict)
    return false
  })
  merge.merge({obj: {conflict: false}})
  t.true(chain.get('obj').conflict === 0)
})

test('onExisting', t => {
  t.plan(1)

  const chain = getChain()
  const merge = new MergeChain(chain)
    .onExisting((a, b) => a + b)
    .merge({str: '+'})

  t.true(chain.get('str') === 'stringy+')
})

test('using second param to return mergeChain', t => {
  t.plan(1)
  const chain = getChain(true)
  t.true(chain instanceof MergeChain)
})

test('custom merger', t => {
  t.plan(1)
  const chain = getChain()
  const merge = new MergeChain(chain).merger((a, b) => []).merge({emptyArr: []})

  t.true(chain.get('emptyArr').length === 0)
})

test('custom merger - cb', t => {
  t.plan(1)
  const chain = getChain()
  chain.merge({emptyArr: []}, (a, b) => [])
  t.true(chain.get('emptyArr').length === 0)
})

test('stress merger - map', t => {
  const chain = new Chain()
  stress(data => chain.merge(data))
})

test('stress merger - set', t => {
  const chain = new ChainedSet()
  stress(data => chain.merge(data))
})
