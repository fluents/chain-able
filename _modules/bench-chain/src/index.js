const log = require('fliplog')
const pkg = require('../package.json')
const BenchChain = require('./BenchChain')

log.registerCatch()

// @TODO every time a bench is added, should register all here, for multi benches
// const suites = {}

BenchChain.Bench = BenchChain
BenchChain.log = log
BenchChain.version = pkg.version
module.exports = BenchChain
