const log = require('fliplog')
const Chain = require('../src')

test('traversal with function callback for vals and keys', () => {
  const result = new Chain()
    .merge({flat: 0, three: 3, one: {two: true}})
    .traverse(false)
    .keys([key => key === 'flat' || key === 'three'])
    .vals([val => val === 0])
    .call(true)

  expect(result).toEqual({one: {two: true}})
})

const todo = console.log
todo('with .onNonMatch')

test('traversal with .onMatch', () => {
  expect.assertions(4)
  new Chain()
    .merge({flat: 0, one: {two: true}})
    .traverse(false)
    .vals([/true/])
    .onMatch((current, traverser) => {
      expect(traverser.path.join('.')).toEqual('one.two')
      expect(current === true).toBe(true)
      expect(typeof traverser.remove === 'function').toBe(true)
      expect(typeof traverser.update === 'function').toBe(true)
    })
    .onNonMatch(val => {
      // ignore
    })
    .call(true)
})

test('.traverse(false)', () => {
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
  expect(cleaned).toEqual({
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

test('.traverse(true)', () => {
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

  const chain = new Chain()
  Object.assign(chain, eh)
  const cleaned = chain
    .merge(eh)
    .traverse(true)
    .keys([/super/, /parser/, /store/, /meta/])
    .vals([/minime/])
    .call(true)

  // log.quick(cleaned)
  expect(cleaned).toEqual({
    className: 'DotProp',
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
