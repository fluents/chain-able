const test = require('ava')
const log = require('fliplog')
const {Chain} = require('../dist')

test.todo('observe works for dot prop')

test(`
  - can call
`, t => {
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

test(`
  - observe is called for multiple properties
`, t => {
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
