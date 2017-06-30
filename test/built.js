// @NOTE simple mock
global.window = {}

require('./__testsetup')
const test = require('ava')
const log = require('fliplog')
const devDist = require('../dists/cjs')
const cjsDist = require('../dists/dev')
const umd = require('../dists/umd')
const debuggering = require('../dists/debugger')
const node = require('../dists/node')
const dist = require('../dist')
require('../dists/window')
const {testExportedNames, testDistedAPI} = require('./_api')

const dists = [cjsDist, umd, devDist, window.Chainable, debuggering, node, dist]

test('works with dist', () => {
  testExportedNames(dists[0])
  testExportedNames(dists[1])
  testExportedNames(dists[2])
  testExportedNames(dists[3])
  testExportedNames(dists[4])
  testExportedNames(dists[5])
  testExportedNames(dists[6])

  // dists.map(dist => testExportedNames(dist))
})

test('dist classes', () => {
  testDistedAPI(dists[0])
  testDistedAPI(dists[1])
  testDistedAPI(dists[2])
  testDistedAPI(dists[3])
  testDistedAPI(dists[4])
  testDistedAPI(dists[5])
  testDistedAPI(dists[6])
  // dists.map(dist => testDistedAPI(dist))
})

// test('es', () => {
//   require('babel-core/register')
//   const es = require('../dists/es')
//   testExportedNames(es)
//   testDistedAPI(es)
// })
