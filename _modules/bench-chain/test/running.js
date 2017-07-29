/* eslint no-return-await: "off" */
const test = require('ava')
const {fosho, log} = require('fosho')
const Bench = require('../src')

const sleep = sleepDuration =>
  new Promise(resolve => setTimeout(resolve, sleepDuration))

test('can run bench cases', t => {
  const bench = new Bench()
  bench
    .dir(__dirname)
    .filename('configstore.running-test-basic')
    .add('case1', () => 1 + 1)
    .add('case2', () => 1 * 1)
    .add('case3', () => 1 / 1)
    .run()

  const data = bench.getResults()
  fosho(data, t).obj()
  fosho(data, t).obj()
  fosho(data.case1, t).obj()
})

test('can run async bench cases', t => {
  const bench = Bench.init(__dirname, 'configstore.running-test-async')
    .addAsync('case1', async () => await sleep(100))
    .addAsync('case2', async () => await sleep(200))
    .addAsync('case31', async () => await sleep(100))
    .run()

  const data = bench.getResults()
  fosho(data, t).obj()
  fosho(data.case1, t).obj()
  fosho(data.case2, t).obj()
  fosho(data.case31, t).obj()
})
