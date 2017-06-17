const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

class Encased extends Chain {
  couldThrow(shouldThrow = false) {
    if (shouldThrow === true) {
      throw new Error('should throw')
    }
    return this
  }
  couldThrowToo(shouldThrow = false) {
    if (shouldThrow === true) {
      throw new Error('should throw 2')
    }
    return this
  }
}

test('encase(method) not existing', t => {
  t.plan(1)

  try {
    new Encased().encase('never-ever')
    t.fail()
  }
  catch (e) {
    t.pass()
  }
})

test('encase(method) valid', t => {
  t.plan(1)
  new Encased()
    .encase('couldThrow')
    .then(val => t.pass())
    .catch(e => t.fail(e))
    .couldThrow('no throw!')
})

test('encase(method) valid - no .catch', t => {
  t.plan(1)
  new Encased()
    .encase('couldThrow')
    .then(val => t.pass())
    .couldThrow('no throw!')
})

test('encase(method) inValid', t => {
  t.plan(1)
  new Encased()
    .encase('couldThrow')
    .then(val => t.fail(val))
    .catch(e => t.pass(e))
    .couldThrow(true)
})

test('encase(method) inValid - no .then', t => {
  t.plan(1)
  new Encased().encase('couldThrow').catch(e => t.pass()).couldThrow(true)
})

test('encase(fn) valid', t => {
  t.plan(1)

  const fn = arg => {
    if (arg === false) return 'the test'
    throw new Error('encased yo')
  }

  new Encased()
    .wrap(chain => (chain.fn = fn))
    .encase('fn')
    .then(arg => t.pass())
    .catch(e => t.fail(e))
    .fn(false)
})

test('encase(fn) inValid', t => {
  t.plan(1)

  /* prettier-ignore */
  new Encased()
    .wrap(encased => encased.fn = arg => {
      throw new Error('encased yo')
    })
    .encase('fn')
    .catch(() => t.pass())
    .fn(true)
})

test('encase(method) x2 + fn * .then, .catch, .chainWrap, .wrap', t => {
  t.plan(6)

  const fn = arg => {
    if (arg === false) return true
    throw new Error('encased yo')
  }

  const isError = e => t.true(e instanceof Error)
  const isTruthy = arg => t.truthy(arg)

  const encased = new Encased()
    .wrap(chain => (chain.fn = fn))
    .encase('fn')
    .then(isTruthy)
    .catch(isError)
    .chainWrap('fn')
    .fn(true)
    .fn(false)
    // two
    .encase('couldThrowToo')
    .catch(isError)
    .then(isTruthy)
    // three
    .encase('couldThrow')
    .catch(isError)
    .then(isTruthy)
    // return this
    .chainWrap('couldThrow')
    .chainWrap('couldThrowToo')
    // could assert specifics here
    .couldThrow(false)
    .couldThrowToo(false)
    .wrap(chain => chain.couldThrow(true))
    .wrap(chain => chain.couldThrowToo(true))
})

test('.bindMethods', t => {
  t.plan(1)
  const chain = new Chain()
  chain.bindMe = function() {
    t.deepEqual(chain, this)
  }
  chain.bindMethods(['bindMe'])
  chain.bindMe()
})
test('should rethrow', t => {
  /* prettier-ignore */
  try {
    new Encased()
      .wrap(encased => encased.fn = arg => {
        throw new Error('encased yo')
      }, true)
      .encase('fn')
      .catch(() => {})
      .fn(true)
  }
  catch (e) {
    t.pass()
  }
})
