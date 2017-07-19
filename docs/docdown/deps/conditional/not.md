# not.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional`
* <a href="#conditional-prototype-not"  data-meta="not fn undefined"  data-call="not fn undefined"  data-category="Methods"  data-description="Function return a negated function"  data-name="not"  data-member="conditional"  data-all="meta not fn undefined call not fn undefined category Methods description Function return a negated function name not member conditional see notes todos klassProps" >`conditional.not`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional`

<!-- div -->

<h3 id="conditional-prototype-not" data-member="conditional" data-category="Methods" data-name="not"><code>conditional.not(fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/not.js#L23 "View in source") [&#x24C9;][1]

(Function): return a negated function


#### @Since
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

 [1]: #conditional "Jump back to the TOC."
