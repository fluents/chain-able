// https://github.com/substack/camelize/blob/master/test/camel.js
const log = require('fliplog');
const camelize = require('../../src/deps/camel-case')

test('camelCase', () => {
  expect(camelize('one two') == 'oneTwo').toBe(true)
  expect(camelize('one.two') == 'oneTwo').toBe(true)
  expect(camelize('one_two') == 'oneTwo').toBe(true)
  expect(camelize('foo-bar') == 'fooBar').toBe(true)
  expect(camelize('onetwo') == 'onetwo').toBe(true)

  expect(camelize('zero one-two-three_four.five') == 'zeroOneTwoThreeFourFive').toBe(true)
})
