const test = require('ava')
const log = require('fliplog')
const dist = require('../index.cjs.js')

const exported = [
  'Chainable',
  'ChainedSet',
  'ChainedMap',
  // 'ChainedMapBase',
  'FactoryChain',
  'MergeChain',
  'MethodChain',
  'Chain',
  'merge',
  'compose',
  'clean',
]

test('works with dist', t => {
  t.plan(exported.length)
  console.log({exported})
  exported
    .map(exp => typeof dist[exp])
    .forEach(type => t.true(type === 'object' || type === 'function'))
})

test('dist classes', t => {
  const {
    Chain,
    Chainable,
    ChainedSet,
    ChainedMap,
    FactoryChain,
    compose,
    merge,
    clean,
  } = dist

  class N extends Chain {}
  class C extends Chainable {}
  class S extends ChainedSet {}
  class M extends ChainedMap {}
  // class F extends FactoryChain {}
  class P extends compose() {
    fn(arg) {
      if (arg === true) {
        throw new Error()
      }
    }
  }

  const n = new N()
  const c = new C()
  const s = new S()
  const m = new M()
  const p = new P()
  // const f = new F(c)

  const d = dist.merge({eh: true}, {eh1: true})
  t.true(typeof d === 'object')
  t.true(c instanceof Chainable)
  t.true(s instanceof ChainedSet)
  t.true(m instanceof ChainedMap)
  // t.true(f instanceof ChainedMap)
  // t.true(f instanceof FactoryChain)
  t.true(p instanceof Chainable)
  t.true(n instanceof Chainable)

  const objs = [n, m, p]

  p.methods(['canada']).getSet().define().build()
  p.setCanada(true)
  p.getCanada()
  p.canada = false
  p.canada
  p.transform('eh', v => !!v)
  p.observe('eh', v => {})
  p.observe(['ug'], v => {})
  p.method('fn').encase().catch(() => {}).then(() => {}).build()
  p.fn(true)
  p.fn(false)
  p.defineGetSet(['fn'])
  p.typed().name('ug').type(() => true).end()
  p.typed('ug2').type(val => !!val).onValid(() => {}).onInvalid(() => {})
  p.ug(true)
  p.ug2(true)
  p.ug2(false)
  s.when(true)
  s.when(false)
  s.add('eh')
  try {
    s.merge([false, true])
  }
  catch (e) {
    console.log('fix spread')
  }
  s.values()
  s.size
  s.className
  objs.forEach(obj => {
    obj.size
    obj.className
    obj.when(true)
    obj.when(false)
    obj.extend(['eh'])
    obj.set('eh', 'eh')
    obj.has('eh')
    obj.get('eh')
    clean(obj.entries())
    clean(obj.entries(true))
    obj.merge({silly: true, eh: false})
    obj.values()
    obj.delete('extra')
    obj.set('ug', 0)
    obj.delete('ug')
    obj.from({extra: true, eh: [false]})
    obj.clear()
    obj + 1
    obj + ''
    let vals = []
    for (var o of obj) {
      vals.push(o)
    }
  })
})
