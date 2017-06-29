const log = require('fliplog')
const Chain = require('../src')

const todo = console.log
todo('keys can be mapped in reverse for back to api!')

test('keys can be remapped', () => {
  // window.remapTest.from({eh: 'canada eh!', dis: 'like dis n like dat n like dis uh huh', mchammer: 'cannot touch this'})
  class RemapTest extends Chain {
    constructor(parent) {
      super(parent)

      /* prettier-ignore */
      this
        .remap('dis', 'dat')
        .remap('eh', 'canada')
    }
  }

  const remap = new RemapTest().from({dis: 'dis', eh: 'eh', other: true})
  expect(remap.get('dat') === 'dis').toBe(true)
  expect(remap.get('canada') === 'eh').toBe(true)
  expect(remap.get('other')).toBe(true)
})

test('keys can be remapped - using .set not .from', () => {
  const remap = new Chain().remap('dis', 'dat').remap('eh', 'canada')
  expect(remap.set('dis', '___').get('dat') === '___').toBe(true)
  expect(remap.set('eh', '___').get('canada') === '___').toBe(true)
})
test('keys can be remapped - using an object', () => {
  const remap = new Chain().remap({
    dis: 'dat',
    eh: 'canada',
  })
  expect(remap.set('dis', '___').get('dat') === '___').toBe(true)
  expect(remap.set('eh', '___').get('canada') === '___').toBe(true)
})

test('values can be transformed', () => {
  class TransformTest extends Chain {
    constructor(parent) {
      super(parent)

      this.transform('dis', val => (typeof val === 'string' ? val : val.id))
    }
  }

  const transform = new TransformTest().set('dis', 'string')
  expect(transform.get('dis') === 'string').toBe(true)
  transform.set('dis', {id: 'string'})
  expect(transform.get('dis') === 'string').toBe(true)
})
