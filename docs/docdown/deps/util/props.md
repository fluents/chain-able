# props.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `allProperties`
* <a href="#allProperties"  data-meta="allProperties obj undefined"  data-call="allProperties obj undefined"  data-category="Methods"  data-description="Function properties property symbols object keys all again for prototype"  data-name="allProperties"  data-see="href https github com fluents chain able blob master src deps gc js label fluents chain able blob master src deps gc js"  data-todos="https developer mozilla org en US docs Web JavaScript Reference Global Objects Object getOwnPropertyDescriptors const getOwnPropertyDescriptors Object getOwnPropertyDescriptors"  data-all="meta allProperties obj undefined call allProperties obj undefined category Methods description Function properties property symbols object keys all again for prototype name allProperties member see href https github com fluents chain able blob master src deps gc js label fluents chain able blob master src deps gc js notes todos https developer mozilla org en US docs Web JavaScript Reference Global Objects Object getOwnPropertyDescriptors n const getOwnPropertyDescriptors Object getOwnPropertyDescriptors n klassProps" >`allProperties`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `allProperties`

<!-- div -->

<h3 id="allProperties" data-member="" data-category="Methods" data-name="allProperties"><code>allProperties(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/util/props.js#L38 "View in source") [&#x24C9;][1]

(Function): properties, property symbols, object keys ^ all again for prototype


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/gc.js" >fluents/chain able/blob/master/src/deps/gc.js</a>

#### @todos 

- [ ] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
`const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors`
 

#### @Since
3.0.0

#### Arguments
1. `obj=undefined` *(Object)*: object to get properties & symbols from

#### Returns
*(&#42;)*: properties
<br>
<br>
only used in gc *(as of 5.0.0-beta.4)*

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
