const test = require('ava')
const log = require('fliplog')
const {Chain} = require('../dist')

/* istanbul ignore next: depreciated */
test.skip('.dotter access', t => {
  t.plan(4)
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
          // @NOTE: this is really for when not extending `dot`
          // if (this.has(first)) return super.get(first)
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

test.todo('can disable dot')
test.todo('can use dot-prop on .current')
test.todo('can use dot-prop on Arrays')

test('can use dot-prop on .set', t => {
  const chain = new Chain()
  chain.set('moose.simple', 1)
  t.pass()
})

test('can use dot-prop on .has', t => {
  t.plan(2)
  var chain = new Chain()
  chain.set('moose.simple', true)
  // var eh = ({
  //   chain,
  //   hasSimple: chain.has('moose.simple'),
  //   getSimple: chain.get('moose.simple'),
  //   hasNotReal: chain.has('moose.notReal'),
  //   entries: chain.entries(),
  // })

  t.true(chain.has('moose.simple'))
  t.false(!!chain.has('moose.notReal'))
})

test('can use dot-prop on .delete', t => {
  t.plan(2)
  const chain = new Chain()
  chain.set('moose.canada.eh', true)
  chain.set('moose.canada.igloo', true)

  chain.delete('moose.canada.eh')
  t.true(chain.has('moose.canada.igloo'))
  t.true(chain.entries().moose.canada.igloo)
})

test('can use dot-prop on .delete', t => {
  const chain = new Chain()
  chain.set('moose.canada.eh', true)
  chain.set('moose.canada.igloo', true)

  chain.delete('moose.canada.eh')
  t.true(chain.has('moose.canada.igloo'))
  t.true(chain.entries().moose.canada.igloo)
})

test('can use dot-prop on .get', t => {
  t.plan(1)
  const chain = new Chain()
  chain.set('moose.canada.eh', true)
  chain.set('moose.canada.igloo', true)

  chain.delete('moose.canada.eh')
  t.true(chain.get('moose.canada.igloo'))
})

test('can use dot-prop with an array', t => {
  t.plan(1)
  const chain = new Chain()
  chain.set('moose.canada.eh', true)
  t.true(chain.get(['moose', 'canada', 'eh']))
})

test('can use dot-prop fallback value', t => {
  t.plan(1)
  const chain = new Chain()
  t.true(chain.get(['moose', 'canada', 'igloo'], true))
})
