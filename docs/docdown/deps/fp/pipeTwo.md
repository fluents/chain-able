# pipeTwo.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports f undefined g undefined"  data-call="exports f undefined g undefined"  data-category="Function"  data-description="Function Performs left to right function composition ONLY CAN PIPE 2 ARGUMENTS"  data-member="fp"  data-see="href https github com ramda ramda blob master src pipe js label https github com ramda ramda blob master src pipe js href https github com ramda ramda blob master test pipe js label https github com ramda ramda blob master test pipe js"  data-notes="The result of pipe is not automatically curried This is a variation is the internal version with only 2 functions for now"  data-all="meta exports f undefined g undefined call exports f undefined g undefined category Function description Function Performs left to right function composition ONLY CAN PIPE 2 ARGUMENTS name member fp see href https github com ramda ramda blob master src pipe js label https github com ramda ramda blob master src pipe js href https github com ramda ramda blob master test pipe js label https github com ramda ramda blob master test pipe js notes The result of pipe is not automatically curried n This is a variation is the internal version with only 2 functions for now n todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/fp.d.ts">🌊  Types: fp.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/fp/pipe.js">🔬  Tests: pipe</a>&nbsp;

<h3 id="fp-prototype-" data-member="fp" data-category="Function" data-name="pipeTwo"><code>fp.exports(f=undefined, g=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/pipeTwo.js#L28 "View in source") [&#x24C9;][1]

(Function): Performs left-to-right function composition. ONLY CAN PIPE `2` ARGUMENTS


#### @see 

* <a href="https://github.com/ramda/ramda/blob/master/src/pipe.js" >https://github.com/ramda/ramda/blob/master/src/pipe.js</a>
* <a href="https://github.com/ramda/ramda/blob/master/test/pipe.js" >https://github.com/ramda/ramda/blob/master/test/pipe.js</a>

#### @notes 

* The result of pipe is not automatically curried.
* This is a variation, is the internal version with only 2 functions, for now
 

#### @Since
v5.0.0

#### Arguments
1. `f=undefined` *(...Function)*: function first
2. `g=undefined` *(...Function)*: function next

#### Returns
*(Function)*:

#### Example
```js
var f = R.pipe(Math.pow, R.negate)
f(3, 4) // -(3^4) + 1

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
