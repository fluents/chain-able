# define.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports">`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports(obj, name, descriptor)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/define.js#L19 "View in source") [&#x24C9;][1]



#### Since
4.0.0

#### Arguments
1. `obj` *(Object)*: object to define on
2. `name` *(Primitive)*: property name to define
3. `descriptor` *(Object)*: object descriptor

#### Returns
*(void)*:

#### Example
```js
var desc = Object.getOwnPropertyDescriptor(obj, 'eh', {get: () => console.log('eh')})
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
