[map]: https://ponyfoo.com/articles/es6-maps-in-depth
[compose]: https://github.com/fluents/chain-able/wiki/Compose
[deps]: https://github.com/fluents/chain-able/wiki/deps
[Chainable]: https://github.com/fluents/chain-able/wiki/Chainable
[ChainedMap]: https://github.com/fluents/chain-able/wiki/ChainedMap
[ChainedSet]: https://github.com/fluents/chain-able/wiki/ChainedSet
[FactoryChain]: https://github.com/fluents/chain-able/wiki/FactoryChain
[MergeChain]: https://github.com/fluents/chain-able/wiki/MergeChain
[MergeChain]: https://github.com/fluents/chain-able/wiki/MergeChain
[MethodChain]: https://github.com/fluents/chain-able/wiki/MethodChain

# `chain-able` exports

- [Chainable][Chainable] _the core root interface with common symbol methods_
- [ChainedSet][ChainedSet]
- [ChainedMap][ChainedMap]
- [FactoryChain][FactoryChain]
- [MergeChain][MergeChain]
- [MethodChain][MethodChain]
- [compose][compose]
- [merge][deps]
- [reduce][deps]
- [clean][deps]
- [is][deps]
- [traverse][deps]


## Chain

- `default`: _(also as `.Chain`)_
  - is a [ChainedMap][ChainedMap] that contains all functionality created by using [compose][compose] with default arguments

### declaration
```js
export declare class Chain extends ChainedMap implements Composed {
  public traverse(useThis?: boolean | Traversable): ChainAble

  // ---- transformchain ---

  // stored in .meta
  public transform(key: Primitive, value: any): ChainAble

  // remaps a key from 1 to another
  public remap(from: string | Obj | Primitive, to: string | Obj | Primitive): ChainAble

  // returns traverser using this.entries()
  public traverse(useThis?: boolean): TraverseChain
  // returns traverser using obj
  public traverse(obj: Traversable): TraverseChain

  // --- shorthandchain ---

  // sets a value only when .has is false
  public setIfEmpty(name: Primitive, value: any): ChainAble

  // .return(anyValue)
  public return(value: any): any

  // wrap a function, call it, return this
  public wrap(fn: Fn): ChainAble

  // special property in .meta
  public debug(should?: boolean): ChainAble

  // --- observechain ---

  // stored in .meta
  public observe(properties: strings, fn: FnArgIsObj): ChainAble

  // --- dotpropchain ---

  // disables dot-prop in .set, .has, .get, .delete
  public dot(enabled: boolean): ChainAble
}
```

'merge',
'compose',
'clean',
'is',
'traverse',
'camelCase',
'toArr',
'dot',
'matcher',
'eq',
'reduce',
'meta',
'validators',

all exports are also available as modular imports

```js
import ChainedMap from 'chain-able/ChainedMap'
```
