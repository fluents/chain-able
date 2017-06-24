# `DotProp` [🎼](https://github.com/fluents/chain-able/wiki/compose)

> togglable dot.prop access

[extends ChainedMap](https://github.com/fluents/chain-able/wiki/ChainedMap)


## definition

```ts
// overrides .set, .has, .get, .delete with dot.prop access
interface DotProp extends Composable, ChainedMap {
	dot(enabled: boolean): ChainAble
}
```


```js
const chain = new Chain()

chain.set('moose.simple', 1)

chain.get('moose')        == {simple: 1}
chain.get('moose.simple') == 1

chain.set('moose.canada.eh', true)
chain.set('moose.canada.igloo', true)

// set, has, get, delete :-)
chain.delete('moose.canada.eh')

// also works with an array
isTrue(chain.get(['moose', 'canada', 'igloo']))
```

# 🔗 related
- [dot-prop](https://github.com/sindresorhus/dot-prop) (extends this!)
- [lodash.get](https://lodash.com/docs/#get)
