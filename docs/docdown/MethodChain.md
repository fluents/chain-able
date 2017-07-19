# MethodChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MethodChain`
* <a href="#"  data-category="Properties"  data-description="unknown"  data-todos="clarify set vs call"  data-all="meta call category Properties description unknown name member see notes todos clarify set vs call n klassProps" >``</a>
* <a href="#MethodChain-prototype-"  data-meta="ChainedMap"  data-category="Properties"  data-description="Map using will call build in a shorthand fashion"  data-member="MethodChain"  data-todos="maybe abstract the most re usable core as a protected class so the shorthands could be used and more functionality made external need to separate schema from here as external functionality add add prop for things on the instance not in the store sponge absorn properties into the store"  data-all="meta ChainedMap call category Properties description Map using will call build in a shorthand fashion name member MethodChain see notes todos maybe abstract the most re usable core as a protected class n so the shorthands could be used and more functionality made external n need to separate schema from here as external functionality add add n prop for things on the instance not in the store n sponge absorn properties into the store n klassProps" >`MethodChain.`</a>
* <a href="#MethodChain-prototype-_build"  data-meta="build name undefined parent undefined"  data-call="build name undefined parent undefined"  data-category="Methods"  data-description="Function"  data-name="build"  data-member="MethodChain"  data-notes="scoping here adding default functions have to rescope arguments"  data-todos="allow config of method var in plugins since it is scoped add to meta shorthands reduce complexity if perf allows"  data-all="meta build name undefined parent undefined call build name undefined parent undefined category Methods description Function name build member MethodChain see notes scoping here adding default functions have to rescope arguments n todos allow config of method var in plugins since it is scoped n add to meta shorthands n reduce complexity if perf allows n klassProps" >`MethodChain._build`</a>
* <a href="#MethodChain-prototype-_defaults"  data-meta="defaults name undefined parent undefined built undefined"  data-call="defaults name undefined parent undefined built undefined"  data-category="Methods"  data-description="Function"  data-name="defaults"  data-member="MethodChain"  data-todos="optimize the size of this with some bitwise operators hashing the things that have been defaulted also could be plugin"  data-all="meta defaults name undefined parent undefined built undefined call defaults name undefined parent undefined built undefined category Methods description Function name defaults member MethodChain see notes todos optimize the size of this n with some bitwise operators n hashing the things that have been defaulted n also could be plugin n klassProps" >`MethodChain._defaults`</a>
* <a href="#MethodChain-prototype-autoIncrement"  data-meta="autoIncrement"  data-call="autoIncrement"  data-category="Methods"  data-description="Function adds a plugin to increment the value on every call"  data-name="autoIncrement"  data-member="MethodChain"  data-all="meta autoIncrement call autoIncrement category Methods description Function adds a plugin to increment the value on every call name autoIncrement member MethodChain see notes todos klassProps" >`MethodChain.autoIncrement`</a>
* <a href="#MethodChain-prototype-build"  data-meta="build returnValue undefined"  data-call="build returnValue undefined"  data-category="Methods"  data-description="Function set the actual method also need context use parent"  data-name="build"  data-member="MethodChain"  data-todos="if passing in a name that already exists operations are decorations partially done"  data-all="meta build returnValue undefined call build returnValue undefined category Methods description Function set the actual method also need context use parent name build member MethodChain see notes todos if passing in a name that already exists operations are decorations partially done n klassProps" >`MethodChain.build`</a>
* <a href="#MethodChain-prototype-decorate"  data-meta="decorate parentToDecorate undefined"  data-call="decorate parentToDecorate undefined"  data-category="Methods"  data-description="Function add methods to the parent for easier chaining"  data-name="decorate"  data-member="MethodChain"  data-all="meta decorate parentToDecorate undefined call decorate parentToDecorate undefined category Methods description Function add methods to the parent for easier chaining name decorate member MethodChain see notes todos klassProps" >`MethodChain.decorate`</a>
* <a href="#MethodChain-prototype-name"  data-meta="name methods undefined"  data-call="name methods undefined"  data-category="builder"  data-description="Function setup methods to build"  data-name="name"  data-member="MethodChain"  data-all="meta name methods undefined call name methods undefined category builder description Function setup methods to build name name member MethodChain see notes todos klassProps" >`MethodChain.name`</a>
* <a href="#MethodChain-prototype-schema"  data-meta="schema obj undefined"  data-call="schema obj undefined"  data-category="types"  data-description="Function an object that contains nestable type s they are recursively using an optimized traversal cache mapped to validators this method auto calls build all other method config calls should be done before it"  data-name="schema"  data-member="MethodChain"  data-todos="link to deps is docs move out into a plugin to show how easy it is to use a plugin and make it able to be split out for size when needed inherit properties in plugin for each key from this for say dotProp getSet very important that we setup schema validation at the highest root for validation and then have some demo for how to validate on set using say mobx observables for all the way down"  data-all="meta schema obj undefined call schema obj undefined category types description Function an object that contains nestable type s nthey are recursively using an optimized traversal cache mapped to validators n this method auto calls build all other method config calls should be done before it name schema member MethodChain see notes todos link to deps is docs n move out into a plugin to show how easy it is to use a plugin n and make it able to be split out for size when needed n inherit properties in plugin for each key n from this for say dotProp getSet n very important n that we setup schema validation at the highest root for validation n and then have some demo for how to validate on set using say mobx n observables for all the way down n klassProps" >`MethodChain.schema`</a>

