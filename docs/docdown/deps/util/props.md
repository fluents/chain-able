# props.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `allProperties`
* <a href="#allProperties"  data-meta="allProperties obj undefined"  data-call="allProperties obj undefined"  data-category="Methods"  data-description="Function properties property symbols object keys all again for prototype"  data-name="allProperties"  data-all="meta allProperties obj undefined call allProperties obj undefined category Methods description Function properties property symbols object keys all again for prototype name allProperties member see notes todos klassProps" >`allProperties`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `allProperties`

<!-- div -->

<h3 id="allProperties" data-member="" data-category="Methods" data-name="allProperties"><code>allProperties(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/util/props.js#L33 "View in source") [&#x24C9;][1]

(Function): properties, property symbols, object keys ^ all again for prototype

#### Arguments
1. `obj=undefined` *(Object)*: object to get properties & symbols from

#### Returns
*(&#42;)*: properties

#### Example
```js
var obj = { key: true }
allProperties(obj)
//=> ['key']

```
#### Example
```js
class One {
  method() {}
}
class Two extends One {
  eh() {}
}
allProperties(new Two())
//=> ['eh', 'method']

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #allproperties "Jump back to the TOC."
