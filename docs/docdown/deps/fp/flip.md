# flip.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports fn undefined a b c z b a c"  data-call="exports fn undefined"  data-category="Function"  data-description="Function flip the fn args br Creates a function that invokes func with arguments reversed"  data-member="fp"  data-see="href https github com ramda ramda blob master src flip js label ramda flip href https github com lodash lodash blob 4 2 1 npm packages lodash flip index js label lodash flip href https github com fluents chain able blob master src deps fp reverse js label fp reverse"  data-todos="could also just call with fn apply b a and have flipN"  data-all="meta n exports fn undefined n a b c z b a c call exports fn undefined category Function description Function flip the fn args br Creates a function that invokes func with arguments reversed name member fp see href https github com ramda ramda blob master src flip js label ramda flip href https github com lodash lodash blob 4 2 1 npm packages lodash flip index js label lodash flip href https github com fluents chain able blob master src deps fp reverse js label fp reverse notes todos could also just call with fn apply b a and have flipN n klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/fp.d.ts">🌊  Types: fp.d</a>&nbsp;

* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/flip.js">🔬  Tests: flip</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/fp/flip2.js">🔬  Tests: flip2</a>&nbsp;

<h3 id="fp-prototype-" data-member="fp" data-category="Function" data-name="flip"><code>fp.exports(fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/flip.js#L33 "View in source") [&#x24C9;][1]

(Function): flip the fn args:<br> Creates a function that invokes `func` with arguments reversed.


#### @see 

* <a href="https://github.com/ramda/ramda/blob/master/src/flip.js" >ramda-flip</a>
* <a href="https://github.com/lodash/lodash/blob/4.2.1-npm-packages/lodash.flip/index.js" >lodash-flip</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/fp/reverse.js" >fp/reverse</a>

#### @todos 

- [ ] could also just call with fn.apply([b, a]), and have flipN
 

#### @sig 

((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z) 

#### @symb 

🙃 

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
flip(mergeThree)(1, 2, 3) //=> [3, 2, 1]

const flipped = flip((...args) => args)
flipped('a', 'b', 'c', 'd')
// => ['d', 'c', 'b', 'a']

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