<!-- /div -->

<!-- div -->

## `add`
* <a href="#add"  data-meta="add methodFactory undefined"  data-call="add methodFactory undefined"  data-category="Methods"  data-description="Function add methodFactories easily"  data-name="add"  data-all="meta add methodFactory undefined call add methodFactory undefined category Methods description Function add methodFactories easily name add member see notes todos klassProps" >`add`</a>

<!-- /div -->

<!-- div -->

## `alias`
* <a href="#alias"  data-meta="alias aliases undefined"  data-call="alias aliases undefined"  data-category="Methods"  data-description="Function alias methods"  data-name="alias"  data-notes="these would be transform"  data-all="meta alias aliases undefined call alias aliases undefined category Methods description Function alias methods name alias member see notes these would be transform n todos klassProps" >`alias`</a>

<!-- /div -->

<!-- div -->

## `if`
* <a href="#if"  data-meta="if"  data-call="if"  data-category="Methods"  data-description="Function this is a plugin for building methods schema defaults value to type this defaults values to onCall"  data-name="if"  data-all="meta if call if category Methods description Function this is a plugin for building methods schema defaults value to type this defaults values to onCall name if member see notes todos klassProps" >`if`</a>

<!-- /div -->

<!-- div -->

## `this.extend`
* <a href="#this-extend"  data-meta="this extend"  data-call="this extend"  data-category="Methods"  data-description="Function"  data-name="this extend"  data-all="meta this extend call this extend category Methods description Function name this extend member see notes todos klassProps" >`this.extend`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `MethodChain`

<!-- div -->

