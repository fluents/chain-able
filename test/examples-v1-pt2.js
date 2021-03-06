const {Chain, ChainedSet} = require('../src')

class Advanced extends Chain {
  static init(parent) {
    return new Advanced(parent)
  }
  constructor(parent) {
    super(parent)
    this.list = new ChainedSet(this)
    this.extend(['eh'])
    this.method(['canada']).default(true).build()
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

    Object.keys(obj).forEach(key => {
      const val = obj[key]
      switch (key) {
        case 'list':
          return val.filter(name => name).forEach(name => this.addName(name))
      }
    })

    return this
  }

  // same with `from`
  // we do additional simple steps to merge in lists
  merge(obj) {
    Object.keys(obj).filter(key => obj[key]).forEach(key => {
      const val = obj[key]
      switch (key) {
        case 'list':
          return val.filter(name => name).forEach(v => this.addName(v))
      }
    })

    // built-in merging
    // can use `.mergeReal` to merge only `real` values
    // and `.merge` to merge any
    return super.merge(obj)
  }
}

function fixture() {
  return Advanced.init()
    .igloo('brr')
    .canada()
    .eh('eh!')
    .addName('thing one')
    .addName('thing two')
}

test('has', () => {
  expect(fixture().has('igloo')).toBe(true)
  expect(fixture().has('something-that-currently-does-not-exist')).toBe(false)
})

test('get', () => {
  expect(fixture().get('eh')).toBe('eh!')
})

test('toConfig', () => {
  expect(typeof fixture().toConfig()).toBe('object')
})

test('merge', () => {
  const result = fixture().toConfig()
  const hydrated = Advanced.init().from(result).toConfig()
  const merged = Advanced.init().merge(hydrated).from({igloo: 'whaaaat'})

  // can use toConfig,
  // and safely continue editing `merged`
  // with a snapshot of the object data saved as `mergedResult`
  const mergedResult = merged.toConfig()

  expect(hydrated).toEqual({
    igloo: 'brr',
    canada: true,
    eh: 'eh!',
    list: ['thing one', 'thing two'],
    // debug: false,
  })
  expect(mergedResult).toEqual({
    // igloo: ['brr', 'whaaaat'],
    igloo: 'whaaaat',
    canada: true,
    eh: 'eh!',
    list: ['thing one', 'thing two'],
    // debug: false,
  })
})

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

// console.log({merged, hydrated, result})
