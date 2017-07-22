# last.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="List"  data-description="Function Returns the last element of the given list or string"  data-member="fp"  data-all="meta exports x undefined call exports x undefined category List description Function Returns the last element of the given list or string name member fp see notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/fp.d.ts">🌊  Types: fp.d</a>&nbsp;

* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/always.js">🔬  Tests: always</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/construct.js">🔬  Tests: construct</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/curry.js">🔬  Tests: curry</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/firstLast.js">🔬  Tests: firstLast</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/flip.js">🔬  Tests: flip</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/flip2.js">🔬  Tests: flip2</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/path.js">🔬  Tests: path</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/pipe.js">🔬  Tests: pipe</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/remove.js">🔬  Tests: remove</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/replace.js">🔬  Tests: replace</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/reverse.js">🔬  Tests: reverse</a>&nbsp;

<h3 id="fp-prototype-" data-member="fp" data-category="List" data-name="last"><code>fp.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/last.js#L33 "View in source") [&#x24C9;][1]

(Function): Returns the last element of the given list or string.


#### @extends




#### @Since
5.0.0-beta.2

#### Arguments
1. `x=undefined` *(&#42;)*: list to get last index of

#### Returns
*(&#42;)*:

#### Example
```js
last(['fi', 'fo', 'fum']) //=> 'fum'
last([]) //=> undefined

last('abc') //=> 'c'
last('') //=> ''

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
