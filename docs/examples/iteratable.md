#### Set
```js
const ChainedSet = require('../ChainedSet')
const set = new ChainedSet().add('eh')
```

##### for-of
```js
for (const arr of set) {
  const [key, val] = arr
  arr.length === 2
  key === 0
  val === 'eh'
}
```

##### values
```js
for (const val in set.values()) {
  console.log(val)
}
```

#### Map

```js
const ChainedMap = require('../ChainedMap')
const map = new ChainedMap().set('eh', 'eh!').set('eh2', 'eh2!')
```

##### for-of
```js
for (const arr of map) {
  const [key, val] = arr
  arr.length === 2
  key.includes('eh') === true
  val.includes('eh') === true
}
```

##### entries
```js
const obj = map.entries()
for (const prop in obj) {
  const val = obj[prop]
  console.log({[prop]: val})
}
```
