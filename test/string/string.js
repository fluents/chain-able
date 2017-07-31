const match = require('../../src/deps/string/match')
const pipe = require('../../src/deps/fp/pipe')
const from = require('../../src/deps/util/from')
const className = require('../../src/deps/string/classNames')
const stress = require('../_stress')

test('className', () => {
  class Eh {}
  expect(className(new Eh()).split('.').shift()).toEqual('Eh')
})

test('match', () => {
  const _match = pipe(match, from)
  expect(_match(null, 'eh')).toEqual([])
  expect(_match('eh', 'eh')).toEqual(['eh'])
  expect(_match('eh', '')).toEqual([])
  stress(match)
})
