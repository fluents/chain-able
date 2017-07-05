# or.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional.prototype`
* <a href="#conditional-prototype-exports">`conditional.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional.prototype`

<!-- div -->

<h3 id="conditional-prototype-exports"><a href="#conditional-prototype-exports">#</a>&nbsp;<code>conditional.prototype.exports(left=undefined, right=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/or.js#L23 "View in source") [&#x24C9;][1]

first fn || second fn

#### Since
4.0.1

#### Arguments
1. `left=undefined` *(Function)*: first fn
2. `right=undefined` *(Function)*: second fn

#### Returns
*(boolean)*: one of the functions return truthy

#### Example
```js
const either = or(x => x === false, x => x === true)

either([true])
//=> true

either([new Boolean(true)])
//=> false

either([1])
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #conditional.prototype "Jump back to the TOC."
