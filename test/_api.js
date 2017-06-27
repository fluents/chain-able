const exportedNames = [
  'Chainable',
  'ChainedSet',
  'ChainedMap',
  // 'ChainedMapBase',
  'FactoryChain',
  'MergeChain',
  'MethodChain',
  'Chain',
  'builder',
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

// @TODO: use `is` to validate these
// @TODO: use schema & decorators
function testExportedNames(dist, exported = exportedNames) {
  return exported.map(
    exp => dist.is.isFunction(dist[exp]) || dist.is.isObj(dist[exp])
  )
}

function testDistedAPI(dist) {
  const {
    Chain,
    Chainable,
    ChainedSet,
    ChainedMap,
    FactoryChain,
    compose,
    merge,
    clean,
    eq,
  } = dist

  class N extends Chain {}
  class C extends Chainable {}
  class S extends ChainedSet {}
  class M extends ChainedMap {}
  class F extends FactoryChain {}
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
  const f = new F(c)

  const d = dist.merge({eh: true}, {eh1: true})
  var TEST = []
  TEST.push(typeof d === 'object')
  TEST.push(c instanceof Chainable)
  TEST.push(s instanceof ChainedSet)
  TEST.push(m instanceof ChainedMap)
  TEST.push(f instanceof ChainedMap)
  TEST.push(f instanceof FactoryChain)
  TEST.push(p instanceof Chainable)
  TEST.push(n instanceof Chainable)

  const objs = [n, m, p]
  merge(null, undefined)
  merge({}, [])
  const merge1 = {
    a: [],
    t: {
      r: {
        u: {
          e: {
            num: 1,
            str: '1',
            symbol: Symbol('1'),
            arr: [true, new Boolean(true)],
            map: new Map(),
            iterator: new Map().entries(),
            regexp: new RegExp(),
            date: new Date(),
          },
        },
      },
    },
  }
  const merge2 = {
    b: [],
    eh: [Number(1), new String('obj')],
  }
  const merges = [merge1, merge2]
  const merged = merge(merge1, merge2, {clone: true})
  !eq(merges, merged)
  !eq(merge2, merge1)
  !eq(merged, merge2)
  !eq(merged, merge1)
  eq(merged, merged)
  eq(merge2, merge2)
  eq(1, 1)

  p.methods(['canada']).getSet().define().build()
  p.setCanada(true)
  p.getCanada()
  p.canada = false
  p.canada
  p.transform('eh', v => !!v)
  p.observe('eh', NO_OP)
  p.observe(['ug'], NO_OP)
  p.method('fn').encase().catch(() => {}).then(() => {}).build()
  p.fn(true)
  p.fn(false)
  p.method(['fn']).getSet().define().build()
  p.method('ug').type(() => true).build()
  ;+p.method('numnums')
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
  s.merge([false, true])
  s.values()
  s.size
  s.className
  objs.forEach(obj => {
    obj.size
    obj.className
    obj.when('name')
    obj.when(true, NO_OP, () => fail('called false'))
    obj.when(false, NO_OP, () => t.pass())
    obj.when(true, NO_OP)
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

module.exports = {exportedNames, testExportedNames, testDistedAPI}