<h3 id="" data-member="" data-category="Properties" data-name="MethodChain"><code></code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L2 "View in source") [&#x24C9;][1]

unknown


#### @todos 

- [ ] clarify .set vs .call
 
---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/MethodChain.d.ts">🌊  Types: MethodChain.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/MethodChain.js">🔬  Tests: MethodChain</a>&nbsp;

<h3 id="MethodChain-prototype-" data-member="MethodChain" data-category="Properties" data-name="MethodChain"><code>MethodChain.</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L112 "View in source") [&#x24C9;][1]

(Map): ❗ using `+` will call `.build()` in a shorthand fashion


#### @todos 

- [ ] maybe abstract the most re-usable core as a protected class
       so the shorthands could be used, and more functionality made external
- [ ] need to separate schema from here as external functionality & add .add
- [ ] .prop - for things on the instance, not in the store?
       !!! .sponge - absorn properties into the store
 

#### @extends
ChainedMap



#### @Since
4.0.0

---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-_build" data-member="MethodChain" data-category="Methods" data-name="_build"><code>MethodChain._build(name=undefined, parent=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L441 "View in source") [&#x24C9;][1]

Function


#### @notes 

* scoping here adding default functions have to rescope arguments
 

#### @todos 

- [ ] allow config of method var in plugins since it is scoped...
- [ ] add to .meta(shorthands)
- [ ] reduce complexity if perf allows
 

#### @Since
4.0.0-alpha.1

#### Arguments
1. `name=undefined` *(Primitive)*:
2. `parent=undefined` *(Object)*:

#### Returns
*(void)*:

---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-_defaults" data-member="MethodChain" data-category="Methods" data-name="_defaults"><code>MethodChain._defaults(name=undefined, parent=undefined, built=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L403 "View in source") [&#x24C9;][1]

Function


#### @todos 

- [ ] optimize the size of this
       with some bitwise operators
       hashing the things that have been defaulted
       also could be plugin
 

#### @Since
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

<h3 id="MethodChain-prototype-autoIncrement" data-member="MethodChain" data-category="Methods" data-name="autoIncrement"><code>MethodChain.autoIncrement()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L743 "View in source") [&#x24C9;][1]

(Function): adds a plugin to increment the value on every call


#### @Since
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

<h3 id="MethodChain-prototype-build" data-member="MethodChain" data-category="Methods" data-name="build"><code>MethodChain.build([returnValue=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L331 "View in source") [&#x24C9;][1]

(Function): set the actual method, also need .context - use .parent


#### @todos 

- [ ] if passing in a name that already exists, operations are decorations... (partially done)
 

#### @Since
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

<h3 id="MethodChain-prototype-decorate" data-member="MethodChain" data-category="Methods" data-name="decorate"><code>MethodChain.decorate([parentToDecorate=undefined])</code></h3>
<br>
<br>
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

<h3 id="MethodChain-prototype-name" data-member="MethodChain" data-category="builder" data-name="name"><code>MethodChain.name(methods=undefined)</code></h3>
<br>
<br>
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

<h3 id="MethodChain-prototype-schema" data-member="MethodChain" data-category="types" data-name="schema"><code>MethodChain.schema(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L306 "View in source") [&#x24C9;][1]

(Function): an object that contains nestable `.type`s
they are recursively *(using an optimized traversal cache)* mapped to validators
❗ this method auto-calls .build, all other method config calls should be done before it


#### @todos 

- [ ] link to `deps/is` docs
- [ ] move out into a plugin to show how easy it is to use a plugin
      and make it able to be split out for size when needed
- [ ] inherit properties (in plugin, for each key)
      from this for say, dotProp, getSet
- [ ] very @important
      that we setup schema validation at the highest root for validation
      and then have some demo for how to validate on set using say mobx
      observables for all the way down...
 

#### @Since
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

<h3 id="add" data-member="" data-category="Methods" data-name="add"><code>add(methodFactory=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L778 "View in source") [&#x24C9;][1]

(Function): add methodFactories easily


#### @Since
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

<h3 id="alias" data-member="" data-category="Methods" data-name="alias"><code>alias(aliases=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L177 "View in source") [&#x24C9;][1]

(Function): alias methods


#### @notes 

* these would be .transform
 

#### @Since
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

<h3 id="if" data-member="" data-category="Methods" data-name="if"><code>if()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L233 "View in source") [&#x24C9;][1]

(Function): this is a plugin for building methods schema defaults value to `.type` this defaults values to `.onCall`

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `this.extend`

<!-- div -->

<h3 id="this-extend" data-member="" data-category="Methods" data-name="this.extend"><code>this.extend()</code></h3>
<br>
<br>
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

 [1]: #methodchain "Jump back to the TOC."
