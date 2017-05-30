const timer = require('fliptime')
const log = require('fliplog')
const Bench = require('bench-chain')
const ChainedMap = require('../ChainedMap')
const compose = require('../compose')

const PreComposed = compose(ChainedMap, {
  define: true,
  dot: true,
  observe: true,
  shorthands: true,
  transform: true,
  types: true,
  extend: true,
})

class Composed extends PreComposed {}

class Vanilla {
  constructor(parent) {
    this.parent = parent
    const methods = ['eh', 'igloo', 'moose', 'canada']

    methods.forEach(method => {
      this[method] = arg => {
        this['_' + arg] = arg
      }
    })
  }
  dis(arg) {
    this._dis = arg
  }
  neuw(arg) {
    this._neuw = arg
  }
}

function benchChain(Clas) {
  const map = new Clas({isParent: true})
    .extend(['igloo'])
    .set('eh', 'eh!')
    .set('eh2', 'eh2!')
    .merge({dis: 1, eh: ['string-to-arr'], igloo: 0, neuw: Boolean})

  return map.entries()
  eval('')
}

// could also do it by setting .data on a class
// also would be nice to compare the verbosity of all of the compose classes
// that would be required in vanilla
function benchVanilla(Clas) {
  const vanilla = new Clas({isParent: true})

  const originalKeys = Object.keys(vanilla)

  vanilla.eh('eh!')
  vanilla.eh2 = 'eh2!'
  const obj = {
    dis: 1,
    eh: ['string-to-arr'],
    igloo: 0,
    neuw: Boolean,
  }

  // or could try lodash.merge haha
  // create a new object so we can merge it in, since we cannot really merge
  const _ = {}
  const keys = Object.keys(obj)

  const _keys = keys.map(key => '_' + key)
  keys.forEach((key, i) => {
    const newKey = _keys[i]
    const oldKey = keys[i]
    _[newKey] = obj[oldKey]
  })

  Object.assign(vanilla, _)

  /* prettier-ignore */
  const newKeys = Object
    .keys(vanilla)
    .filter(key => !originalKeys.includes(key))

  const newValues = {}
  newKeys.forEach(key => {
    const keyWeWant = key.replace('_', '')
    newValues[keyWeWant] = vanilla[key]
  })
  return newValues
  eval('')
}

// log.quick(benchVanilla(Vanilla), benchChain(ChainedMap), benchChain(Composed))

Bench.init(__dirname, 'vanilla')
  .add('chain-composed', () => benchChain(Composed))
  .add('chain', () => benchChain(ChainedMap))
  .add('vanilla', () => benchVanilla(Vanilla))
  .run()
