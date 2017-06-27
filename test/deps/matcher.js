const log = require('fliplog')
const m = require('../../src/deps/matcher')

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
