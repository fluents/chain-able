const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

test('extendIncrement', t => {
  const chain = new Chain()
  chain.extendIncrement(['index']).index().index().index()
  const index = chain.get('index')
  t.true(index === 3)
})

test('extendAlias', t => {
  const chain = new Chain()
  chain.extend(['canada']).extendAlias(['eh'], 'canada')
  chain.eh('actually...canada o.o')
  t.true(chain.get('canada') === 'actually...canada o.o')

  // can't deep equal, they are bound
  // log.quick(chain.eh.toString(), chain.canada.toString())
  // t.deepEqual(chain.eh, chain.canada)
})

test('extendTrue', t => {
  const chain = new Chain()
  chain.extendWith(['truth'], true).truth()
  t.true(chain.get('truth') === true)
})

test('extendFalse', t => {
  const chain = new Chain()
  chain.extendWith(['lies'], false).lies()
  t.false(chain.get('lies'))
})

test('extendWith - object', t => {
  const chain = new Chain()
  chain.extendWith({thing1: 'dr', thing2: 'dr'})
  const {thing1, thing2} = chain.thing1().thing2().entries()
  t.true(thing1 === 'dr' && thing1 === thing2)
  t.true(thing1 === 'dr')
  t.true(thing2 === 'dr')
})

test('extendWith - arr', t => {
  const chain = new Chain()
  chain.extendWith(['thing1', 'thing2'], 'dr')
  const {thing1, thing2} = chain.thing1().thing2().entries()
  t.true(thing1 === 'dr')
  t.true(thing1 === thing2)
})
// test('extendWith', t => {
//   const chain = new Chain()
//   chain.extendWith(['eh'], false, 'no')
//   log.quick(chain)
// })
