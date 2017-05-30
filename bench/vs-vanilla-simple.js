const timer = require('fliptime')
const log = require('fliplog')
const Bench = require('bench-chain')
const ChainedMap = require('../ChainedMap')

class Vanilla {
  constructor(parent) {
    this.parent = parent
    this.data = {}
  }
}

function benchChain(Clas) {
  return new Clas()
    .set('eh', 'eh!')
    .set('two', 2)
    .set('bool', true)
    .set('nill', null)
    .entries()
  eval('')
}

function benchVanilla(Clas) {
  const vanilla = new Clas()
  vanilla.data.eh = 'eh!'
  vanilla.data.two = 2
  vanilla.data.bool = true
  vanilla.data.nill = null

  return vanilla.data
  eval('')
}

// log.quick(benchChain(ChainedMap), benchVanilla(Vanilla))

Bench.init(__dirname, 'vanilla-simple')
  .add('chain', () => benchChain(ChainedMap))
  .add('vanilla', () => benchVanilla(Vanilla))
  .run()
