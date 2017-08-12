# MergeChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MergeChain`
* <a href="#"  data-meta="parent undefined"  data-call="parent undefined"  data-category="Methods"  data-description="Function"  data-all="meta parent undefined call parent undefined category Methods description Function name member see notes todos klassProps" >``</a>
* <a href="#MergeChain-prototype-"  data-meta="ChainedMapBase"  data-category="Properties"  data-description="Map"  data-member="MergeChain"  data-see="href https github com fluents chain able blob master src deps dopemerge dopemerge js label deps dopemerge"  data-todos="consider just making this a function because 80 20 onValue merger onExisting are rarely used are easily overridable with merge"  data-all="meta ChainedMapBase call category Properties description Map name member MergeChain see href https github com fluents chain able blob master src deps dopemerge dopemerge js label deps dopemerge notes todos consider just making this a function n because 80 20 onValue merger onExisting n are rarely used are easily overridable with merge n klassProps" >`MergeChain.`</a>
* <a href="#MergeChain-prototype-merger"  data-meta="merger opts undefined"  data-call="merger opts undefined"  data-category="Methods"  data-description="Function options for merging with dopemerge"  data-name="merger"  data-member="MergeChain"  data-see="href https github com fluents chain able blob master src deps dopemerge dopemerge js label dopemerge"  data-all="meta merger opts undefined call merger opts undefined category Methods description Function options for merging with dopemerge name merger member MergeChain see href https github com fluents chain able blob master src deps dopemerge dopemerge js label dopemerge notes todos klassProps" >`MergeChain.merger`</a>
* <a href="#MergeChain-prototype-onExisting"  data-meta="exports"  data-call="exports"  data-category="Properties"  data-description="unknown"  data-name="onExisting"  data-member="MergeChain"  data-all="meta exports call exports category Properties description unknown name onExisting member MergeChain see notes todos klassProps" >`MergeChain.onExisting`</a>

<!-- /div -->

<!-- div -->

## `merge`
* <a href="#merge"  data-meta="merge obj2 undefined"  data-call="merge obj2 undefined"  data-category="Methods"  data-description="Function merges object in goes through all keys checks cbs dopemerges"  data-name="merge"  data-see="href https github com fluents chain able blob master src ChainedMap js label ChainedMap"  data-todos="issue here if we extend without shorthands we want to merge existing values s"  data-all="meta merge obj2 undefined call merge obj2 undefined category Methods description Function merges object in goes through all keys checks cbs dopemerges name merge member see href https github com fluents chain able blob master src ChainedMap js label ChainedMap notes todos issue here if we extend without shorthands n we want to merge existing values s n klassProps" >`merge`</a>

<!-- /div -->

<!-- div -->

## `setChosen`
* <a href="#setChosen"  data-meta="setChosen keyToSet undefined valueToSet undefined"  data-call="setChosen keyToSet undefined valueToSet undefined"  data-category="Methods"  data-description="Function when fn is a full method not an extended shorthand"  data-name="setChosen"  data-all="meta setChosen keyToSet undefined valueToSet undefined call setChosen keyToSet undefined valueToSet undefined category Methods description Function when fn is a full method not an extended shorthand name setChosen member see notes todos klassProps" >`setChosen`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `MergeChain`

<!-- div -->

<h3 id="" data-member="" data-category="Methods" data-name="MergeChain"><code>(parent=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L54 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `parent=undefined` *(Chainable|ParentType)*: ParentType required, for merging

#### Returns
*(MergeChain)*: @chainable

#### Example
```js
let map = new Map()
map.set('eh', 1)
map.set('coo', 'oo')

MergeChain.init(map).merge({ eh: 2 })
console.dir(map)
//=> Map { 'eh' => 2, 'coo' => 'oo' }

```
---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/MergeChain.js">🔬  Tests: MergeChain</a>&nbsp;

<h3 id="MergeChain-prototype-" data-member="MergeChain" data-category="Properties" data-name="MergeChain"><code>MergeChain.</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L9 "View in source") [&#x24C9;][1]

Map


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js" >deps/dopemerge</a>

#### @todos 

- [ ] consider just making this a function,
      because 80/20 onValue merger & onExisting
      are rarely used & are easily overridable with .merge
 

#### @extends
ChainedMapBase



#### @Since
1.0.0

---

<!-- /div -->

<!-- div -->

<h3 id="MergeChain-prototype-merger" data-member="MergeChain" data-category="Methods" data-name="merger"><code>MergeChain.merger(opts=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L93 "View in source") [&#x24C9;][1]

(Function): options for merging with dopemerge


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js" >dopemerge</a>

#### @Since
1.0.2

#### Arguments
1. `opts=undefined` *(Function|Object)*: when object: options for the merger. when function: is the merger

#### Returns
*(MergeChain)*: @chainable

#### Example
```js
{
    stringToArray: true,
    boolToArray: false,
    boolAsRight: true,
    ignoreTypes: ['null', 'undefined', 'NaN'],
    debug: false,
  }
```
#### Example
```js
.merger(require('lodash.mergewith')())
```
---

<!-- /div -->

<!-- div -->

<h3 id="MergeChain-prototype-onExisting" data-member="MergeChain" data-category="Properties" data-name="onExisting"><code>MergeChain.exports</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L335 "View in source") [&#x24C9;][1]

unknown


#### @Since
0.9.0

#### Example
```js
const { Chain, MergeChain } = require('chain-able')

const chain = new Chain().set('str', 'stringy')

MergeChain.init(chain).onExisting((a, b) => a + b).merge({ str: '+' })

chain.get('str')
//=> 'stringy+'

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `merge`

<!-- div -->

<h3 id="merge" data-member="" data-category="Methods" data-name="merge"><code>merge([obj2=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L122 "View in source") [&#x24C9;][1]

(Function): merges object in, goes through all keys, checks cbs, dopemerges


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js" >ChainedMap</a>

#### @todos 

- [ ] issue here if we extend without shorthands &
      we want to merge existing values... :s
 

#### @Since
1.0.0

#### Arguments
1. `[obj2=undefined]` *(Object): object to merge in, defaults to this.get('obj')*

#### Returns
*(MergeChain)*: @chainable

#### Example
```js
const chain = new Chain()
chain.merge({ canada: { eh: true } })
chain.merge({ canada: { arr: [0, { '1': 2 }], eh: { again: true } } })
chain.entries()
//=> {canada:{ eh: {again: true}, arr: [0, {'1': 2}] }}

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `setChosen`

<!-- div -->

<h3 id="setChosen" data-member="" data-category="Methods" data-name="setChosen"><code>setChosen(keyToSet=undefined, valueToSet=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L199 "View in source") [&#x24C9;][1]

(Function): when fn is a full method, not an extended shorthand


#### @Since
0.5.0

#### Arguments
1. `keyToSet=undefined` *(Primitive)*: key we chose to set
2. `valueToSet=undefined` *(&#42;): value we chose to set &#42;(merged, existing, new)*&#42;

#### Returns
*(&#42;)*: .set or &#91;keyToSet&#93; return

#### Example
```js
MergeChain.init(new Chain().extend(['eh']))

//isFunction: true => call parent[keyToSet](valueToSet)
setChosen('eh', 1)
//=> parent
parent.get('eh')
//=> 1

//=>isFunction: false => parent.set(keyToSet, valueToSet)
setChosen('oh', 1)
//=> parent //<- unless .set is overriden
parent.get('oh')
//=> 1

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #mergechain "Jump back to the TOC."
