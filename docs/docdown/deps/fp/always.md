# always.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports value undefined a a"  data-call="exports value undefined"  data-category="Function"  data-description="Function Returns a function that always returns the given value Note that for non primitives the value returned is a reference to the original value br br This function is known as const constant or K for K combinator in other languages and libraries"  data-member="fp"  data-see="href https github com ramda ramda issues 1038 label ramda constant docs issue href https github com ramda ramda blob master src always js label ramda always href https github com lodash lodash issues 1010 label lodash constant href http underscorejs org constant label underscore constant"  data-all="meta exports value undefined n a a call exports value undefined category Function description Function Returns a function that always returns the given value Note that for nnon primitives the value returned is a reference to the original value n br n br nThis function is known as const constant or K for K combinator in nother languages and libraries name member fp see href https github com ramda ramda issues 1038 label ramda constant docs issue href https github com ramda ramda blob master src always js label ramda always href https github com lodash lodash issues 1010 label lodash constant href http underscorejs org constant label underscore constant notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/fp.d.ts">🌊  Types: fp.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/fp/always.js">🔬  Tests: always</a>&nbsp;

<h3 id="fp-prototype-" data-member="fp" data-category="Function" data-name="always"><code>fp.exports(value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/always.js#L22 "View in source") [&#x24C9;][1]

(Function): Returns a function that always returns the given value. Note that for
non-primitives the value returned is a reference to the original value.
<br>
<br>
This function is known as `const`, `constant`, or `K` *(for K combinator)* in
other languages and libraries.


#### @see 

* <a href="https://github.com/ramda/ramda/issues/1038" >ramda-constant-docs-issue</a>
* <a href="https://github.com/ramda/ramda/blob/master/src/always.js" >ramda-always</a>
* <a href="https://github.com/lodash/lodash/issues/1010" >lodash-constant</a>
* <a href="http://underscorejs.org/#constant" >underscore-constant</a>

#### @sig 

a -> (* -> a) 

#### @Since
v5.0.0

#### Arguments
1. `value=undefined` *(&#42;)*: The value to wrap in a function

#### Returns
*(Function)*: A Function :: &#42; -> val.

#### Example
```js
var t = always('Tee')
t() //=> 'Tee'

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
