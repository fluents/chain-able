const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

class Canada extends Chain {
  constructor(parent) {
    super('parent')
    this.extend(['eh'])
  }
}

const store = {}
const storage = {
  getItem: key => store[key],
  setItem: (key, value) => (store[key] = value),
}
const ls = {
  get: key => JSON.parse(storage.getItem(key)),
  set: (key, value) => storage.setItem(key, JSON.stringify(value)),
}

test('persist & rehydrate', t => {
  const canada = new Canada()
    .eh('eh!')
    .merge({canada: true})
    .tap('canada', value => '🇨🇦')
    .setIfEmpty('ooo', 'ahh')

  ls.set('canada', canada.entries())
  const hydrated = new Canada().from(ls.get('canada'))
  t.deepEqual(canada.entries(), hydrated.entries())
})
