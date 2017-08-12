const log = require('fliplog')
const {Chain, MethodChain, merge} = require('../src')

const {isUndefined, isObj, isFunction} = Chain.is

test('.returns().callReturns()', () => {
  const chain = new Chain()
  ;+chain
    .method('ehOh')
    .returns(() => {
      return 'yay'
    })
    .callReturns(true)

  const yay = chain.ehOh()
  expect(yay).toBe('yay')
})

test('.decorate(null)', () => {
  const chain = new Chain()

  // must provide parent
  expect(() => {
    +chain.method('ehOh').decorate(null)
  }).toThrow()
})

test('.decorate(obj)', () => {
  const chain = new Chain()
  const obj = {}
  chain.method('ehOh').decorate(obj).build()
  expect(isFunction(obj.ehOh)).toBe(true)
  obj.ehOh(1)
  expect(chain.get('ehOh')).toBe(1)

  // const chain2 = new Chain()
  // const obj2 = {}
  // chain2.method('ehOh').decorate(obj2).build()
  // expect(isFunction(obj2.ehOh)).toBe(true)
  // obj2.ehOh(1)
  // expect(chain2.get('ehOh')).toBe(1)
})

test('.method(object) .call() & .get().set()', () => {
  const chain = new Chain(parent)

  // must provide parent
  ;+chain
    .method({
      ehOh: {
        get() {
          return 'yay'
        },
        set(arg) {
          return chain.set('ehOh', arg)
        },
      },
    })
    .method({
      canada: {
        call(arg) {
          return chain.set('canada', arg)
        },
      },
    })

  chain.ehOh = 'eh'
  const ehOh = chain.ehOh
  expect(ehOh).toBe('yay')
  expect(chain.get('ehOh')).toBe('eh')

  const call = chain.canada('canada!!!')
  expect(call).toBe(chain)
  expect(chain.get('canada')).toBe('canada!!!')
})

test('.plugin', () => {
  function autoGetSet(name, parent) {
    const auto = arg =>
      (isUndefined(arg) ? parent.get(name) : parent.set(name, arg))

    // so we know if we defaulted them
    auto.autoGetSet = true
    return this.onSet(auto).onGet(auto).onCall(auto)
  }

  const chain = new Chain()
  chain.methods('eh').plugin(autoGetSet).build()
  expect(chain.eh(1)).toBe(chain)
  expect(chain.eh()).toBe(1)
})

test.only('factory method - automerge !!!!', () => {
  // also add this merge plugin factory
  function autoMergeMethodFactory(name, parent) {
    function autoMerge(arg) {
      if (isUndefined(arg)) {
        return this.get(name)
      }
      else if (this.has(name)) {
        return this.set(name, merge(this.get(name), arg))
      }
      else {
        return this.set(name, arg)
      }
    }

    // so we know if we defaulted them
    autoMerge.mergeFactory = true

    return this.onSet(autoMerge).onGet(autoMerge).onCall(autoMerge)
  }

  // @TODO: extend with `mergeName` to merge in
  // @example
  // .methods('eh')
  // .eh([])
  // .mergeEh(1)
  MethodChain.add({
    autoMerge: autoMergeMethodFactory,
  })
})

test('addFactoryMethods', () => {
  const {addMethodFactories} = require('../src')

  expect.assertions(5)

  // we do not have the method before
  expect(new Chain().methods().eh).toBe(undefined)

  // arg => build the method
  addMethodFactories({
    eh: function eh(arg) {
      return this.camelCase().autoGetSet().build()
    },
    short(arg) {
      return this.camelCase().autoGetSet().build()
    },
    callable: {
      call(methodChainInstance, arg) {
        return methodChainInstance
      },
    },
  })

  // we've added it
  expect(isFunction(new Chain().methods().eh)).toBe(true)

  // now we use it
  const chain = new Chain().methods('no-way').eh()
  expect(chain.noWay(1)).toBe(chain)
  expect(chain.noWay()).toBe(1)

  // ensure it works with .call
  const methodChainInstance = new Chain().methods('assert-callable').callable()
  expect(isObj(methodChainInstance)).toBe(true)
})

test('addTypes', () => {
  const {addTypes} = require('../src')
  addTypes({magik: x => typeof x === 'string'})

  const chain = new Chain()
  chain.methods('magic').type('magik').build()

  expect(typeof chain.magic).toBe('function')
})

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
