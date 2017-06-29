const log = require('fliplog')
const Chain = require('../src')

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
