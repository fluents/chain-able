# MergeChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MergeChain`
* <a href="#">``</a>

<!-- /div -->

<!-- div -->

## `MergeChain.prototype`
* <a href="#MergeChain-prototype-">`MergeChain.prototype.`</a>
* <a href="#MergeChain-prototype-merger">`MergeChain.prototype.merger`</a>
* <a href="#MergeChain-prototype-onExisting">`MergeChain.prototype.onExisting`</a>

<!-- /div -->

<!-- div -->

## `handleExisting`
* <a href="#handleExisting">`handleExisting`</a>

<!-- /div -->

<!-- div -->

## `if`
* <a href="#if">`if`</a>
* <a href="#if">`if`</a>

<!-- /div -->

<!-- div -->

## `merge`
* <a href="#merge">`merge`</a>

<!-- /div -->

<!-- div -->

## `setChosen`
* <a href="#setChosen">`setChosen`</a>
* <a href="#setChosen">`setChosen`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `MergeChain`

<!-- div -->

<h3 id=""><a href="#">#</a>&nbsp;<code>(parent=undefined)</code></h3>
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

<!-- /div -->

<!-- div -->

## `MergeChain.prototype`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/MergeChain.js">🔬  Tests: MergeChain</a>&nbsp;

<h3 id="MergeChain-prototype-"><a href="#MergeChain-prototype-">#</a>&nbsp;<code>MergeChain.prototype.</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L37 "View in source") [&#x24C9;][1]

Map


### @todos 

- [ ] consider just making this a function,
      because 80/20 onValue merger & onExisting
      are rarely used & are easily overridable with .merge
 

### @extends
ChainedMapBase


#### Since
1.0.0

---

<!-- /div -->

<!-- div -->

<h3 id="MergeChain-prototype-merger"><a href="#MergeChain-prototype-merger">#</a>&nbsp;<code>MergeChain.prototype.merger(opts=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L93 "View in source") [&#x24C9;][1]

(Function): options for merging with dopemerge

#### Since
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

<h3 id="MergeChain-prototype-onExisting"><a href="#MergeChain-prototype-onExisting">#</a>&nbsp;<code>MergeChain.prototype.exports</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L334 "View in source") [&#x24C9;][1]

unknown

#### Since
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

## `handleExisting`

<!-- div -->

<h3 id="handleExisting"><a href="#handleExisting">#</a>&nbsp;<code>handleExisting(key=undefined, value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L173 "View in source") [&#x24C9;][1]

Function


### @todos 

- [ ] could use .eq here
- [ ] if (isMapish(obj)) obj = obj.entries()
 
#### Arguments
1. `key=undefined` *(Primitive): key &#42;(shorthands&#91;key&#93; or just key)*&#42;
2. `value=undefined` *(&#42;)*: obj&#91;key&#93;

#### Returns
*(void)*:

#### Example
```js
var obj = { key: 1 }

MergeChain.init(obj).merge({ key: ['value'] })

// goes to this internal scoped function
handleExisting('key', ['value'])
// if there is .onValue or .onExisting, use them, default deepmerge

obj
//=> {key: [1, 'value']}

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `if`

<!-- div -->

<h3 id="if"><a href="#if">#</a>&nbsp;<code>if()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L208 "View in source") [&#x24C9;][1]

(Function): check if it's shorthanded
-> check if it has a value already

---

<!-- /div -->

<!-- div -->

<h3 id="if"><a href="#if">#</a>&nbsp;<code>if()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L216 "View in source") [&#x24C9;][1]

(Function): if we have onExisting, call it
else default to dopemerge

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `merge`

<!-- div -->

<h3 id="merge"><a href="#merge">#</a>&nbsp;<code>merge([obj2=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L122 "View in source") [&#x24C9;][1]

(Function): merges object in, goes through all keys, checks cbs, dopemerges


### @todos 

- [ ] issue here if we extend without shorthands &
      we want to merge existing values... :s
 
#### Since
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

<h3 id="setChosen"><a href="#setChosen">#</a>&nbsp;<code>setChosen(keyToSet=undefined, valueToSet=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L199 "View in source") [&#x24C9;][1]

(Function): when fn is a full method, not an extended shorthand

#### Since
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

<!-- div -->

<h3 id="setChosen"><a href="#setChosen">#</a>&nbsp;<code>setChosen()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L242 "View in source") [&#x24C9;][1]

(Function): maybe we should not even have `.onExisting`
since we can just override merge method...
and then client can just use a custom merger...
<br>
<br>
could add and remove subscriber but that's overhead and
tricky here, because if we set a value that was just set...

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #mergechain "Jump back to the TOC."
