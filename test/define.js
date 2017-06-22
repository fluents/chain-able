const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')
const getDescriptor = require('../deps/util/getDescriptor')

test('.methods.define() /defineGetSet', t => {
  class Defined extends Chain {
    constructor(parent) {
      super(parent)
      this.methods(['eh']).define().build()
    }
    eh(val) {
      return this.set('eh', val)
    }
  }

  const defined = new Defined()
  const eh = getDescriptor(defined, 'eh')

  t.true(typeof eh.set === 'function')
  t.true(typeof eh.get === 'function')
  t.true(eh.enumerable === true)
  t.true(eh.configurable === true)

  // log.quick(defined, {eh, ehOh, getEhOh, setEhOh})
})

test('.getSet().define() /.extendGetSet', t => {
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

  t.true(typeof ehOh.get === 'function')
  t.true(typeof ehOh.set === 'function')
  t.true(ehOh.enumerable === true)
  t.true(ehOh.configurable === true)

  t.true(typeof getEhOh.value === 'function')
  // t.true(getEhOh.value.name === 'getter')
  t.true(typeof setEhOh.value === 'function')
  // t.true(setEhOh.value.name === 'setter') <- this can be overriden for debugging
  t.true(getEhOh.enumerable === true)
  t.true(setEhOh.enumerable === true)
  t.true(getEhOh.configurable === true)
  t.true(setEhOh.configurable === true)

  // log.quick(defined, {ehOh, getEhOh, setEhOh})
})

test.skip('extendGetSet [getter/setter] depending on value', t => {
  class Defined extends Chain {
    constructor(parent) {
      super(parent)
      // this.extendGetSet(['ehOh'])
      this.methods(['ehOh']).getSet().build()
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

test.only('.methods(obj)', t => {
  t.plan(3)
  class Defined extends Chain {
    constructor(parent) {
      super(parent)
      ;+this.method({
        ehOh: {
          get(arg) {
            // require('fliplog').trace().stack().exit()
            t.true(arg === undefined)
            return 0
          },
          set(arg) {
            t.true(arg)
          },
        },
        ohEh(arg) {
          t.true(arg === 0)
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

test.failing('.meta', t => {
  const chained = new Chain()
  ;+chained.method('eh') + chained.method('bah')

  t.true(chained.meta.store.shorthands.size === 2)
})
