# `DotProp` [🎼](https://github.com/fluents/chain-able/wiki/compose)
<!-- - intro
- src
- tests
- example
- more -->


```js
class DotChain extends Chain {
  constructor(parent) {
    super(parent)
    this.nested = new Chain(this)
    this.nested.set('eh', true)
  }
  get(key) {
    const dotter = this.dotter()
      .name(key)
      .dotted((first, accessor, full) => {
        // console.log({first, accessor, full, val: super.get(full)})
        if (first === 'nested') return this.nested.get(accessor.join('.'))
        if (this.has(first)) return super.get(first)
        if (this.has(full)) return super.get(full)
        return super.get(full)
      })
      .otherwise(full => {
        // console.log('otherwise', {full})
        return super.get(full)
      })
      .value()

    return dotter
  }
}
const chain = new DotChain()
chain.get('nested.eh') === true

chain.set('moose.simple', 1).get('moose.simple') === 1

chain.set('canada', '🇨🇦').get('canada') === '🇨🇦'
chain.get('not-set') === undefined
```


# 🔗 related
- [dot-prop](https://github.com/sindresorhus/dot-prop)
- [lodash.get](https://lodash.com/docs/#get)
