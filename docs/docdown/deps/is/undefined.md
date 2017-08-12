# undefined.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isUndefined"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is undefined"  data-name="isUndefined"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is nullOrUndefined js label is nullOrUndefined href https github com infernojs inferno blob master packages inferno shared src index ts L57 label https github com infernojs inferno blob master packages inferno shared src index ts L57"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is undefined name isUndefined member is see href https github com fluents chain able blob master src deps is nullOrUndefined js label is nullOrUndefined href https github com infernojs inferno blob master packages inferno shared src index ts L57 label https github com infernojs inferno blob master packages inferno shared src index ts L57 notes todos klassProps" >`is.isUndefined`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isUndefined" data-member="is" data-category="Lang" data-name="isUndefined"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/undefined.js#L36 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is `undefined`.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/nullOrUndefined.js" >is/nullOrUndefined</a>
* <a href="https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L57" >https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L57</a>

#### @Since
4.0.0-alpha.1

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isUndefined

#### Example
```js
isUndefined(undefined)
//=> true
isUndefined(void 0)
//=> true

isUndefined(null)
//=> false
isUndefined(NaN)
//=> false
isUndefined({})
//=> false
isUndefined('')
//=> false
isUndefined(1)
//=> false
isUndefined(false)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
