const Chain = require('../src')

const todo = console.log
todo('define().set().call() (callable getter)')
// test.skip('.init', t => {
//   t.plan(1)
//   const map = new Chain()
//   const init = Chain.init()
//
//   t.deepEqual(init, map)
// })

test('.autoIncrement()', () => {
  const chain = new Chain()
  // extendIncrement
  chain.methods(['index']).autoIncrement().build().index().index(+1).index()
  const index = chain.get('index')
  expect(index === 3).toBe(true)
})

test('.alias()', () => {
  const chain = new Chain()
  chain.methods(['canada']).alias(['eh']).build()
  chain.eh('actually...canada o.o')
  expect(chain.get('canada') === 'actually...canada o.o').toBe(true)

  // can't deep equal, they are bound
  // log.quick(chain.eh.toString(), chain.canada.toString())
  // t.deepEqual(chain.eh, chain.canada)
})

test('.default(true)', () => {
  const chain = new Chain()
  chain.methods(['truth']).default(true).build().truth()
  expect(chain.get('truth') === true).toBe(true)
})

test('.default(true)', () => {
  const chain = new Chain()
  chain.methods(['lies']).default(false).build().lies()
  expect(chain.get('lies')).toBe(false)
})

test('extendWith -> .default - arr', () => {
  const chain = new Chain()
  chain.method(['thing1', 'thing2']).default('dr').build()
  const {thing1, thing2} = chain.thing1().thing2().entries()
  expect(thing1 === 'dr').toBe(true)
  expect(thing1 === thing2).toBe(true)
})

// old
// test.skip('extendWith - object', t => {
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
