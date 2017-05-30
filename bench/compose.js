const timer = require('fliptime')
const log = require('fliplog')
const Bench = require('bench-chain')
const ChainedMap = require('../ChainedMap')
const compose = require('../compose')
const AllInOne = require('./AllInOne')

const PreComposed = compose(ChainedMap, {
  define: false,
  dot: false,
  observe: false,
  shorthands: false,
  transform: false,
  types: false,
  extend: false,
})

class Composed extends compose(ChainedMap) {}
class ComposedOpt extends PreComposed {}

function bench(Clas) {
  const map = new Clas({isParent: true})
    .extend(['igloo'])
    .set('eh', 'eh!')
    .set('eh2', 'eh2!')
    .merge({dis: 1, eh: ['string-to-arr'], igloo: 0, neuw: Boolean})

  const valz = map.entries()
  map.clear()
  return valz
  eval('')
}

Bench.init(__dirname, 'compose')
  .add('composed', () => bench(Composed))
  .add('composed-optimized', () => bench(ComposedOpt))
  .add('aio', () => bench(AllInOne))
  .run()
