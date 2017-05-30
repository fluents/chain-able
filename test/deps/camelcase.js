// https://github.com/substack/camelize/blob/master/test/camel.js
const test = require('ava')
const log = require('fliplog')
const camelize = require('../../dist/deps/camel-case')

test('camelCase', t => {
  t.true(camelize('one two') == 'oneTwo')
  t.true(camelize('one.two') == 'oneTwo')
  t.true(camelize('one_two') == 'oneTwo')
  t.true(camelize('foo-bar') == 'fooBar')
  t.true(camelize('onetwo') == 'onetwo')

  t.true(camelize('zero one-two-three_four.five') == 'zeroOneTwoThreeFourFive')
})
