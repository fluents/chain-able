# eq.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `traverse.prototype`
* <a href="#traverse-prototype-exports">`traverse.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `traverse.prototype`

<!-- div -->

<h3 id="traverse-prototype-exports"><a href="#traverse-prototype-exports">#</a>&nbsp;<code>traverse.prototype.exports(a, b, [loose=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eq.js#L94 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `a` *(any)*: compare a with b
2. `b` *(any)*: compare b with a
3. `[loose=false]` *(boolean)*: whether to do looser equals check

#### Returns
*(boolean)*: isEqual

#### Example
```js
eq(1, 1)
   //=> true

   eq(true, false)
   //=> false

   eq({}, {})
   //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse.prototype "Jump back to the TOC."
