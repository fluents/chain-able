# not.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional.prototype`
* <a href="#conditional-prototype-exports">`conditional.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional.prototype`

<!-- div -->

<h3 id="conditional-prototype-exports"><a href="#conditional-prototype-exports">#</a>&nbsp;<code>conditional.prototype.exports(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/not.js#L20 "View in source") [&#x24C9;][1]

(Function): return a negated function

#### Since
4.0.1

#### Arguments
1. `fn=undefined` *(Function)*: any function

#### Returns
*(Function)*: !Function

#### Example
```js
const falsed = not(x => true)
const trued = not(x => false)

trued()
//=> true

falsed()
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #conditional.prototype "Jump back to the TOC."
