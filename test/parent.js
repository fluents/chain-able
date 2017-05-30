const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

test('factory people', t => {
  class Decorator extends Chain {
    constructor(parent) {
      super(parent)
      this.decorateParent(['easy'])
      this.decorateParent([
        {
          advanced: this.advanced.bind(this),
        },
      ])
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

  const master = new Master()
  master.advanced('a+')
  master.easy(true)
  t.true(master.get('easy-peasy'))
  t.true(master.eh.get('advanced') === 'a+')
})
