const R = require('ramda')
const timer = require('fliptime')
const log = require('fliplog')
const Bench = require('../_modules/bench-chain')
const ChainedMap = require('../src/ChainedMap')
const ChainedMapBase = require('../src/ChainedMapBase')
const Composed = require('../src/compose/compose')
const addPoolingTo = require('../src/deps/cache/pooler')

const copy = x => { for (let prop in x) x[prop] = x[prop] }

class Vanilla {
  constructor(parent) {
    this.parent = parent
    this.data = {}
  }
}

const PreComposed = Composed()
class Pooled extends PreComposed {}

function PooledMap(p) {
  var _this = new ChainedMapBase(p)
  return _this
}
copy(PooledMap)
addPoolingTo(PooledMap)

// log.quick(PooledMap.getPooled())
// Object.assign(PooledMap, PooledMap.prototype)
// log.quick({PooledMap, Proto: PooledMap.prototype.prototype})
addPoolingTo(Pooled)
// addPoolingTo(PreComposed)
// addPoolingTo(ChainedMap)

// extends Map
class Ramda {
  constructor(parent) {
    this.parent = parent
    // super()
    this.data = {}
    this.className = this.constructor.name
  }
  [Symbol.toPrimitive]() {
    return R.toString(this.data)
  }
  // https://github.com/ramda/ramda/issues/546
  [Symbol.iterator]() {
    return R.arrayToIterator(this.data)
  }
  set(key, val) {
    this.data = R.set(R.lensProp(key), val, this.data)
    return this
  }
  get(key) {
    return R.get(R.lensProp(key), this.data)
  }
  end() {
    return R.path('parent', this)
  }
  when() {
    return R.when.apply(this, arguments)
  }
  values() {
    return R.values(this.data)
  }
  keys() {
    return R.keys(this.data)
  }
  length() {
    return R.size(this.data)
  }
  has(key) {
    return R.has(R.lensProp(key), this.data)
  }
  tap(key, fn) {
    this.data = R.tap(R.lensProp(key), this.data, fn)
    return this
  }
  remove(key) {
    this.data = R.remove(R.lensProp(key), this.data)
    return this
  }
  from(obj) {
    this.data = R.merge(obj, this.data)
    return this
  }
  merge(obj) {
    this.data = R.merge(obj, this.data)
    return this
  }
  clear() {
    this.data = R.evolve([null], this.data)
    return this
  }
  entries() {
    return R.toPairs(this.data)
  }
}

function benchRamda(Klass) {
  return new Klass()
    .set('eh', 'eh!')
    .set('two', 2)
    .set('bool', true)
    .set('nill', null)
    .entries()
}

// log.quick(benchRamda(Ramda))

function benchChainPooled(Klass) {
  const instance = Klass.getPooled()
    .set('eh', 'eh!')
    .set('two', 2)
    .set('bool', true)
    .set('nill', null)
  const entries = instance.store.entries()
  Klass.release(instance)
  return entries
}


function benchChain(Klass) {
  return new Klass()
    .set('eh', 'eh!')
    .set('two', 2)
    .set('bool', true)
    .set('nill', null)
    .entries(false)
}

function benchVanilla(Klass) {
  const vanilla = new Klass()
  vanilla.data.eh = 'eh!'
  vanilla.data.two = 2
  vanilla.data.bool = true
  vanilla.data.nill = null

  return vanilla.data
}

// log.quick(benchChain(ChainedMap), benchVanilla(Vanilla))

Bench.init(__dirname, 'vanilla-simple')
  .add('chain', () => benchChain(ChainedMap))
  .add('vanilla', () => benchVanilla(Vanilla))
  .add('precomposed', () => benchChain(PreComposed))
  .add('map', () => benchChain(Map))
  .add('pooled', () => benchChainPooled(Pooled))
  .add('pooledext', () => benchChainPooled(PooledMap))
  .add('ramda', () => benchRamda(Ramda))
  .run()
