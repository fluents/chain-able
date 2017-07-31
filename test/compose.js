const log = require('fliplog')
const {compose} = require('../src')
// const ChainedMap = require('../ChainedMap')
// const compose = require('../compose')

const PreComposed = compose()

class Composed extends PreComposed { }

test('composable', () => {
  const map = new Composed({isParent: true})
  expect(map.parent).toEqual({isParent: true})
})

test('compose custom extensions', () => {
  class CustomTarget {
    constructor(parent) {
      this.ok = true
    }
  }
  const CustomComposer = SuperClass => {
    class Customed extends SuperClass {

    }
    return Customed
  }
  const CustomComposed = compose(CustomTarget, [CustomComposer])
  const map = new CustomComposed()
  expect(map.ok).toBe(true)
  expect(map instanceof CustomTarget).toBe(true)
})

test('clearable', () => {
  const map = new Composed({isParent: true}).set('eh', 'eh!')

  expect(map.entries()).toEqual({
    eh: 'eh!',
  })

  map.clear()
  expect(map.store).toEqual(new Map())
})

test('mergeable', () => {
  const map = new Composed({isParent: true})
    .extend(['igloo'])
    .set('eh', 'eh!')
    .set('eh2', 'eh2!')
    .merge({dis: 1, eh: ['string-to-arr'], igloo: 0, neuw: Boolean})

  expect(map.entries()).toEqual({
    eh: ['string-to-arr'],
    eh2: 'eh2!',
    dis: 1,
    igloo: 0,
    neuw: Boolean,
  })
})

test('.className', () => {
  expect.assertions(1)
  const chain = new Composed()
  expect(typeof chain.className === 'string').toBe(true)
})

test('extend class as decorator', () => {
  class CustomTarget { }
  const CustomComposer = SuperClass => {
    class Customed extends SuperClass { }
    return Customed
  }
  const CustomComposed = compose(CustomTarget, [CustomComposer])

  class Target {
    get extended() {
      return true
    }
  }
  class Target2 {
    eh() { }
    get extended2() {
      return true
    }
  }
  const CT = compose(Target, undefined)
  class ComposedTarget extends CT { }
  class ComposedTarget2 extends compose(Target2) { }
  const map = new ComposedTarget({isParent: true})
  const map2 = new ComposedTarget2({isParent: true})
  // log.prettyformat(new CustomComposed()).echo()
  // log.prettyformat(map).echo()
  // log.prettyformat(new ComposedTarget2()).echo()
  // log.data(new ComposedTarget2() instanceof ComposedTarget2).echo()
  // log.data(map instanceof Target).echo()

  expect(map.parent).toEqual({isParent: true})
  expect(map.extended).toBe(true)
})
