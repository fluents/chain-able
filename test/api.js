const test = require('ava')
const dist = require('../dist')
const {testExportedNames, testDistedAPI} = require('./_api')

test('works with dist - src', t => {
  testExportedNames(t, dist)
})

test('dist classes - src', t => {
  testDistedAPI(t, dist)
})
