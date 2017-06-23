const test = require('ava')
// const log = require('fliplog')
const Chain = require('../dist')

test.todo('define().set().call() (callable getter)')
test.skip('.init', t => {
  t.plan(1)
  const map = new Chain()
  const init = Chain.init()

  t.deepEqual(init, map)
})

test('.autoIncrement()', t => {
  const chain = new Chain()
  // extendIncrement
  chain.methods(['index']).autoIncrement().build().index().index().index()
  const index = chain.get('index')
  t.true(index === 3)
})

test('.alias()', t => {
  const chain = new Chain()
  chain.methods(['canada']).alias(['eh']).build()
  chain.eh('actually...canada o.o')
  t.true(chain.get('canada') === 'actually...canada o.o')

  // can't deep equal, they are bound
  // log.quick(chain.eh.toString(), chain.canada.toString())
  // t.deepEqual(chain.eh, chain.canada)
})

test('.default(true)', t => {
  const chain = new Chain()
  chain.methods(['truth']).default(true).build().truth()
  t.true(chain.get('truth') === true)
})

test('.default(true)', t => {
  const chain = new Chain()
  chain.methods(['lies']).default(false).build().lies()
  t.false(chain.get('lies'))
})

test('extendWith -> .default - arr', t => {
  const chain = new Chain()
  chain.method(['thing1', 'thing2']).default('dr').build()
  const {thing1, thing2} = chain.thing1().thing2().entries()
  t.true(thing1 === 'dr')
  t.true(thing1 === thing2)
})

// old
// test.failing('extendWith - object', t => {
//   const chain = new Chain()
//   chain.extendWith({thing1: 'dr', thing2: 'dr'})
//   const {thing1, thing2} = chain.thing1().thing2().entries()
//   t.true(thing1 === 'dr' && thing1 === thing2)
//   t.true(thing1 === 'dr')
//   t.true(thing2 === 'dr')
// })
// test('extendWith', t => {
//   const chain = new Chain()
//   chain.extendWith(['eh'], false, 'no')
//   log.quick(chain)
// })
