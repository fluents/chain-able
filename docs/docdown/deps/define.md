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

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports(obj=undefined, name=undefined, descriptor=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/define.js#L19 "View in source") [&#x24C9;][1]

(Function): default to configurable and enumerable, unless configured otherwise

#### Since
4.0.0

#### Arguments
1. `obj=undefined` *(Object)*: object to define on
2. `name=undefined` *(Primitive)*: property name to define
3. `descriptor=undefined` *(Object)*: object descriptor

#### Returns
*(void)*:

#### Example
```js
var desc = Object.getOwnPropertyDescriptor(obj, 'eh', {
  get: () => console.log('eh'),
})

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
