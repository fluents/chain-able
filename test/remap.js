const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

test.todo('keys can be mapped in reverse for back to api!')

test('keys can be remapped', t => {
  // window.remapTest.from({eh: 'canada eh!', dis: 'like dis n like dat n like dis uh huh', mchammer: 'cannot touch this'})
  class RemapTest extends Chain {
    constructor(parent) {
      super(parent)

      /* prettier-ignore */
      this
        .remapKey('dis', 'dat')
        .remapKey('eh', 'canada')
    }
  }

  const remap = new RemapTest().from({dis: 'dis', eh: 'eh', other: true})
  t.true(remap.get('dat') === 'dis')
  t.true(remap.get('canada') === 'eh')
  t.true(remap.get('other'))
})

test('values can be transformed', t => {
  class TransformTest extends Chain {
    constructor(parent) {
      super(parent)

      this.transform('dis', val => (typeof val === 'string' ? val : val.id))
    }
  }

  const transform = new TransformTest().set('dis', 'string')
  t.true(transform.get('dis') === 'string')
  transform.set('dis', {id: 'string'})
  t.true(transform.get('dis') === 'string')
})
