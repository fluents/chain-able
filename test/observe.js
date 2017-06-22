const test = require('ava')
const log = require('fliplog')
const {Chain} = require('../dist')

test(`can observe a string property with .set`, t => {
  const chain = new Chain()

  /* prettier-ignore */
  chain
    .extend(['eh'])
    .observe('eh', data => {
      t.true(data.eh)
      t.pass()
    })
    .eh(true)
})

test(`observe is called for [properties]`, t => {
  const chain = new Chain()
  t.plan(2)

  let called = 0
  /* prettier-ignore */
  chain
    .extend(['eh', 'timbuck'])
    .observe(['eh', 'timbuck'], data => {
      if (called++ === 0) return t.true(data.eh)
      t.false(data.timbuck)
    })
    .eh(true)
    .timbuck(false)
})

test(`observe is called only when changed`, t => {
  const chain = new Chain()
  t.plan(2)

  let called = 0
  /* prettier-ignore */
  chain
    .extend(['eh', 'timbuck'])
    .observe(['eh', 'timbuck'], data => {
      // log.data({data}).echo()
      called = called + 1
      if (called === 1) {
        // undefined the first time
        t.true(data.eh && data.timbuck === undefined)
      }
      else if (called === 2) {
        t.true(data.eh === true && data.timbuck === false)
      }
      // istanbul-ignore next: should never be called
      else if (called === 3) {
        t.fail()
      }
    })
    .eh(true)
    .timbuck(false)
    .eh(true)
    .timbuck(false)
})

test(`observe can use magic *`, t => {
  const chain = new Chain()
  t.plan(1)

  /* prettier-ignore */
  chain
    .extend(['canada', 'timbuck'])
    .observe(['canad*'], data => {
      return t.true(data.canada)
    })
    .canada(true)
    .canada(true)
    .timbuck(false)
})

test(`observe can use magic with [function, regexp] too`, t => {
  const chain = new Chain()
  t.plan(2)

  /* prettier-ignore */
  chain
    .extend(['canada', 'timbuck'])
    .observe([x => false, new RegExp('timbuck'), '*'], data => {
      return t.true(data.canada)
    })
    .canada(true)
    .canada(true)
    .timbuck(false)
})

test(`observe works for .* prop `, t => {
  t.plan(3)

  const chain = new Chain()
  chain
    .observe(['canada.*'], data => {
      log.data({data}).echo()
      t.truthy(data.canada.eh)
    })
    .merge({canada: {eh: true}})
    .merge({canada: {arr: [0, {'1': 2}], eh: {again: true}}})
    .set('canada.eh', 1)
    .set('canada', {})
    .set('not-canada', {})
})

test(`observe works for dot prop`, t => {
  const chain = new Chain()
  t.plan(2)

  /* prettier-ignore */
  chain
    .extend(['timbuck'])
    .observe(['canada.eh'], data => {
      // log.data({data}).echo()
      return t.truthy(data.canada.eh)
    })
    .merge({canada: {eh: true}})
    .set('canada.eh', 1)
    .set('eh', false)
    .timbuck(true)
})
