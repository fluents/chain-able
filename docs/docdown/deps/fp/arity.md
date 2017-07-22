# arity.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-exports"  data-meta="exports n undefined fn undefined"  data-call="exports n undefined fn undefined"  data-category="Methods"  data-description="Function just for length of a function"  data-name="exports"  data-member="fp"  data-see="href https developer mozilla org en US docs Web JavaScript Reference Global Objects Function arity label Developer mozilla org en us docs web java script reference global objects function arity"  data-todos="keeping this means change uglify"  data-all="meta exports n undefined fn undefined call exports n undefined fn undefined category Methods description Function just for length of a function name exports member fp see href https developer mozilla org en US docs Web JavaScript Reference Global Objects Function arity label Developer mozilla org en us docs web java script reference global objects function arity notes todos keeping this means change uglify n klassProps" >`fp.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<h3 id="fp-prototype-exports" data-member="fp" data-category="Methods" data-name="exports"><code>fp.exports(n=undefined, fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/arity.js#L17 "View in source") [&#x24C9;][1]

(Function): just for `.length` of a function?


#### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arity" >Developer.mozilla.org/en us/docs/web/java script/reference/global objects/function/arity</a>

#### @todos 

- [ ] keeping this means change uglify...
 

#### @Since
5.0.0

#### Arguments
1. `n=undefined` *(number)*: number of arguments
2. `fn=undefined` *(Function)*: function to wrap

#### Returns
*(Function)*: function with params

#### Example
```js
const wan = one => console.log(one)
 arity(1, wan)
 => function(one => wan(one))
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
