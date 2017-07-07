# MethodChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MethodChain`
* <a href="#">``</a>

<!-- /div -->

<!-- div -->

## `MethodChain.prototype`
* <a href="#MethodChain-prototype-">`MethodChain.prototype.`</a>
* <a href="#MethodChain-prototype-_build">`MethodChain.prototype._build`</a>
* <a href="#MethodChain-prototype-_defaults">`MethodChain.prototype._defaults`</a>
* <a href="#MethodChain-prototype-autoIncrement">`MethodChain.prototype.autoIncrement`</a>
* <a href="#MethodChain-prototype-build">`MethodChain.prototype.build`</a>
* <a href="#MethodChain-prototype-decorate">`MethodChain.prototype.decorate`</a>
* <a href="#MethodChain-prototype-name">`MethodChain.prototype.name`</a>
* <a href="#MethodChain-prototype-schema">`MethodChain.prototype.schema`</a>

<!-- /div -->

<!-- div -->

## `add`
* <a href="#add">`add`</a>

<!-- /div -->

<!-- div -->

## `alias`
* <a href="#alias">`alias`</a>

<!-- /div -->

<!-- div -->

## `if`
* <a href="#if">`if`</a>

<!-- /div -->

<!-- div -->

## `this.extend`
* <a href="#this-extend">`this.extend`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `/* istanbul ignore next`

<!-- div -->

<h3 id="/* istanbul ignore next"><a href="#/* istanbul ignore next">#</a>&nbsp;<code>/* istanbul ignore next</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L564 "View in source") [&#x24C9;][1]

unknown

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `MethodChain`

<!-- div -->

<h3 id=""><a href="#">#</a>&nbsp;<code></code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L17 "View in source") [&#x24C9;][1]

unknown


### @todos 

