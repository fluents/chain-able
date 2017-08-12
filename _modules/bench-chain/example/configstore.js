const Bench = require('../src')

Bench
  // location to store benchmarks
  // .init(__dirname, 'configstore.basic.json')
  .init(__dirname, 'basic-configstore.json')
  .name('configstore-basic')
  // tag current benchmarks with, to mark what changes caused differences
  .tags('v0.4.1,configstore')
  // actual benchmarks
  .add('1 * 1', () => 1 * 1)
  .add('1 + 1', () => 1 + 1)
  .run()
