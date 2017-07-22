# arrayOf.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports predicate undefined"  data-call="exports predicate undefined"  data-category="Methods"  data-description="Function every item in an array matches predicate"  data-name="exports"  data-member="is"  data-all="meta exports predicate undefined call exports predicate undefined category Methods description Function every item in an array matches predicate name exports member is see notes todos klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Methods" data-name="exports"><code>is.exports(predicate=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/arrayOf.js#L23 "View in source") [&#x24C9;][1]

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

 [1]: #is "Jump back to the TOC."
