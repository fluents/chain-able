# number.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isNumber"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isNumber"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is real js label fluents chain able blob master src deps is real js"  data-notes="was not needed except for abstract const isObj require obj const isSymbol require symbol isObj x isSymbol x false 0x 0 9a f i test x d d d e d test x"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isNumber member is see href https github com fluents chain able blob master src deps is real js label fluents chain able blob master src deps is real js notes was not needed except for abstract n const isObj require obj n const isSymbol require symbol n isObj x isSymbol x n false n 0x 0 9a f i test x n d d d e d test x n todos klassProps" >`is.isNumber`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isNumber" data-member="is" data-category="Methods" data-name="isNumber"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/number.js#L51 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/real.js" >fluents/chain able/blob/master/src/deps/is/real.js</a>

#### @notes 

* was not needed except for abstract ==
  const isObj = require('./obj')
  const isSymbol = require('./symbol')
  (isObj(x) || isSymbol(x)
    ? false
    : (/^0x[0-9a-f]+$/i).test(x) ||
        (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(x))
 

#### @extends




#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isNumber

#### Example
```js
isNumber(1)
//=> true
isNumber(new Number(1))
//=> true
isNumber(Number(1))
//=> true
isNumber(NaN)
//=> true

isNumber(null)
//=> false
isNumber(undefined)
//=> false
isNumber(void 0)
//=> false
isNumber({})
//=> false
isNumber('')
//=> false
isNumber(false)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
