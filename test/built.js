const test = require('ava')
const log = require('fliplog')
const devDist = require('../dists/cjs')
const cjsDist = require('../dists/dev')
const umd = require('../dists/umd')

const exportedNames = [
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
  'is',
  'traverse',
  'camelCase',
  'toArr',
  'dot',
  'matcher',
  'eq',
  'reduce',
  'meta',
  'validators',
]
const dists = [cjsDist, umd, devDist]

function testExportNames(t, exported, dist) {
  t.plan(exported.length)
  exported
    .map(exp => {
      return typeof dist[exp]
    })
    .forEach(type => t.true(type === 'object' || type === 'function'))
}

function testDistedAPI(t, dist) {
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
  p.method(['fn']).getSet().define().build()
  p.method('ug').type(() => true).build()
  p
    .method('ug2')
    .type(val => !!val)
    .onValid(() => {})
    .onInvalid(() => {})
    .build()
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
}

test('works with dist', t => {
  testExportNames(t, exportedNames, dists[0])
  // dists.map(dist => testExportNames(t, exportedNames, dist))
})

test('dist classes', t => {
  testDistedAPI(t, dists[0])
  // dists.map(dist => testDistedAPI(t, dist))
})
