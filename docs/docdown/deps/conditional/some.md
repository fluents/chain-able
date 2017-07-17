# some.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional.prototype`
* <a href="#conditional-prototype-some">`conditional.prototype.some`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional.prototype`

<!-- div -->

<h3 id="conditional-prototype-some"><a href="#conditional-prototype-some">#</a>&nbsp;<code>conditional.prototype.some(predicate=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/some.js#L23 "View in source") [&#x24C9;][1]

(Function): map all values in an array to see if **some** match

#### Since
4.0.1

#### Arguments
1. `predicate=undefined` *(Function)*: match the value

#### Returns
*(boolean)*: all match predicate

#### Example
```js
const someBoolean = some(x => typeof x === 'boolean'q)

   someBoolean([true])
   //=> true

   someBoolean([1])
   //=> false

   someBoolean([1, true])
   //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #conditional.prototype "Jump back to the TOC."
