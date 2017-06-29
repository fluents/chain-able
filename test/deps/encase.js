const log = require('fliplog')
const encase = require('../../src/deps/encase')

/* istanbul ignore next: depreciated */
test.skip('encase.rethrow', () => {
  expect.assertions(1)
  const encased = encase(function() {
    throw new Error('rethrow yay')
  })
  // encased.onInvalid(function(e) {
  //   t.true(e instanceof Error, 'called onInvalid with valid Error')
  // })
  encased.rethrow(true)

  try {
    const value = encased()
    console.log('value', {value})
  }
  catch (e) {
    return expect(e instanceof Error).toBe(true)
  }

  /* istanbul ignore next: tests fails if this is hit */
  fail()
})

test('encase - return error', () => {
  expect.assertions(1)
  const encased = encase(function() {
    throw new Error('rethrow yay')
  })

  const error = encased()
  expect(error instanceof Error).toBe(true)
})

test('encase - result', () => {
  expect.assertions(1)
  const encased = encase(function() {
    return true
  })

  const result = encased()
  expect(result).toBe(true)
})
