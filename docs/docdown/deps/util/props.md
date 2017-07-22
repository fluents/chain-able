# props.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `allProperties`
* <a href="#allProperties"  data-meta="allProperties obj undefined"  data-call="allProperties obj undefined"  data-category="Methods"  data-description="Function properties property symbols object keys all again for prototype"  data-name="allProperties"  data-see="href https github com fluents chain able blob master src deps gc js label deps gc href https github com fluents chain able search utf8 E2 9C 93 q deps utils nonEnumerableTypes type label deps utils nonEnumerableTypes href http 2ality com 2011 07 js properties html label http 2ality com 2011 07 js properties html"  data-todos="https developer mozilla org en US docs Web JavaScript Reference Global Objects Object getOwnPropertyDescriptors const getOwnPropertyDescriptors Object getOwnPropertyDescriptors"  data-all="meta allProperties obj undefined call allProperties obj undefined category Methods description Function properties property symbols object keys all again for prototype name allProperties member see href https github com fluents chain able blob master src deps gc js label deps gc href https github com fluents chain able search utf8 E2 9C 93 q deps utils nonEnumerableTypes type label deps utils nonEnumerableTypes href http 2ality com 2011 07 js properties html label http 2ality com 2011 07 js properties html notes todos https developer mozilla org en US docs Web JavaScript Reference Global Objects Object getOwnPropertyDescriptors n const getOwnPropertyDescriptors Object getOwnPropertyDescriptors n klassProps" >`allProperties`</a>

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

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/gc.js" >deps/gc</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=deps/utils/nonEnumerableTypes&type=" >deps/utils/nonEnumerableTypes</a>
* <a href="http://2ality.com/2011/07/js-properties.html" >http://2ality.com/2011/07/js-properties.html</a>

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
