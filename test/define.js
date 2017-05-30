const test = require('ava')
const log = require('fliplog')
const DefineChain = require('../dist')

test('defineGetSet', t => {
  class Defined extends DefineChain {
    constructor(parent) {
      super(parent)
      this.defineGetSet(['eh'])
    }
    eh(val) {
      return this.set('eh', val)
    }
  }

  const prop = Object.getOwnPropertyDescriptor
  const defined = new Defined()
  const eh = prop(defined, 'eh')

  t.true(typeof eh.set === 'function')
  t.true(typeof eh.get === 'function')
  t.true(eh.enumerable === true)
  t.true(eh.configurable === true)

  // log.quick(defined, {eh, ehOh, getEhOh, setEhOh})
})

test('extendGetSet', t => {
  class Defined extends DefineChain {
    constructor(parent) {
      super(parent)
      this.extendGetSet(['ehOh'])
    }
  }

  const prop = Object.getOwnPropertyDescriptor
  const defined = new Defined()
  const ehOh = prop(defined, 'ehOh')
  const getEhOh = prop(defined, 'getEhOh')
  const setEhOh = prop(defined, 'setEhOh')

  t.true(typeof ehOh.get === 'function')
  t.true(typeof ehOh.set === 'function')
  t.true(ehOh.enumerable === true)
  t.true(ehOh.configurable === true)

  t.true(typeof getEhOh.value === 'function')
  t.true(getEhOh.value.name === 'getter')
  t.true(typeof setEhOh.value === 'function')
  t.true(setEhOh.value.name === 'setter')
  t.true(getEhOh.enumerable === true)
  t.true(setEhOh.enumerable === true)
  t.true(getEhOh.configurable === true)
  t.true(setEhOh.configurable === true)

  // log.quick(defined, {ehOh, getEhOh, setEhOh})
})

test('extendGetSet getter setter depending on value', t => {
  class Defined extends DefineChain {
    constructor(parent) {
      super(parent)
      this.extendGetSet(['ehOh'])
    }
  }

  const defined = new Defined()

  defined.ehOh(true)

  t.true(defined.length === 1)

  const ehOh = defined.ehOh()
  t.true(ehOh)
  defined.ehOh = false

  const loose = defined.ehOh == false
  const coerced = ~defined.ehOh === -1
  const valueOf = defined.ehOh.valueOf() === false

  t.true(loose)
  t.true(coerced)
  t.true(valueOf)

  // failing
  // const bool = !!defined.ehOh == false
  // const Bool = Boolean(defined.ehOh)
  // t.true(bool)
})
