const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

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

test('.decorate(parent)', t => {
  const master = new Master()
  master.advanced('a+')
  master.easy(true)
  t.true(master.get('easy-peasy'))
  t.true(master.eh.get('advanced') === 'a+')
})
test.failing('.decorate(parent).get(notstore.child)', t => {
  const master = new Master()
  master.advanced('a+')
  t.true(master.get('eh.advanced') === 'a+')
})
