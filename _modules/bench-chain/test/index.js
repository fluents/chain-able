const test = require('ava')
const {fosho} = require('fosho')
const Bench = require('../src')

test.todo('benchmark reports over time')
test.todo('benchmark test ranges')
test.todo('benchmark stdout with flags')
test.todo('benchmark onCycles contain ...data...')
test.todo('can subscribe to lifecycle events')

test.failing('can add multiple suites', t => {
  Bench.init()
    .dir(__dirname)
    .addSuite('one')
    .filename('configstore-adding-test')
    .add('bench1')
    .add('bench2')

  t.fail()
})
