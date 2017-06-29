const log = require('fliplog')
const m = require('../../src/deps/matcher')
const toTest = require('../../src/deps/to-test')

test('matcher *', () => {
  expect(m('canada.arr.0', 'canada.*').length).toBeTruthy()
  expect(m('canada', 'canada.*').length).toBeFalsy()
})

test('matcher()', () => {
  const matched = m(['foo', 'bar'], ['fo*', 'ba*', '!bar'])
  expect(matched).toEqual(['foo'])

  expect(m(['foo', 'bar'], ['foo'])).toEqual(['foo'])
  expect(m(['foo', 'bar'], ['bar'])).toEqual(['bar'])
  expect(m(['foo', 'bar'], ['fo*', 'ba*', '!bar'])).toEqual(['foo'])
  expect(m(['foo', 'bar', 'moo'], ['!*o'])).toEqual(['bar'])
  expect(() => m([], [])).toThrow()
})

test('matcher().length', () => {
  expect(m('unicorn', 'unicorn').length).toBeTruthy()
  expect(m('unicorn', 'uni*').length).toBeTruthy()
  expect(m('unicorn', '*corn').length).toBeTruthy()
  expect(m('unicorn', 'un*rn').length).toBeTruthy()
  expect(m(['foo unicorn bar'], '*unicorn*').length).toBeTruthy()
  expect(m('unicorn', ['*'], []).length).toBeTruthy()

  expect(m('unicorn', '!unicorn').length).toBeFalsy()
  expect(m('unicorn', '!uni*').length).toBeFalsy()
  expect(m('unicorn', 'uni\\*').length).toBeFalsy()
})

test.skip('matcher - with empty strings for matching with', () => {
  expect(m('unicorn', '').length).toBeFalsy()
})

test('matcher - alpha omega', () => {
  expect(m('unicorn', 'unicorn', true, true).length).toBeTruthy()
  expect(m('nicor', 'unicorn', true, true).length).toBeFalsy()
})

test('to-test', () => {
  expect(toTest('kinga', 'kinga')).toBeTruthy()
  expect(toTest('kinga', 'nope')).toBeFalsy()

  expect(toTest(new RegExp(/kinga/), 'kinga')).toBeTruthy()
  expect(toTest(new RegExp(/kinga/), 'nope')).toBeFalsy()

  expect(toTest(x => x === 'kinga', 'kinga')).toBeTruthy()
  expect(toTest(x => x === 'kinga', 'nope')).toBeFalsy()

  expect(toTest({test: x => x === 'kinga'}, 'kinga')).toBeTruthy()
  expect(toTest({test: x => x === 'kinga'}, 'nope')).toBeFalsy()

  // @TODO this is only implemented in traverse
  // expect(
  //   toTest([x => x === 'kinga', new RegExp(/kinga/), 'kinga'], 'kinga')
  // ).toBeTruthy()
  // expect(
  //   toTest([x => x === 'kinga', new RegExp(/kinga/), 'kinga'], 'nope')
  // ).toBeFalsy()
})
