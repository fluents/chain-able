# 🛂 schema

> runtime validation, easy fluent api creation with types

- [definition](#definition)
- [example](#example)
  - [minimal](#minimal)
  - [custom](#custom)
- [is](#is)
- [related](#related)

## definition

```ts
interface ValidationFunction {
  (arg: any): any
}

// all `is` validators, or any custom added ones
type Type =
  | ValidationFunction
  | '?'
  | '|'
  | '[]'
  | 'string'
  | 'number'
  | 'date'
  | 'boolean'
  | 'function'
  | 'error'
  | 'map'
  | 'set'
  | 'object'
  | 'regexp'
  | 'array'
  | 'symbol'
  | 'real'
  | 'iterator'
  | 'objWithKeys'
  | 'null'
  | 'undefined'

interface Schemable {
  (key: string | any): Type | Schemable
}

type Schema = Schemable | Type
```

## example

### minimal

```js
const typed = new Chain()
  // can be used shorthand
  .method('short')
  // .onValid((val, c) => c.set('eh', val))
  .onInvalid((error, arg, instance) => log.data(error).echo(false))
  .type(x => typeof x === 'string')
  .build()

typed.short('string')
typed.short(!'boolean')
```

### custom

```js
const Chain = require('chain-able')

// to use for debugging or instance checks
class CommentChain extends Chain {}
const chain = new CommentChain()

chain
  .methods()
  .onInvalid((error, key, arg, instance) => console.error(error))
  .schema({
    enabled: 'boolean',
    data: '!string',
    name: '?string',
    location: 'number|number[]',
    // nested
    dates: {
      created: {
        at: 'date',
      },
      updated: {
        at: 'date',
        pretty: 'string',
      },
    },
  })

chain
  .dates({created: {at: new Date()}})
  .location(1)
  .enabled(true)
  .name('string')
  .name(['strings!'])
  .name(['? is optional :-)'])

// validates with .merge or .set as well
chain.merge({data: {notString: true}})

// invalid
chain.enabled('not boolean')
chain.data('not valid')
```

result:

<img width="577" alt="screen shot 2017-06-24 at 6 22 54 pm" src="https://user-images.githubusercontent.com/4022631/27512993-3576914e-590a-11e7-8d37-11988e534b2e.png">



## is

```ts
export const is = {
  isArray,
  isString,
  isNumber,
  isFunction,
  isObj,
  isObjWithKeys,
  isEnumerable,
  isError,
  isMap,
  isSet,
  isIterator,
  isDate,
  isRegExp,
  isPureObj,
  isSymbol,
  isReal,
  isBoolean,
  isNull,
  isUndefined,
  isTrue,
  toS,

  // only available as `chain-able/deps/is/*` without the `is`
  // @example `chain-able/deps/is/stringOrNumber`, `chain-able/deps/is/dot`
  isNotEmptyArray,
  isStringOrNumber,
  isNullOrUndef,
  isFalse,
  isDot,
  isMapish,
}
```


### related
- is available on [MethodChain][MethodChain]
- uses the [traverser][TraverseChain]
- [is source](https://github.com/fluents/chain-able/tree/master/src/deps/is)
- [is tests](https://github.com/fluents/chain-able/blob/master/test/is)
- [schema source](https://github.com/fluents/chain-able/tree/master/src/deps/validators)
- [schema tests](https://github.com/fluents/chain-able/blob/master/test/schema.js)
- [TypeDefs][TypeDefs]

[wiki]: https://github.com/fluents/chain-able/wiki
[deps]: https://github.com/fluents/chain-able/wiki/deps
[parent]: https://github.com/fluents/chain-able/wiki/parent
[analogy]: https://github.com/fluents/chain-able/wiki/analogy
[Observe]: https://github.com/fluents/chain-able/wiki/Observe
[DotProp]: https://github.com/fluents/chain-able/wiki/DotProp
[Schema]: https://github.com/fluents/chain-able/wiki/Schema
[Transform]: https://github.com/fluents/chain-able/wiki/Transform
[Shorthand]: https://github.com/fluents/chain-able/wiki/Shorthand
[API]: https://github.com/fluents/chain-able/wiki/api
[compose]: https://github.com/fluents/chain-able/wiki/Compose
[Chainable]: https://github.com/fluents/chain-able/wiki/Chainable
[ChainedMap]: https://github.com/fluents/chain-able/wiki/ChainedMap
[ChainedSet]: https://github.com/fluents/chain-able/wiki/ChainedSet
[FactoryChain]: https://github.com/fluents/chain-able/wiki/FactoryChain
[MergeChain]: https://github.com/fluents/chain-able/wiki/MergeChain
[MethodChain]: https://github.com/fluents/chain-able/wiki/MethodChain
[TraverseChain]: https://github.com/fluents/chain-able/wiki/TraverseChain
[CHANGELOG]: https://github.com/fluents/chain-able/blob/master/docs/CHANGELOG.md
[Snippet]: https://github.com/fluents/chain-able/wiki/Snippet
[Examples]: https://github.com/fluents/chain-able/wiki/Examples
[ExamplesPrimitives]: https://github.com/fluents/chain-able/wiki/Primitives
[ExamplesLocalStorage]: https://github.com/fluents/chain-able/wiki/LocalStorage
[ExamplesExpressive]: https://github.com/fluents/chain-able/wiki/LocalStorage
[ExamplesComparison]: https://github.com/fluents/chain-able/wiki/Comparison
[ExamplesIteratable]: https://github.com/fluents/chain-able/wiki/Iteratable
[TypeDefs]: https://github.com/fluents/chain-able/tree/master/typings
[Tests]: https://github.com/fluents/chain-able/tree/master/test
[Src]: https://github.com/fluents/chain-able/tree/master/src
[map]: https://ponyfoo.com/articles/es6-maps-in-depth
[set]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
[cov]: https://coveralls.io/github/fluents/chain-able?branch=master
