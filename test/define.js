const log = require('fliplog')
const Chain = require('../src')
const getDescriptor = require('../deps/util/getDescriptor')

test('.methods.define() /defineGetSet', () => {
  class Defined extends Chain {
    constructor(parent) {
      super(parent)
      this.methods(['eh']).define().build()
    }
    /* istanbul ignore next: testing values - not calling */
    eh(val) {
      return this.set('eh', val)
    }
  }

  const defined = new Defined()
  const eh = getDescriptor(defined, 'eh')

  expect(typeof eh.set === 'function').toBe(true)
  expect(typeof eh.get === 'function').toBe(true)
  expect(eh.enumerable === true).toBe(true)
  expect(eh.configurable === true).toBe(true)

  // log.quick(defined, {eh, ehOh, getEhOh, setEhOh})
})

test('.getSet().define() /.extendGetSet', () => {
  class Defined extends Chain {
    constructor(parent) {
      super(parent)
      // this.extendGetSet(['ehOh'])
      this.methods(['ehOh']).getSet().define().build()
    }
  }

  const defined = new Defined()
  const ehOh = getDescriptor(defined, 'ehOh')
  const getEhOh = getDescriptor(defined, 'getEhOh')
  const setEhOh = getDescriptor(defined, 'setEhOh')

  expect(typeof ehOh.get === 'function').toBe(true)
  expect(typeof ehOh.set === 'function').toBe(true)
  expect(ehOh.enumerable === true).toBe(true)
  expect(ehOh.configurable === true).toBe(true)

  expect(typeof getEhOh.value === 'function').toBe(true)
  // t.true(getEhOh.value.name === 'getter')
  expect(typeof setEhOh.value === 'function').toBe(true)
  // t.true(setEhOh.value.name === 'setter') <- this can be overriden for debugging
  expect(getEhOh.enumerable === true).toBe(true)
  expect(setEhOh.enumerable === true).toBe(true)
  expect(getEhOh.configurable === true).toBe(true)
  expect(setEhOh.configurable === true).toBe(true)

  // log.quick(defined, {ehOh, getEhOh, setEhOh})
})

test.skip('extendGetSet [getter/setter] depending on value', () => {
  class Defined extends Chain {
    constructor(parent) {
      super(parent)
      // this.extendGetSet(['ehOh'])
      this.methods(['ehOh']).getSet().build()
    }
  }

  const defined = new Defined()

  defined.ehOh(true)

  expect(defined.length === 1).toBe(true)

  const ehOh = defined.ehOh()
  expect(ehOh).toBe(true)
  defined.ehOh = false

  // const loose = defined.ehOh == false
  const coerced = ~defined.ehOh === -1
  const valueOf = defined.ehOh.valueOf() === false

  // expect(loose).toBe(true)
  expect(coerced).toBe(true)
  expect(valueOf).toBe(true)

  // failing
  // const bool = !!defined.ehOh == false
  // const Bool = Boolean(defined.ehOh)
  // t.true(bool)
})

test('.methods(obj)', () => {
  expect.assertions(3)
  class Defined extends Chain {
    constructor(parent) {
      super(parent)
      ;+this.method({
        ehOh: {
          get(arg) {
            // require('fliplog').trace().stack().exit()
            expect(arg === undefined).toBe(true)
            return 0
          },
          set(arg) {
            expect(arg).toBe(true)
          },
        },
        ohEh(arg) {
          expect(arg === 0).toBe(true)
        },
      })
    }
  }

  const defined = new Defined()
  defined.setEhOh(true)
  defined.getEhOh()

  defined.ohEh(0)
  // defined.setOhEh(0)
  // defined.getOhEh()
})

test.skip('.meta', () => {
  const chained = new Chain()
  ;+chained.method('eh') + chained.method('bah')

  expect(chained.meta.store.shorthands.size === 2).toBe(true)
})
