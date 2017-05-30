const test = require('ava')
const log = require('fliplog')
const {Chain} = require('../dist')

class EasyFluent extends Chain {
  constructor(parent) {
    super(parent)

    // extend a list of strings for easy chainable methods
    this.extend(['eh'])

    // same as .extend, but with default values
    this.extendWith(['canada'], true)
  }

  // if more advanced data changes are needed
  // or if the syntax is preferred for use with typescript or flowtype
  // .set, .get, .has are available
  igloo(igloo) {
    this.set('igloo', igloo)
    return this
  }
}

test('entries', t => {
  const config = new EasyFluent()
    .igloo('fire')
    .canada(false)
    .eh('moose')
    .entries()

  t.deepEqual(config, {igloo: 'fire', canada: false, eh: 'moose'})
})

test('easy', t => {
  const config = new EasyFluent()
    .igloo('fire')
    .canada(false)
    .eh('moose')
    .entries()

  // this is == config
  const hydrated = new EasyFluent().from(config).entries()

  t.deepEqual(hydrated, config)

  // canada is now true
  const merged = new EasyFluent().merge(config).merge({canada: true}).entries()
  t.true(merged.canada)
})
