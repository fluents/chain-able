# setup

```js
const {Chain, ChainedSet, compose} = require('chain-able')
const ChainedMapExtendable = compose({extend: true})
```

## intermediate

<!-- (needs more basic intro) -->

```js
class EasyFluent extends ChainedMap {
  constructor(parent) {
    super(parent)

    // extend a list of strings for easy chainable methods
    this.extend(['eh'])

    // same as .extend,
    // but when called with no arguments,
    // default is used (`true` in this case)
    // third param is optionally a prefix for inversified
    // for example, `no` => `noCanada()` for inverse value
    this.extendPrefixed(['canada'], true, 'no')
  }

  // if more advanced data changes are needed
  // or if the syntax is preferred for use with typescript or flowtype
  // .set, .get, .has are available
  igloo(igloo) {
    this.set('igloo', igloo)
    return this
  }

  toConfig() {
    return this.entries()
  }
}

// {igloo: 'fire', canada: false, eh: 'moose'}
const config = new EasyFluent()
  .igloo('fire')
  .noCanada()
  .eh('moose')
  .toConfig()

// this is == config
const hydrated = new EasyFluent()
  .from(config)
  .toConfig()

// canada is now true
const merged = new EasyFluent()
  .merge(config)
  .merge({canada: true})
  .toConfig()
```


## 🕳🏊 advanced

```js
class Advanced extends ChainedMapExtendable {
  static init(parent) {
    return new Advanced(parent)
  }
  constructor(parent) {
    super(parent)
    this.list = new ChainedSet(this)
    this.extend(['eh'])
    this.extendWith(['canada'], true)
  }

  addName(name) {
    this.list.add(name)
    return this
  }

  igloo(igloo) {
    this.set('igloo', igloo)
    return this
  }

  toConfig() {
    return Object.assign(this.entries(), {
      list: this.list.values().map(name => name),
    })
  }

  // since we have additional data that is not simple key value
  // we do additional (albeit easy) steps to rehydrate
  from(obj) {
    super.from(obj)

    Object
      .keys(obj)
      .forEach(key => {
        const val = obj[key]
        switch (key) {
          case 'list': return val
            .filter(name => name)
            .forEach(name => this.addName(name))
        }
      })

    return this
  }

  // same with `from`
  // we do additional simple steps to merge in lists
  merge(obj) {
    Object
      .keys(obj)
      .filter(key => obj[key])
      .forEach(key => {
        const val = obj[key]
        switch (key) {
          case 'list': return val
            .filter(name => name)
            .forEach(v => this.addName(v))
        }
      })

    // built-in merging
    // can use `.mergeReal` to merge only `real` values
    // and `.merge` to merge any
    super.merge(obj)

    return this
  }
}

const chain = Advanced
  .init()
  .igloo('brr')
  .canada()
  .eh('eh!')
  .addName('thing one')
  .addName('thing two')

// true, `eh!`
chain.has('igloo')
chain.get('eh')

const result = chain.toConfig()

const hydrated = Advanced
  .init()
  .from(result)
  .toConfig()

const merged = Advanced
  .init()
  .merge(hydrated)
  .merge({igloo: 'whaaaat'})

// can use toConfig,
// and safely continue editing `merged`
// with a snapshot of the object data saved as `mergedResult`
const mergedResult = merged.toConfig()

// hydrated === result === {
//   igloo: 'brr',
//   canada: 'canada',
//   eh: 'eh!',
//   list: [ 'thing one', 'thing two' ]
// }

// merged === {
//   igloo: 'whaaaat',
//   canada: 'canada',
//   eh: 'eh!',
//   list: [ 'thing one', 'thing two' ]
// }
```
