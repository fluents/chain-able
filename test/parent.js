const log = require('fliplog')
const Chain = require('../src')

class Decorator extends Chain {
  constructor(parent) {
    super(parent)
    this.methods(['easy']).decorate(parent).build()
    this.methods('advanced')
      .onCall(this.advanced.bind(this))
      .decorate(parent)
      .build()
  }
  advanced(arg) {
    this.set('advanced', arg)
    return this.parent
  }
  easy(arg) {
    this.parent.set('easy-peasy', arg)
  }
}

class Master extends Chain {
  constructor(parent) {
    super(parent)
    this.eh = new Decorator(this)
  }
}

test('.decorate(parent)', () => {
  const master = new Master()
  master.advanced('a+')
  master.easy(true)
  expect(master.get('easy-peasy')).toBe(true)
  expect(master.eh.get('advanced') === 'a+').toBe(true)
})
test.skip('.decorate(parent).get(notstore.child)', () => {
  const master = new Master()
  master.advanced('a+')
  expect(master.get('eh.advanced') === 'a+').toBe(true)
})
