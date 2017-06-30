# MergeChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MergeChain.prototype`
* <a href="#MergeChain-prototype-exports">`MergeChain.prototype.exports`</a>
* <a href="#MergeChain-prototype-merger">`MergeChain.prototype.merger`</a>

<!-- /div -->

<!-- div -->

## `merge`
* <a href="#merge">`merge`</a>

<!-- /div -->

<!-- div -->

## `setChosen`
* <a href="#setChosen">`setChosen`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `MergeChain.prototype`

<!-- div -->

<h3 id="MergeChain-prototype-exports"><a href="#MergeChain-prototype-exports">#</a>&nbsp;<code>MergeChain.prototype.exports</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L330 "View in source") [&#x24C9;][1]



#### Since
0.9.0

#### Example
```js
const {Chain, MergeChain} = require('chain-able')

   const chain = new Chain().set('str', 'stringy')

   MergeChain.init(chain)
     .onExisting((a, b) => a + b)
     .merge({str: '+'})

   chain.get('str')
   //=> 'stringy+'
```
---

<!-- /div -->

<!-- div -->

<h3 id="MergeChain-prototype-merger"><a href="#MergeChain-prototype-merger">#</a>&nbsp;<code>MergeChain.prototype.merger(opts)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L93 "View in source") [&#x24C9;][1]



#### Since
1.0.2

#### Arguments
1. `opts` *(Function|Object)*: when object: options for the merger. when function: is the merger

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
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `merge`

<!-- div -->

<h3 id="merge"><a href="#merge">#</a>&nbsp;<code>merge([obj2=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L121 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Arguments
1. `[obj2=undefined]` *(Object): object to merge in, defaults to this.get('obj')*

#### Returns
*(MergeChain)*: @chainable

#### Example
```js
const chain = new Chain()
 chain.merge({canada: {eh: true}})
 chain.merge({canada: {arr: [0, {'1': 2}], eh: {again: true}}})
 chain.entries()
 //=> {canada:{ eh: {again: true}, arr: [0, {'1': 2}] }}
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `setChosen`

<!-- div -->

<h3 id="setChosen"><a href="#setChosen">#</a>&nbsp;<code>setChosen(keyToSet, valueToSet)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L197 "View in source") [&#x24C9;][1]



#### Since
0.5.0

#### Arguments
1. `keyToSet` *(Primitive)*: key we chose to set
2. `valueToSet` *(&#42;): value we chose to set &#42;(merged, existing, new)*&#42;

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

 [1]: #mergechain.prototype "Jump back to the TOC."
