# pipe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="R pipe f g h a b h g f a b exports f undefined g undefined a b n o o p x y y z a b n z"  data-call="exports f undefined g undefined"  data-category="Function"  data-description="Function Performs left to right function composition The leftmost function may have any arity the remaining functions must be unary br br In some libraries this function is named sequence"  data-member="fp"  data-notes="The result of pipe is not automatically curried This is a variation is the internal version with only 2 functions for now"  data-all="meta R pipe f g h a b h g f a b n exports f undefined g undefined n a b n o o p x y y z a b n z call exports f undefined g undefined category Function description Function Performs left to right function composition The leftmost function may have nany arity the remaining functions must be unary n br n br nIn some libraries this function is named sequence name member fp see notes The result of pipe is not automatically curried n This is a variation is the internal version with only 2 functions for now n todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<h3 id="fp-prototype-" data-member="fp" data-category="Function" data-name="pipe"><code>fp.exports(f=undefined, g=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/pipe.js#L30 "View in source") [&#x24C9;][1]

(Function): Performs left-to-right function composition. The leftmost function may have
any arity; the remaining functions must be unary.
<br>
<br>
In some libraries this function is named `sequence`.


#### @notes 

* The result of pipe is not automatically curried.
* This is a variation, is the internal version with only 2 functions, for now
 

#### @sig 

(((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z) 

#### @symb 

R.pipe(f, g, h)(a, b) = h(g(f(a, b))) 

#### @Since
v5.0.0

#### Arguments
1. `f=undefined` *(...Function)*: function first
2. `g=undefined` *(...Function)*: function next

#### Returns
*(Function)*:

#### Example
```js
var f = R.pipe(Math.pow, R.negate, R.inc)
f(3, 4) // -(3^4) + 1

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
