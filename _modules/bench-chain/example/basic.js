const Bench = require('../src')

Bench
  // location to store benchmarks
  .init(__dirname, 'basic.json')
  // tag current benchmarks with, to mark what changes caused differences
  .tags('v1')
  // actual benchmarks
  .add('1 * 1', () => 1 * 1)
  .add('1 + 1', () => 1 + 1)
  .run()

// require('fliplog').quick(b)
