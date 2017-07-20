const log = require('fliplog')
const {Chain, matcher, isNumber} = require('../src')
const TraverseChain = require('../src/TraverseChain')

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
      // log.quick(traverser)
      log.data(traverser, current, traverser.remove, traverser.update).echo()
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

// test('traverse().traversed()', () => {
//   // const traverser = new TraverseChain()
//   // traverser.obj(['duck', 'duck', 'goose'])
//   // traverser.vals(/(d.*ck)/)
//   // traverser.traverse()
//   //
//   // expect(traverser.traversed()).toBe(['goose'])
//   // traverse(['duck', 'duck', 'goose']).forEach(function(x) {
//   //   /(d.*ck)/
//   // })
//   // const traverser2 = new TraverseChain()
//   // traverser2.obj(['goose', 'duck', 'duck'])
//   // traverser2.vals([/(d.*ck)/])
//   // traverser2.traverse()
//   // expect(traverser2.traversed().pop()).toBe(['goose'])
// })

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
        num: 100,
      },
    },
  }

  const chain = new Chain()
  Object.assign(chain, eh)
  const cleaned = chain
    .merge(eh)
    .traverse(true)
    .keys([/super/, /parser/, /store/, /meta/, /className/])
    .vals([/minime/, isNumber])
    .call(true)

  expect(cleaned).toEqual({
    // className: 'DotProp',
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
