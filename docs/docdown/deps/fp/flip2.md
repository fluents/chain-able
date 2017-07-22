# flip2.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-exports"  data-meta="exports fn undefined"  data-call="exports fn undefined"  data-category="Methods"  data-description="Function Returns a new function much like the supplied one except that the first two arguments order is reversed"  data-name="exports"  data-member="fp"  data-see="href https github com fluents chain able blob master src deps fp flip js label fluents chain able blob master src deps fp flip js"  data-todos="flipN"  data-all="meta n exports fn undefined call exports fn undefined category Methods description Function Returns a new function much like the supplied one except that the first two narguments order is reversed name exports member fp see href https github com fluents chain able blob master src deps fp flip js label fluents chain able blob master src deps fp flip js notes todos flipN n klassProps" >`fp.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/fp.d.ts">🌊  Types: fp.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/fp/flip2.js">🔬  Tests: flip2</a>&nbsp;

<h3 id="fp-prototype-exports" data-member="fp" data-category="Methods" data-name="exports"><code>fp.exports(fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/flip2.js#L34 "View in source") [&#x24C9;][1]

(Function): Returns a new function much like the supplied one, except that the first two
arguments' order is reversed.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/fp/flip.js" >fluents/chain able/blob/master/src/deps/fp/flip.js</a>

#### @todos 

- [ ] flipN
 

#### @symb 

🙃🙃 

#### @extends




#### @Since
5.0.0-beta.4

#### Arguments
1. `fn=undefined` *(Function)*: The function to invoke with its first two parameters reversed.

#### Returns
*(&#42;)*: The result of invoking `fn` with its first two parameters' order reversed.

#### Example
```js
var mergeThree = (a, b, c) => [].concat(a, b, c)
mergeThree(1, 2, 3) //=> [1, 2, 3]
flip(mergeThree)(1, 2, 3) //=> [2, 1, 3]

const flipped = flip((...args) => args)
flipped('a', 'b', 'c', 'd')
// => ['b', 'a', 'c', 'd']

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
