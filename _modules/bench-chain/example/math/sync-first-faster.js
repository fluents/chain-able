const Bench = require('../../src')
const sleepfor = require('sleepfor')

Bench
  .init(__dirname, 'sync-first-faster.json')
  .add('zoomzoom', () => sleepfor(100))
  .add('snail', () => sleepfor(500))
  .run()
