const log = require('fliplog')
const reduceEntries = require('../../src/deps/reduce/entries')
const reduce = require('../../src/deps/reduce')

test('reduce calls .entries()', () => {
  expect.assertions(2)

  var emptyMap = new Map()
  expect(reduceEntries(reduce(emptyMap))({})).toEqual({})

  const map = new Map()
  map.set('eh', true)
  const nested = new Map()
  nested.set('reduced', true)

  const chain = {
    entries() {
      return {
        nested: reduce(nested),
        key: true,
      }
    },
  }
  const reduced = reduce(map)
  const actual = reduceEntries(reduced)({chain})
  const expected = {
    eh: true,
    chain: {
      nested: {
        reduced: true,
        key: true,
      },
    },
  }

  const reducedIgnored = {
    canada: {
      store: chain,
    },
  }
  const ignored = reduceEntries(reduced)(reducedIgnored)
  const ignoredExpected = {
    eh: true,
    chain: {
      nested: {
        reduced: true,
      },
      key: true,
    },
  }

  expect(ignored).toEqual(ignoredExpected)
})
