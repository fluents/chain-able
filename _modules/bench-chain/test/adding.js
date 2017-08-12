/* eslint no-return-await: "off" */
const test = require('ava')
const {fosho} = require('fosho')
const Bench = require('../src')

const sleep = sleepDuration =>
  new Promise(resolve => setTimeout(resolve, sleepDuration))

test('can add bench cases', t => {
  const bench = new Bench()
  bench
    .dir(__dirname)
    .filename('configstore-adding-test-basic')
    .add('case1', () => 1 + 1)
    .add('case2', () => 1 * 1)
    .add('case3', () => 1 / 1)

  fosho(bench.suite, t).obj()
  t.pass()
})

test('can add async bench cases', t => {
  const bench = Bench.init(__dirname, 'configstore-adding-test-async')
    .addAsync('case1', async () => await sleep(100))
    .addAsync('case2', async () => await sleep(200))
    .addAsync('case31', async () => await sleep(100))

  fosho(bench.suite, t).obj()
  t.pass()
})
