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

test.skip('.encase(method) not existing', t => {
  t.plan(1)

  try {
    new Encased().encase('never-ever')
    /* istanbul ignore next: this means tests fail, shouldn't hit this */
    t.fail()
  }
  catch (e) {
    return t.pass()
  }
  /* istanbul ignore next: this means tests fail, shouldn't hit this */
  t.fail()
})

test.failing('.method().encase().onValid', t => {
  t.plan(1)
  new Encased()
    .method('couldThrow')
    .encase()
    .then(val => t.pass())
    .catch(e => {
      /* istanbul ignore next: this means tests fail, shouldn't hit this */
      t.fail(e)
    })
    .build()
    .couldThrow('no throw!')
})

test.failing('.method().encase().onValid - no .catch', t => {
  t.plan(1)
  new Encased()
    .method('couldThrow')
    .encase()
    .then(val => t.pass())
    .build()
    .couldThrow('no throw!')
})

test.failing('.method().encase().inValid', t => {
  t.plan(1)
  new Encased()
    .method('couldThrow')
    .encase()
    .then(val => {
      /* istanbul ignore next: this means tests fail, shouldn't hit this */
      t.fail(val)
    })
    .catch(e => t.pass(e))
    .build()
    .couldThrow(true)
})

test.skip('.method().encase() inValid - no .then', t => {
  t.plan(1)
  new Encased().encase('').build().catch(e => t.pass()).couldThrow(true)
})

test.failing('encase(fn) valid', t => {
  t.plan(1)

  const fn = arg => {
    if (arg === false) return 'the test'
    throw new Error('encased yo')
  }

  new Encased()
    .wrap(chain => (chain.fn = fn))
    .method('fn')
    .encase()
    .then(arg => t.pass())
    .catch(e => {
      /* istanbul ignore next: this means tests fail, shouldn't hit this */
      t.fail(e)
    })
    .build()
    .fn(false)
})

test.failing('.wrap(fn).method(name).encase(name).inValid', t => {
  t.plan(1)

  /* prettier-ignore */
  new Encased()
    .wrap(encased => encased.fn = arg => {
      throw new Error('encased yo')
    })
    .method('fn')
    .encase()
    .catch(() => t.pass())
    .build()
    .fn(true)
})

test.skip('encase(method) x2 + fn * .then, .catch, .chainWrap, .wrap', t => {
  t.plan(6)

  const fn = arg => {
    if (arg === false) return true
    throw new Error('encased yo')
  }

  const isError = e => t.true(e instanceof Error)
  const isTruthy = arg => t.truthy(arg)

  const encased = new Encased()
    .wrap(chain => (chain.fn = fn))
    .method('fn')
    .encase()
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
    .encase('')
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

test.skip('.bindMethods', t => {
  t.plan(1)
  const chain = new Chain()
  chain.bindMe = function() {
    t.deepEqual(chain, this)
  }
  chain.bindMethods(['bindMe'])
  chain.bindMe()
})
test.skip('should rethrow', t => {
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
    return t.pass()
  }
  /* istanbul ignore next: this means tests fail, shouldn't hit this */
  t.fail()
})
