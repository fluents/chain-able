const test = require('ava')
const log = require('fliplog')
const {Chain, FactoryChain, ChainedSet} = require('../dist')

test('factory people', t => {
  class Things extends Chain {
    constructor(parent) {
      super(parent)
      this.people = new ChainedSet(this)
    }
    person() {
      const person = new FactoryChain(this)
      person
        // .prop also accepts an optional callback,
        // for nestable nestable chains
        .prop('name')
        .prop('age')
        .prop('email')
        .chainUpDown(this.person)
        .chainUpDowns(['person'])
        .onDone(personChain => {
          this.people.add(personChain)
          return this
        })

      return person
    }
  }

  const things = new Things()
  // log.quick(things)
  /* prettier-ignore */
  things
    .person()
      .name('sue')
    // here it would not .end, but we call .person, which is a .chainUpDown,
    // so it ends and starts another one
    .person()
      .age(100)
      .name('john')
      .email('@')
  // ^ since we called all 3 keys (age, name, email) it auto .end()s

  t.true(things.people.length === 2)
})
