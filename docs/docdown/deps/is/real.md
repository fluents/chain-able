# real.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isReal"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isReal"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is null js label is null href https github com fluents chain able blob master src deps is undefined js label is undefined href http 2ality com 2013 04 quirk implicit conversion html label http 2ality com 2013 04 quirk implicit conversion html href https github com fluents chain able search utf8 E2 9C 93 q https javascriptrefined io nan and typeof 36cd6e2a4e43 type label https javascriptrefined io nan and typeof 36cd6e2a4e43 href https developer mozilla org en docs Web JavaScript Reference Global Objects isNaN label https developer mozilla org en docs Web JavaScript Reference Global Objects isNaN"  data-notes="eslint disable next line no self compare x x"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isReal member is see href https github com fluents chain able blob master src deps is null js label is null href https github com fluents chain able blob master src deps is undefined js label is undefined href http 2ality com 2013 04 quirk implicit conversion html label http 2ality com 2013 04 quirk implicit conversion html href https github com fluents chain able search utf8 E2 9C 93 q https javascriptrefined io nan and typeof 36cd6e2a4e43 type label https javascriptrefined io nan and typeof 36cd6e2a4e43 href https developer mozilla org en docs Web JavaScript Reference Global Objects isNaN label https developer mozilla org en docs Web JavaScript Reference Global Objects isNaN notes eslint disable next line no self compare n x x n todos klassProps" >`is.isReal`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isReal" data-member="is" data-category="Methods" data-name="isReal"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/real.js#L51 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js" >is/null</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/undefined.js" >is/undefined</a>
* <a href="http://2ality.com/2013/04/quirk-implicit-conversion.html" >http://2ality.com/2013/04/quirk-implicit-conversion.html</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43&type=" >https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN" >https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN</a>

#### @notes 

* eslint-disable-next-line no-self-compare
      && x !== x
 

#### @extends




#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isReal

#### Example
```js
isReal(null)
//=> false
isReal(void 0)
//=> false
const nan = Number(undefined)
isReal(nan)
//=> false

isReal({ eh: true })
//=> true
isReal({})
//=> true
isReal(Object)
//=> true
isReal([])
//=> true
isReal(new Set())
//=> true
isReal(function() {})
//=> true
isReal('')
//=> true
isReal(1)
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
