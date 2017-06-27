const log = require('fliplog')
const devDist = require('../srcs/cjs')
const cjsDist = require('../srcs/dev')
const umd = require('../srcs/umd')
const {testExportedNames, testDistedAPI} = require('./_api')

const dists = [cjsDist, umd, devDist]

test('works with dist', () => {
  testExportedNames(dists[0])
  // dists.map(dist => testExportNames(t, exportedNames, dist))
})

test('dist classes', () => {
  testDistedAPI(dists[0])
  // dists.map(dist => testDistedAPI(t, dist))
})
