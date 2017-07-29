const test = require('ava')
const {fosho} = require('fosho')
const Bench = require('../src')

test('can instantiate', t => {
  const record = new Bench(__dirname)
  t.true(record instanceof Bench)
})

test('can chain filename and dir', t => {
  const bench = new Bench()
  bench.dir(__dirname).filename('configstore-adding-test-chain')
  fosho(bench.get('dir'), t).isString()
})

test('can use init insteadof chain', t => {
  const bench = Bench.init(__dirname, 'configstore-adding-test-chain')
  fosho(bench.get('dir'), t).isString()
})
