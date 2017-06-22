const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

test('traversal with function callback for vals and keys', t => {
  const result = new Chain()
    .merge({flat: 0, three: 3, one: {two: true}})
    .traverse(false)
    .keys([key => key === 'flat' || key === 'three'])
    .vals([val => val === 0])
    .call(true)

  t.deepEqual(result, {one: {two: true}})
})

test.todo('with .onNonMatch')

test('traversal with .onMatch', t => {
  t.plan(4)
  new Chain()
    .merge({flat: 0, one: {two: true}})
    .traverse(false)
    .vals([/true/])
    .onMatch((current, traverser) => {
      t.deepEqual(traverser.path.join('.'), 'one.two')
      t.true(current === true)
      t.true(typeof traverser.remove === 'function')
      t.true(typeof traverser.update === 'function')
    })
    .onNonMatch(val => {
      // ignore
    })
    .call(true)
})

test('traversal', t => {
  const eh = {
    me: true,
    nested: {
      really: {
        deep: {
          super: false,
          not: 'eh',
          canada: true,
          modules: [{parser: 'hi'}],
        },
        matchme: 'minime',
        notme: 'eh',
      },
    },
  }

  // whitelist
  // traverse(false)
  // call(false)
  const cleaned = new Chain()
    .merge(eh)
    .traverse(false)
    .keys([/super/, /parser/])
    .vals([/minime/])
    .call(true)

  // log.quick(cleaned)
  t.deepEqual(cleaned, {
    me: true,
    nested: {
      really: {
        deep: {
          not: 'eh',
          canada: true,
          modules: [{}],
        },
        notme: 'eh',
      },
    },
  })
})
