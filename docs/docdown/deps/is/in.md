# in.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isIn"  data-meta="isIn obj undefined prop undefined"  data-call="isIn obj undefined prop undefined"  data-category="Methods"  data-description="Function prop is in Object obj"  data-name="isIn"  data-member="is"  data-all="meta isIn obj undefined prop undefined call isIn obj undefined prop undefined category Methods description Function prop is in Object obj name isIn member is see notes todos klassProps" >`is.isIn`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isIn" data-member="is" data-category="Methods" data-name="isIn"><code>is.isIn(obj=undefined, prop=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/in.js#L20 "View in source") [&#x24C9;][1]

(Function): prop is in Object(obj)


#### @Since
5.0.0

#### Arguments
1. `obj=undefined` *(Object)*: object to check property of
2. `prop=undefined` *(Primitive)*: property in obj

#### Returns
*(boolean)*: property

#### Example
```js
isIn({ eh: true }, 'eh') //=> true
isIn({ eh: true }, 'oh') //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
