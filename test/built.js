const test = require('ava')
const log = require('fliplog')
const devDist = require('../dists/cjs')
const cjsDist = require('../dists/dev')
const umd = require('../dists/umd')
const {testExportedNames, testDistedAPI} = require('./_api')

const dists = [cjsDist, umd, devDist]

test('works with dist', t => {
  testExportedNames(t, dists[0])
  // dists.map(dist => testExportNames(t, exportedNames, dist))
})

test('dist classes', t => {
  testDistedAPI(t, dists[0])
  // dists.map(dist => testDistedAPI(t, dist))
})
