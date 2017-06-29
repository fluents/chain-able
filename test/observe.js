// const log = require('fliplog')
const {Chain} = require('../src')

test(`can observe a string property with .set`, () => {
  const chain = new Chain()

  /* prettier-ignore */
  chain
    .extend(['eh'])
    .observe('eh', data => {
      expect(data.eh).toBe(true)
    })
    .eh(true)
})

test(`observe is called for [properties]`, () => {
  const chain = new Chain()
  expect.assertions(2)

  let called = 0
  /* prettier-ignore */
  chain
    .extend(['eh', 'timbuck'])
    .observe(['eh', 'timbuck'], data => {
      if (called++ === 0) return expect(data.eh).toBe(true)
      expect(data.timbuck).toBe(false)
    })
    .eh(true)
    .timbuck(false)
})

test(`observe is called only when changed`, () => {
  const chain = new Chain()
  expect.assertions(2)

  let called = 0
  /* prettier-ignore */
  chain
    .extend(['eh', 'timbuck'])
    .observe(['eh', 'timbuck'], data => {
      // log.data({data}).echo()
      called = called + 1
      if (called === 1) {
        // undefined the first time
        expect(data.eh && data.timbuck === undefined).toBe(true)
      }
      else if (called === 2) {
        expect(data.eh === true && data.timbuck === false).toBe(true)
      }
      // istanbul-ignore next: should never be called
      else if (called === 3) {
        expect(true).toBeFalsy()
      }
    })
    .eh(true)
    .timbuck(false)
    .eh(true)
    .timbuck(false)
})

test(`observe can use magic *`, () => {
  const chain = new Chain()
  expect.assertions(1)

  /* prettier-ignore */
  chain
    .extend(['canada', 'timbuck'])
    .observe(['canad*'], data => {
      return expect(data.canada).toBe(true)
    })
    .canada(true)
    .canada(true)
    .timbuck(false)
})

test(`observe can use magic with [function, regexp] too`, () => {
  const chain = new Chain()
  expect.assertions(2)

  /* prettier-ignore */
  chain
    .extend(['canada', 'timbuck'])
    .observe([x => false, new RegExp('timbuck'), '*'], data => {
      return expect(data.canada).toBe(true)
    })
    .canada(true)
    .canada(true)
    .timbuck(false)
})

test(`observe works for .* prop `, () => {
  expect.assertions(3)

  const chain = new Chain()
  chain
    .observe(['canada.*'], data => {
      // log.data({data}).echo()
      expect(data.canada.eh).toBeTruthy()
    })
    .merge({canada: {eh: true}})
    .merge({canada: {arr: [0, {'1': 2}], eh: {again: true}}})
    .set('canada.eh', 1)
    .set('canada', {})
    .set('not-canada', {})
})

test(`observe works for dot prop`, () => {
  const chain = new Chain()
  expect.assertions(2)

  /* prettier-ignore */
  chain
    .extend(['timbuck'])
    .observe(['canada.eh'], data => {
      // log.data({data}).echo()
      return expect(data.canada.eh).toBeTruthy()
    })
    .merge({canada: {eh: true}})
    .set('canada.eh', 1)
    .set('eh', false)
    .timbuck(true)
})
