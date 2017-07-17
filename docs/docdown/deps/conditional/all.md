# all.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional.prototype`
* <a href="#conditional-prototype-all">`conditional.prototype.all`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional.prototype`

<!-- div -->

<h3 id="conditional-prototype-all"><a href="#conditional-prototype-all">#</a>&nbsp;<code>conditional.prototype.all(predicate=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/all.js#L19 "View in source") [&#x24C9;][1]

(Function): map all values in an array to see if all match

#### Since
4.0.1

#### Arguments
1. `predicate=undefined` *(Function)*: match the value

#### Returns
*(boolean)*: all match predicate

#### Example
```js
const allBoolean = all(x => typeof x === 'boolean'q)

   allBoolean([true])
   //=> true

   allBoolean([1])
   //=> false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #conditional.prototype "Jump back to the TOC."
