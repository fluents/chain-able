# obj-to-str

```js
const Chain = require('chain-able')

class Primative extends Chain {
  toString() {
    let str = ''
    const obj = this.entries()
    const keys = Object.keys(obj)
    keys.forEach(prop => (str += `"${prop}":"${obj[prop]}",`))
    return str
  }
}

const obj = new Primative()
obj.set('factory', '🏭').set('canada', '🇨🇦')

const str = obj + ''
str === `"factory":"🏭","canada":"🇨🇦",`
```

# arr-to-num

```js
const ChainedSet = require('chain-able/ChainedSet')

class Iteratable extends ChainedSet {
  /**
   * @param  {Array<number>} data
   * @return {number} average
   */
  toNumber() {
    const data = this.values()
    return Math.floor(data.reduce((prev, curr) => 0 + prev + curr, 0) / data.length)
  }
}

const nums = new Iteratable()
nums.add(1).add(1).add(1).add(1).add(2)
+nums === 1
```
