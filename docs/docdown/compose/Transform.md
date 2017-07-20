# Transform.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `TransformChain`
* <a href="#TransformChain-prototype-"  data-meta="ChainedMap"  data-category="Chainable"  data-description="Map"  data-member="TransformChain"  data-all="meta ChainedMap n call category Chainable description Map name member TransformChain see notes todos klassProps" >`TransformChain.`</a>
* <a href="#TransformChain-prototype-remap"  data-meta="remap from undefined to undefined"  data-call="remap from undefined to undefined"  data-category="Methods"  data-description="Function remap properties from 1 to another for example apis with inconsistent naming"  data-name="remap"  data-member="TransformChain"  data-all="meta n remap from undefined to undefined call remap from undefined to undefined category Methods description Function remap properties from 1 to another for example apis with inconsistent naming name remap member TransformChain see notes todos klassProps" >`TransformChain.remap`</a>
* <a href="#TransformChain-prototype-set"  data-meta="set key undefined val undefined dotPropKey undefined"  data-call="set key undefined val undefined dotPropKey undefined"  data-category="Methods"  data-description="Function"  data-name="set"  data-member="TransformChain"  data-all="meta set key undefined val undefined dotPropKey undefined call set key undefined val undefined dotPropKey undefined category Methods description Function name set member TransformChain see notes todos klassProps" >`TransformChain.set`</a>
* <a href="#TransformChain-prototype-transform"  data-meta="transform key undefined value undefined"  data-call="transform key undefined value undefined"  data-category="Methods"  data-description="Function"  data-name="transform"  data-member="TransformChain"  data-todos="dot prop here"  data-all="meta transform key undefined value undefined call transform key undefined value undefined category Methods description Function name transform member TransformChain see notes todos dot prop here n klassProps" >`TransformChain.transform`</a>

<!-- /div -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports Target undefined"  data-call="exports Target undefined"  data-category="Methods"  data-description="Function"  data-name="exports"  data-all="meta exports Target undefined call exports Target undefined category Methods description Function name exports member see notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- div -->

## `traverse`
* <a href="#traverse"  data-meta="traverse useThis false"  data-call="traverse useThis false"  data-category="Methods"  data-description="Function traverse this or this entries"  data-name="traverse"  data-all="meta traverse useThis false call traverse useThis false category Methods description Function traverse this or this entries name traverse member see notes todos klassProps" >`traverse`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `TransformChain`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/TransformChain.js">🔬  Tests: TransformChain</a>&nbsp;

<h3 id="TransformChain-prototype-" data-member="TransformChain" data-category="Chainable" data-name="Transform"><code>TransformChain.</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L8 "View in source") [&#x24C9;][1]

Map


#### @symb 

🤖 

#### @extends
ChainedMap


---

<!-- /div -->

<!-- div -->

<h3 id="TransformChain-prototype-remap" data-member="TransformChain" data-category="Methods" data-name="remap"><code>TransformChain.remap(from=undefined, [to=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L210 "View in source") [&#x24C9;][1]

(Function): remap properties from `1` to another, for example, apis with inconsistent naming


#### @symb 

🗺 

#### @Since
1.0.0

#### Arguments
1. `from=undefined` *(Object|string)*: property name string, or {&#91;from&#93;: to}
2. `[to=undefined]` *(string)*: property name to change key to

#### Returns
*(Chain)*: @chainable

#### Example
```js
chain.remap('dis', 'dat').from({ dis: true })

chain.entries()
//=> {dat: true}

```
#### Example
```js
chain
   .remap({dis: 'dat'})
   .from({dis: 1, other: true}}

 chain.entries()
 //=> {dist: 1, other: true}
```
---

<!-- /div -->

<!-- div -->

<h3 id="TransformChain-prototype-set" data-member="TransformChain" data-category="Methods" data-name="set"><code>TransformChain.set(key=undefined, val=undefined, dotPropKey=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L124 "View in source") [&#x24C9;][1]

Function


#### @Since
1.0.0

#### Arguments
1. `key=undefined` *(Primitive)*: key to set with
2. `val=undefined` *(any)*: value to set for key
3. `dotPropKey=undefined` *(|string|string&#91;&#93;)*: special key used for initializing dot prop values in an optimized way to keep reference

#### Returns
*(Chainable)*: @chainable

---

<!-- /div -->

<!-- div -->

<h3 id="TransformChain-prototype-transform" data-member="TransformChain" data-category="Methods" data-name="transform"><code>TransformChain.transform(key=undefined, value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L106 "View in source") [&#x24C9;][1]

Function


#### @todos 

- [ ] dot-prop here
 

#### @Since
1.0.2

#### Arguments
1. `key=undefined` *(Function|string)*: currently just string
2. `value=undefined` *(Function)*: callback accepting the value as only arg to transform with

#### Returns
*(TransformChain)*: @chainable

#### Example
```js
// coerce values with .id into the value they hold
chain.transform('dis', val => (typeof val === 'string' ? val : val.id))

chain.set('dis', 'eh')
chain.get('dis')
//=> 'eh'

chain.set('dis', { id: 'eh' })
chain.get('dis')
//=> 'eh'

```
#### Example
```js
import { format } from 'date-fns/esm'
import { Chain } from 'chain-able'

const chain = new Chain()
chain.transform('created_at', date => format(date, 'MM/DD/YYYY'))
chain.set('created_at', new Date())

// is formatted human-readable pretty!
const { created_at } = chain.entries()
//=> '02/11/2014'

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(Target=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L18 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `Target=undefined` *(Class|Composable)*: composable class

#### Returns
*(TransformChain)*: class

#### Example
```js
compose(class {})
//=> TransformChain

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traverse`

<!-- div -->

<h3 id="traverse" data-member="" data-category="Methods" data-name="traverse"><code>traverse([useThis=false])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L56 "View in source") [&#x24C9;][1]

(Function): traverse `this`, or `this.entries`


#### @Since
1.0.2

#### Arguments
1. `[useThis=false]` *(boolean|traversable)*: use the instance properties that are `mapish` as well

#### Returns
*(TraverseChain)*: @chainable

#### Example
```js
TAKE FROM TRAVERSECHAIN
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #transformchain "Jump back to the TOC."
