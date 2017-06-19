const test = require('ava')
const log = require('fliplog')
const {Chain} = require('../dist')

test(`can call`, t => {
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

test(`observe is called for multiple properties`, t => {
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
      if (called++ === 0) return t.true(data.eh)
      t.false(data.timbuck)
    })
    .eh(true)
    .timbuck(false)
    .eh(true)
    .timbuck(false)
})

test(`observe can use magic match`, t => {
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

test(`observe can use magic with function or regexes too`, t => {
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

test.failing(`observe works for dot prop`, t => {
  const chain = new Chain()
  t.plan(2)

  /* prettier-ignore */
  chain
    .extend(['timbuck'])
    .observe(['canada.eh'], data => {
      return t.true(data.canada.eh)
    })
    .merge({canada: {eh: true}})
    .set('canada.eh', 1)
    .eh(true)
    .timbuck(true)
})
