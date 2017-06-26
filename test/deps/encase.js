const test = require('ava')
const log = require('fliplog')
const encase = require('../../dist/deps/encase')

/* istanbul ignore next: depreciated */
test.failing('encase.rethrow', t => {
  t.plan(1)
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
    return t.true(e instanceof Error, 'was rethrown')
  }

  /* istanbul ignore next: tests fails if this is hit */
  t.fail()
})

test('encase - return error', t => {
  t.plan(1)
  const encased = encase(function() {
    throw new Error('rethrow yay')
  })

  const error = encased()
  t.true(error instanceof Error)
})

test('encase - result', t => {
  t.plan(1)
  const encased = encase(function() {
    return true
  })

  const result = encased()
  t.true(result)
})
