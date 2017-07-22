# nullOrUndefined.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isNullOrUndefined"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is null or undefined"  data-name="isNullOrUndefined"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is null js label is null href https github com fluents chain able blob master src deps is undefined js label is undefined href https github com infernojs inferno blob master packages inferno shared src index ts L23 label https github com infernojs inferno blob master packages inferno shared src index ts L23"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is null or undefined name isNullOrUndefined member is see href https github com fluents chain able blob master src deps is null js label is null href https github com fluents chain able blob master src deps is undefined js label is undefined href https github com infernojs inferno blob master packages inferno shared src index ts L23 label https github com infernojs inferno blob master packages inferno shared src index ts L23 notes todos klassProps" >`is.isNullOrUndefined`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isNullOrUndefined" data-member="is" data-category="Lang" data-name="isNullOrUndefined"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/nullOrUndefined.js#L41 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is `null` or `undefined`.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js" >is/null</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/undefined.js" >is/undefined</a>
* <a href="https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23" >https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23</a>

#### @Since
4.0.0-alpha.1

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isNullOrUndefined

#### Example
```js
isNullOrUndefined(null)
//=> true
isNullOrUndefined(undefined)
//=> true
isNullOrUndefined(void 0)
//=> true

isNullOrUndefined(NaN)
//=> false
isNullOrUndefined({})
//=> false
isNullOrUndefined('')
//=> false
isNullOrUndefined(1)
//=> false
isNullOrUndefined(false)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
