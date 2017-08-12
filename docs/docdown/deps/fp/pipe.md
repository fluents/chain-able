# pipe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="R pipe f g h a b h g f a b exports first undefined rest undefined a b n o o p x y y z a z"  data-call="exports first undefined rest undefined"  data-category="Function"  data-description="Function Performs left to right function composition The leftmost function may have any arity the remaining functions must be unary In some libraries this function is named sequence"  data-member="fp"  data-see="href R compose label R compose href https github com ramda ramda blob master src pipe js label https github com ramda ramda blob master src pipe js href https github com ramda ramda blob master test pipe js label https github com ramda ramda blob master test pipe js"  data-all="meta R pipe f g h a b h g f a b n exports first undefined rest undefined n a b n o o p x y y z a z call exports first undefined rest undefined category Function description Function Performs left to right function composition The leftmost function may have nany arity the remaining functions must be unary nIn some libraries this function is named sequence name member fp see href R compose label R compose href https github com ramda ramda blob master src pipe js label https github com ramda ramda blob master src pipe js href https github com ramda ramda blob master test pipe js label https github com ramda ramda blob master test pipe js notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/fp.d.ts">🌊  Types: fp.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/fp/pipe.js">🔬  Tests: pipe</a>&nbsp;

<h3 id="fp-prototype-" data-member="fp" data-category="Function" data-name="pipe"><code>fp.exports(first=undefined, rest=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/pipe.js#L46 "View in source") [&#x24C9;][1]

(Function): Performs left-to-right function composition. The leftmost function may have
any arity; the remaining functions must be unary.
In some libraries this function is named `sequence`.


#### @see 

* <a href="R.compose" >R.compose</a>
* <a href="https://github.com/ramda/ramda/blob/master/src/pipe.js" >https://github.com/ramda/ramda/blob/master/src/pipe.js</a>
* <a href="https://github.com/ramda/ramda/blob/master/test/pipe.js" >https://github.com/ramda/ramda/blob/master/test/pipe.js</a>

#### @sig 

(((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z) 

#### @symb 

R.pipe(f, g, h)(a, b) = h(g(f(a, b))) 

#### @extends




#### @Since
v5.0.0

#### Arguments
1. `first=undefined` *(Function)*: function first
2. `rest=undefined` *(...Function)*: function next

#### Returns
*(Function)*:

#### Example
```js
var f = R.pipe(Math.pow, R.negate, R.inc)
f(3, 4) // -(3^4) + 1

```
#### Example
```js
var x = v => v + 'x'
var y = v => v + 'y'
var z = v => v + 'z'

const xyz = pipe(x, y, z)
/// starts with w, adds x, then y, then z
const wxyz = xyz('w')
//=> 'wxyz'

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
