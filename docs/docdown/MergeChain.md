# MergeChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `merge`
* <a href="#merge">`merge`</a>

<!-- /div -->

<!-- div -->

## `merger`
* <a href="#merger">`merger`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `merge`

<!-- div -->

<h3 id="merge"><a href="#merge">#</a>&nbsp;<code>merge([obj2=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L91 "View in source") [&#x24C9;][1]



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

## `merger`

<!-- div -->

<h3 id="merger"><a href="#merger">#</a>&nbsp;<code>merger(opts)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MergeChain.js#L65 "View in source") [&#x24C9;][1]



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

<!-- /div -->

 [1]: #merge "Jump back to the TOC."
