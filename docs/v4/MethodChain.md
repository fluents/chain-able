> method builders

- [declaration](#declaration)
- [api](#api)
  - [`onCall`](#onCall)
  - [`onSet`](#onSet)
  - [`onGet`](#onGet)
  - [`type`](#type)
  - [`define`](#define)
  - [`getSet`](#getSet)
  - [`default`](#default)
  - [`initial`](#initial)
  - [`bind`](#bind)
  - [`camelCase`](#camelCase)
  - [`autoIncrement`](#autoIncrement)
  - [`factory`](#factory)
  - [`returns`](#returns)
  - [`callReturns`](#callReturns)
- [related](#-related)

### declaration

```ts
// https://github.com/iluwatar/java-design-patterns/tree/master/step-builder
// https://github.com/iluwatar/java-design-patterns/tree/master/builder
class MethodChain extends Chain {
	// --- these 3 are used in every other method (almost) ---

	// defaults to `this.set(key, value)`
	public onSet(fn: Fn): MethodChain
	// defaults to .onSet ^
	public onCall(fn: Fn): MethodChain
	// defaults to `this.get(key)`
	public onGet(fn: Fn): MethodChain

	// --- types ---

	// type validation
	// @example `?string`, `string[]`, `string|boolean`, `boolean[]|string[]`
	public type(type: string | FnHasSingleArg): MethodChain

	// an object that contains nestable types
	// they are mapped to validators
	public schema(schema: Obj): ChainAble

	// when using .encase or .type, defaults to re-throw
	// called when type validation | encased method is invalid
	public onInvalid(fn: Fn): MethodChain
	public catch(fn: Fn): MethodChain // alias

	// called when type validation | encased method isn't invalid
	public onValid(fn: Fn): MethodChain
	public then(fn: Fn): MethodChain // alias

	// --- decorators/factories - they decorate/build the method ---

	// wraps the method in a try catch, responds to
	public encase(method?: string, rethrow?: boolean): MethodChain

	// binds the method to thisArg, or to parent with no params
	public bind(thisArg?: Obj | boolean): MethodChain

	// wraps the method to return `parent` by default
	public returns(value: any): MethodChain
	// public chainable(): MethodChain // alias ^

	// will make the method call the value in .returns
	public callReturns(should?: boolean): MethodChain

	// aliases an array of methods
	// @example .name('eh).alias('canada')
	//					obj.eh = .onCall
	//
	//					obj.canada = obj.eh
	// 					^ is > Object.define(obj, canada, Object.getDescriptor(obj.eh))
	public alias(methods: strings): MethodChain

	// defaultParamValue
	// @example .default('canada') becomes...
	// 					.eh(arg = 'canada' => onCall(arg))
	public default(value?: any): MethodChain

	// sets the value right away
	// @example .name('eh').initial(true)
	//					obj.store: Map<eh, true>
	//					obj.eh = .onCall
	public initial(value?: any): MethodChain

	// defineGetterSetter
	public define(should?: boolean): MethodChain

	// expandNameToSetMethodGetMethod
	// @example .name('eh') decorates an object...
	// 					obj.setEh = .onSet
	//					obj.getEh = .onGet
	// 				  obj.eh    = .onCall
	public getSet(should?: boolean): MethodChain

	// --- important operations ---

	// finish the method building, naming is from the builder pattern,
	// returns the `returnValue` or `this.parent`
	public build(returnValue: Primitive): Primitive
	public build(returnValue?: null | undefined | any): Chain
	// calls .build using Symbol.toPrimative with `+`
	// @example +chain.method(name)
	public toNumber(): number

	// decorate an object, useful when using nested factories
	// this previously was .decorateParent
	public decorate(target: Obj): MethodChain

	// this is called from Chain.method(name) / Chain.methods(names)
	public names(names: strings | Obj): MethodChain
	public name(names: strings | Obj): MethodChain // ^ alias

	// --- simple .factory presets ---

	// is a factory that adds a .onCall & .initial
	// every time the method is called, it auto-increments
	// @example .name('index').autoIncrement()
	//					.index()   // now index is 1
	//				  .index(+1) // now index is 2, note the optional arg for clarity
	public autoIncrement(should?: boolean): MethodChain

	// @example .name('created_at')
	//					obj.createdAt = .onCall
	public camelCase(should?: boolean): MethodChain

	// add custom factories that are called **for each .name**
	// used mainly for when building multiple .names
	// so some properties are reset, or retained
	// the above 2 methods use this
	public factory(fn: MethodChainFactory): MethodChain
}
```

## api

_all examples start with this, or constructor() when extending_
```js
const chain = new Chain()
```

❗ using `+` will call `.build()` in a shorthand fashion

### `onSet`

> defaults to `this.set(key, value)`

```ts
public onSet(fn: Fn): MethodChain
```

### `onCall`

> defaults to .onSet ^

```ts
public onCall(fn: Fn): MethodChain
```

### `onGet`

> defaults to `this.get(key)`

```ts
public onGet(fn: Fn): MethodChain
```


### `schema`
an object that contains nestable `.type`s
they are recursively (using an optimized traversal cache) mapped to validators

❗ this method auto-calls .build, all other method config calls should be done before it
📝 TODO: link to `deps/is` docs

<!-- 🛂 -->
<!-- 📝 TODO:
  - [ ] tests for enum validation & array validation
  - [ ] tests for adding additional custom validators -->

```ts
public schema(schema: Obj): ChainAble
```


```js
chain
  .methods()
  .define()
  .getSet()
  .onInvalid((error, arg, instance) => console.log(error))
  .schema({
    id: '?number',
    users: '?object|array',
    topic: '?string[]',
    roles: '?array',
    creator: {
      name: 'string',
      email: 'email',
      id: 'uuid',
    },
    created_at: 'date',
    updated_at: 'date|date[]',
    summary: 'string',
  })

// valid
chain.created_at = new Date()
chain.setCreatedAt(new Date())

isDate(chain.created_at) === true

// nestable validation 👍
chain.merge({creator: {name: 'string'}})

// invalid
chain.updated_at = false
```


### `type`

```ts
public type(type: string | FnHasSingleArg): MethodChain
```

runtime type validation

```js
.type(`?string`)
.type(`string[]`)
.type(`string|boolean`)
.type(`boolean[]|string[]`)
.type(`!date`)
```



#### `encase`

wrap a method in try catch, with config for .catch & .then (aka .onInvalid, .onValid)

#### `onInvalid`
_@alias `then`_

when using .encase or .type, defaults to re-throw
called when type validation | encased method are invalid

```ts
export interface onInvalid {
	(error: TypeError, arg: any, chainable: ChainAble)
	call?: onInvalid
}
```

#### `onValid`
_@alias `catch`_

```ts
interface onValid {
	(arg: any, chainable: ChainAble)
	call?: onValid
	// this = ChainInstance
}
```

called when type validation | encased method is **not inValid** (throws or returns false)


#### `alias`

```js
+chain.methods(['canada']).alias(['eh'])

chain.eh('actually...canada o.o')
isTrue(chain.get('canada') === 'actually...canada o.o')
```


#### `define`

makes the method a getter/setter with .onGet & .onSet used respectively
commonly used with .getSet for an api with the best of both worlds

```js
+chain.method('ehOh').define()

// this is === by default, but any decorations with any of the other functions
// would make it not strictly identical
chain.set('ehOh', true) === chain.ehOh = true
chain.get('ehOh')       === chain.ehOh
```


#### `getSet`

```js
+chain.method('ehOh').getSet()

// camelCases the names out for clearly communicating set & get
chain.setEhOh(true)
chain.getEhOh() === true
```



#### `autoIncrement`

is a factory that adds a .onCall & .initial
every time the method is called, it auto-increments

```js
chain.method(['index']).index().index(+1).index(+1)
chain.get('index') === 3
```

#### `default`

❗ this is the default **parameter value**
<!-- _previously .extendWith_ -->


```js
// this is essentially
chain.lies = function lies(arg = false) {
  return this.set('lies', arg)
}
```

```js
chain.methods(['truth']).default(true).build().truth()
isTrue(chain.get('truth') === true)

chain.methods(['lies']).default(false).build().lies()
isFalse(chain.get('lies'))
```


```js
+chain.method(['thing1', 'thing2']).default('dr')

const {thing1, thing2} = chain.thing1().thing2().entries()
isTrue(thing1 === 'dr')
isTrue(thing1 === thing2)
```

#### `initial`

sets the value right away

```js
+chain.name('eh').initial(true)
obj.store.get('eh') === true
```

### `bind`

binds methods to the instance
if an argument is passed into .bind(theArgIsTheBindTarget)

```js
const {eq} = require('chain-able')

chain.bindMe = function() {
  isTrue(eq(chain, this))
}
+chain.methods(['bindMe']).bind()
chain.bindMe()

```

#### `returns`

_@alias `chainable`_

<!-- previously .chainWrap -->

iterates over methods, wraps them so their value returns <code>Chain</code>

```js
class Eh extends Chain {
  constructor(parent) {
    super(parent)
    +this.method('canada').returns(this)

  }
  canada(arg) {
    console.log(arg)
  }
}

const eh = new Eh()
eh.canada('log me') // this now returns Eh
```

#### `callReturns`

will make the method call the value in .returns

```js
+eh.method('dude').returns(() => 'dude').callReturns()
eh.dude() === 'dude'
```


#### `camelCase`

camelCases method name using [`factory`](#factory)

```js
+chain.method('eh_oh').camelCase()

chain.ehOh(true)
```


#### `build`

builds the method, returns parent or argument

#### `factory`

used as middleware/plugins/factories for building each method


### random example
```js
+chain
  .onInvalid((e, arg, instance) => console.error(e))
  .onValid((arg, instance) => console.log('valid'))
  .type('?string[]')
  .returns(chain)
```


<!-- - intro
- src
- tests
- example
- more -->

<!-- ## 📘 examples
### 👾 minimal
### advanced -->


## 🔗 related

[test-advanced]: https://github.com/fluents/chain-able/tree/master/test/advanced.js
[test-simple]: https://github.com/fluents/chain-able/tree/master/test/simple.js

- [source](https://github.com/fluents/chain-able/blob/4.0.2/src/ChainedMap.js)
- [source base](https://github.com/fluents/chain-able/blob/4.0.2/src/ChainedMapBase.js)
- [test-advanced][test-advanced]
- [test-simple][test-simple]


# 🔗 related
- [dot-prop](https://github.com/sindresorhus/dot-prop)
- [lodash.get](https://lodash.com/docs/#get)
