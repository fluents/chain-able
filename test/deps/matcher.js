const test = require('ava')
const log = require('fliplog')
const m = require('../../dist/deps/matcher')

test('matcher *', t => {
  t.truthy(m('canada.arr.0', 'canada.*').length)
  t.falsy(m('canada', 'canada.*').length)
})

test('matcher()', t => {
  const matched = m(['foo', 'bar'], ['fo*', 'ba*', '!bar'])
  t.deepEqual(matched, ['foo'])

  t.deepEqual(m(['foo', 'bar'], ['foo']), ['foo'])
  t.deepEqual(m(['foo', 'bar'], ['bar']), ['bar'])
  t.deepEqual(m(['foo', 'bar'], ['fo*', 'ba*', '!bar']), ['foo'])
  t.deepEqual(m(['foo', 'bar', 'moo'], ['!*o']), ['bar'])
  t.throws(() => m([], []))
})

test('matcher().length', t => {
  t.truthy(m('unicorn', 'unicorn').length)
  t.truthy(m('unicorn', 'uni*').length)
  t.truthy(m('unicorn', '*corn').length)
  t.truthy(m('unicorn', 'un*rn').length)
  t.truthy(m(['foo unicorn bar'], '*unicorn*').length)
  t.truthy(m('unicorn', ['*'], []).length)

  t.falsy(m('unicorn', '!unicorn').length)
  t.falsy(m('unicorn', '!uni*').length)
  t.falsy(m('unicorn', 'uni\\*').length)
})

test.failing('matcher - with empty strings for matching with', t => {
  t.falsy(m('unicorn', '').length)
})
