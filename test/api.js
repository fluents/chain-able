const dist = require('../src')
const {testExportedNames, testDistedAPI} = require('./_api')

test('works with dist - src', () => {
  const exported = testExportedNames(dist)
  expect.assertions(exported.length)
  exported.map(exp => expect(exp).toBe(true))
})

test('dist classes - src', () => {
  testDistedAPI(dist)
})
