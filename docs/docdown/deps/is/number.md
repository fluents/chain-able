# number.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isNumber">`is.prototype.isNumber`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isNumber"><a href="#is-prototype-isNumber">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/number.js#L42 "View in source") [&#x24C9;][1]

Function


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/real.js">fluents/chain able/blob/master/src/deps/is/real.js</a>

### @notes 

* was not needed except for abstract ==
  const isObj = require('./obj')
  const isSymbol = require('./symbol')
  (isObj(x) || isSymbol(x)
    ? false
    : (/^0x[0-9a-f]+$/i).test(x) ||
        (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(x))
 
#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isNumber

#### Example
```js
isNumber(1)
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

 [1]: #is.prototype "Jump back to the TOC."
