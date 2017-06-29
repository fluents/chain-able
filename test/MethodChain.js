const log = require('fliplog')
const Chain = require('../src')

const {isUndefined} = chain.is

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

test('plugins', () => {
  const autoGetSet = (name, parent) => {
    const onSet = arg =>
      (isUndefined(arg) ? parent.set(name, arg) : parent.get(name))
    const onGet = arg =>
      (isUndefined(arg) ? parent.get(name) : parent.set(name, arg))

    // so we know if we defaulted them
    onSet.autoGetSet = true
    onGet.autoGetSet = true
    return this.onSet(onSet).onGet(onGet)
  }

  const chain = new Chain()
  chain.methods('eh').plugins(autoGetSet).build()
  expect(chain.eh(1)).toBe(chain)
  expect(chain.eh()).toBe(1)
})

test('addTypes', () => {
  const chain = new Chain()
  chain
    .methods('eh')
    .addTypes({magic: x => typeof x === 'string'})
    .type('magic')
    .build()

  expect(typeof chain.magic).toBe('function')
})
