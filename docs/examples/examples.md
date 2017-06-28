## LocalStorage

<details><summary>localstorage mock</summary>

  <code>

    const store = {}
    const storage = {
      getItem: key => store[key],
      setItem: (key, value) => (store[key] = value),
    }
    const ls = {
      get: key => JSON.parse(storage.getItem(key)),
      set: (key, value) => storage.setItem(key, JSON.stringify(value)),
    }

  </code>

</details>

```js
const {Chain, eq} = require('chain-able')

class Canada extends Chain {
  constructor(parent) {
    super(parent)
    this.extend(['eh'])
  }
}

const canada = new Canada()
  .eh('eh!')
  .merge({canada: true})
  .tap('canada', value => '🇨🇦')
  .setIfEmpty('ooo', 'ahh')

ls.set('canada', canada.entries())
const hydrated = new Canada().from(ls.get('canada'))

const hydratedIsTheSame = eq(canada.entries(), hydrated.entries())
console.log(hydratedIsTheSame)
```
