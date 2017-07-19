# arrayOf.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports predicate undefined"  data-call="exports predicate undefined"  data-category="Methods"  data-description="Function every item in an array matches predicate"  data-name="exports"  data-all="meta exports predicate undefined call exports predicate undefined category Methods description Function every item in an array matches predicate name exports member see notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(predicate=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/arrayOf.js#L22 "View in source") [&#x24C9;][1]

(Function): every item in an array matches predicate


#### @Since
4.0.0 was in validatorBuilder

#### Arguments
1. `predicate=undefined` *(Function)*: test to pass on every item in an array

#### Returns
*(boolean)*: all match predicate

#### Example
```js
isArrayOf(isTrue)([true, true]) //=> true
isArrayOf(isEmpty)(['']) //=> true

isArrayOf(isBoolean)([true, false, 1, 2, 0]) //=> false
isArrayOf(isString)(['string', Number]) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
