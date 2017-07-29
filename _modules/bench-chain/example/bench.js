const {resolve} = require('path')
const Bench = require('../')
// const Bench = require('bench-chain')

const {record, suite} = Bench.suite(__dirname, true)

/* prettier-ignore */

suite
  .add('1 * 1', () => 1 * 1)
  .add('1 + 1', () => 1 + 1)
  .run()

// true auto calls the following functions:
record.setup(true)

// suite.on('complete', () => {
//   record.echoFastest().save().echoAvgs().echoTrend()
// })
