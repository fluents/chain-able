const Bench = require('../../src')
const sleepfor = require('sleepfor')

Bench
  .init(__dirname, 'sync-first-slower.json')
  .add('snail2', () => sleepfor(500))
  .add('zoomzoom2', () => sleepfor(100))
  .run()
