const test = require('ava')
const log = require('fliplog')
const {Chain} = require('../dist')

// dot
test.todo('can use dot-prop on current')
test.todo('can use dot-prop on get')

class DotChain extends Chain {
  constructor(parent) {
    super(parent)
    this.nested = new Chain(this)
    this.nested.set('eh', true)
  }
  get(key) {
    const dotter = this.dotter()
      .name(key)
      .dotted((first, accessor, full) => {
        // console.log({first, accessor, full, val: super.get(full)})
        if (first === 'nested') return this.nested.get(accessor.join('.'))
        if (this.has(first)) return super.get(first)
        if (this.has(full)) return super.get(full)
        return super.get(full)
      })
      .otherwise(full => {
        // console.log('otherwise', {full})
        return super.get(full)
      })
      .value()

    return dotter
  }
}

test('dot access', t => {
  t.plan(4)
  const chain = new DotChain()

  const nested = chain.get('nested.eh')
  t.true(nested)

  chain.set('moose.simple', 1)
  // log.quick(chain.get('moose.simple'))
  t.true(chain.get('moose.simple') === 1)

  chain.set('canada', '🇨🇦')
  t.true(chain.get('canada') === '🇨🇦')
  t.true(chain.get('not-set') === undefined)
})