- [ ] clarify .set vs .call
{@link https://github.com/iluwatar/java-design-patterns/tree/master/property property-pattern}
{@link https://github.com/iluwatar/java-design-patterns/tree/master/prototype prototype-pattern}
{@link https://github.com/iluwatar/java-design-patterns/tree/master/step-builder step-builder-pattern}
{@link https://github.com/iluwatar/java-design-patterns/tree/master/builder builder-pattern}
{@link https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/mixins.png mixin-png}
{@link https://sourcemaking.com/design_patterns/creational_patterns creational-patterns}
{@link https://sourcemaking.com/design_patterns/factory_method factory-method}
{@link https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e constructors}
{@link https://www.sitepoint.com/factory-functions-javascript/ js-factory-functions}
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `MethodChain.prototype`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/MethodChain.d.ts">🌊  Types: MethodChain.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/MethodChain.js">🔬  Tests: MethodChain</a>&nbsp;

<h3 id="MethodChain-prototype-"><a href="#MethodChain-prototype-">#</a>&nbsp;<code>MethodChain.prototype.</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L112 "View in source") [&#x24C9;][1]

(Map): ❗ using `+` will call `.build()` in a shorthand fashion


### @todos 

- [ ] maybe abstract the most re-usable core as a protected class
       so the shorthands could be used, and more functionality made external
- [ ] need to separate schema from here as external functionality & add .add
- [ ] .prop - for things on the instance, not in the store?
       !!! .sponge - absorn properties into the store
 

### @extends
ChainedMap


#### Since
4.0.0

---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-_build"><a href="#MethodChain-prototype-_build">#</a>&nbsp;<code>MethodChain.prototype._build(name=undefined, parent=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L441 "View in source") [&#x24C9;][1]

Function


### @notes 

* scoping here adding default functions have to rescope arguments
 

### @todos 

- [ ] allow config of method var in plugins since it is scoped...
- [ ] add to .meta(shorthands)
- [ ] reduce complexity if perf allows
 
#### Since
4.0.0-alpha.1

#### Arguments
1. `name=undefined` *(Primitive)*:
2. `parent=undefined` *(Object)*:

#### Returns
*(void)*:

---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-_defaults"><a href="#MethodChain-prototype-_defaults">#</a>&nbsp;<code>MethodChain.prototype._defaults(name=undefined, parent=undefined, built=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L403 "View in source") [&#x24C9;][1]

Function


### @todos 

- [ ] optimize the size of this
       with some bitwise operators
       hashing the things that have been defaulted
       also could be plugin
 
#### Since
4.0.0

#### Arguments
1. `name=undefined` *(Primitive)*: method name
2. `parent=undefined` *(Object)*: being decorated
3. `built=undefined` *(Object)*: method being built

#### Returns
*(void)*:

#### Example
```js
._defaults('', {}, {})
```
#### Example
```js
let methodFactories

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
```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-autoIncrement"><a href="#MethodChain-prototype-autoIncrement">#</a>&nbsp;<code>MethodChain.prototype.autoIncrement()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L743 "View in source") [&#x24C9;][1]

(Function): adds a plugin to increment the value on every call

#### Since
0.4.0

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
chain.methods(['index']).autoIncrement().build().index().index(+1).index()
chain.get('index')
//=> 3

```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-build"><a href="#MethodChain-prototype-build">#</a>&nbsp;<code>MethodChain.prototype.build([returnValue=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L331 "View in source") [&#x24C9;][1]

(Function): set the actual method, also need .context - use .parent


### @todos 

- [ ] if passing in a name that already exists, operations are decorations... (partially done)
 
#### Since
4.0.0

#### Arguments
1. `[returnValue=undefined]` *(any)*: returned at the end of the function for ease of use

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
var obj = {}
const one = new MethodChain(obj).methods('eh').getSet().build(1)
//=> 1

typeof obj.getEh
//=> 'function'

```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-decorate"><a href="#MethodChain-prototype-decorate">#</a>&nbsp;<code>MethodChain.prototype.decorate([parentToDecorate=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L712 "View in source") [&#x24C9;][1]

(Function): add methods to the parent for easier chaining

#### Arguments
1. `[parentToDecorate=undefined]` *(Object)*: decorate a specific parent shorthand

#### Returns
*(ChainedMap)*: @chainable

#### Example
```js
var obj = {}
new MethodChain({}).name('eh').decorate(obj).build()
typeof obj.eh
//=> 'function'

```
#### Example
```js
class Decorator extends Chain {
  constructor(parent) {
    super(parent)
    this.methods(['easy']).decorate(parent).build()
    this.methods('advanced')
      .onCall(this.advanced.bind(this))
      .decorate(parent)
      .build()
  }
  advanced(arg) {
    this.set('advanced', arg)
    return this.parent
  }
  easy(arg) {
    this.parent.set('easy-peasy', arg)
  }
}

class Master extends Chain {
  constructor(parent) {
    super(parent)
    this.eh = new Decorator(this)
  }
}

const master = new Master()

master.get('easy-peasy')
//=> true

master.eh.get('advanced')
//=> 'a+'

```
#### Example
```js
;+chain.method('ehOh').decorate(null)
//=> @throws Error('must provide parent argument')

```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-name"><a href="#MethodChain-prototype-name">#</a>&nbsp;<code>MethodChain.prototype.name(methods=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L225 "View in source") [&#x24C9;][1]

(Function): setup methods to build

#### Arguments
1. `methods=undefined` *(Object|string|string&#91;&#93;)*: method names to build

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
var obj = {}
new MethodChain(obj).name('eh').build()
typeof obj.eh
//=> 'function'

```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-schema"><a href="#MethodChain-prototype-schema">#</a>&nbsp;<code>MethodChain.prototype.schema(obj=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L306 "View in source") [&#x24C9;][1]

(Function): an object that contains nestable `.type`s
they are recursively *(using an optimized traversal cache)* mapped to validators
❗ this method auto-calls .build, all other method config calls should be done before it


### @todos 

- [ ] link to `deps/is` docs
- [ ] move out into a plugin to show how easy it is to use a plugin
      and make it able to be split out for size when needed
- [ ] inherit properties (in plugin, for each key)
      from this for say, dotProp, getSet
- [ ] very @important
      that we setup schema validation at the highest root for validation
      and then have some demo for how to validate on set using say mobx
      observables for all the way down...
 
#### Since
4.0.0

#### Arguments
1. `obj=undefined` *(Object)*: schema

#### Returns
*(MethodChain)*: @chainable

#### Example
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

//--- valid
chain.created_at = new Date()
chain.setCreatedAt(new Date())

isDate(chain.created_at) === true

//--- nestable validation 👍
chain.merge({ creator: { name: 'string' } })

//--- invalid
chain.updated_at = false

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `add`

<!-- div -->

<h3 id="add"><a href="#add">#</a>&nbsp;<code>add(methodFactory=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L778 "View in source") [&#x24C9;][1]

(Function): add methodFactories easily

#### Since
4.0.0-beta.2

#### Arguments
1. `methodFactory=undefined` *(Object)*: factories to add

#### Returns
*(void)*:

#### Example
```js
function autoGetSet(name, parent) {
  const auto = arg =>
    isUndefined(arg) ? parent.get(name) : parent.set(name, arg)

  //so we know if we defaulted them
  auto.autoGetSet = true
  return this.onSet(auto).onGet(auto).onCall(auto)
}
MethodChain.addPlugin({ autoGetSet })

const chain = new Chain()
chain.methods('eh').autoGetSet().build()

chain.eh(1)
//=> chain
chain.eh()
//=> 1 *

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `alias`

<!-- div -->

<h3 id="alias"><a href="#alias">#</a>&nbsp;<code>alias(aliases=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L177 "View in source") [&#x24C9;][1]

(Function): alias methods


### @notes 

* these would be .transform
 
#### Since
2.0.0

#### Arguments
1. `aliases=undefined` *(string|string&#91;&#93;)*: aliases to remap to the current method being built

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
const chain = new Chain()
chain.methods(['canada']).alias(['eh']).build()
chain.eh('actually...canada o.o')
chain.get('canada')
//=> 'actually...canada o.o')

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `if`

<!-- div -->

<h3 id="if"><a href="#if">#</a>&nbsp;<code>if()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L233 "View in source") [&#x24C9;][1]

(Function): this is a plugin for building methods schema defaults value to `.type` this defaults values to `.onCall`

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `this.extend`

<!-- div -->

<h3 id="this-extend"><a href="#this-extend">#</a>&nbsp;<code>this.extend()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L136 "View in source") [&#x24C9;][1]

Function

#### Example
```js
chain
  .method('eh')
  .type(`?string`)
  .type(`string[]`)
  .type(`string|boolean`)
  .type(`boolean[]|string[]`)
  .type(`!date`)

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #/* istanbul ignore next "Jump back to the TOC."
