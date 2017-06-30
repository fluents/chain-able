# autoGetSet.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MethodChain.prototype`
* <a href="#MethodChain-prototype-autoGetSet">`MethodChain.prototype.autoGetSet`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `MethodChain.prototype`

<!-- div -->

<h3 id="MethodChain-prototype-autoGetSet"><a href="#MethodChain-prototype-autoGetSet">#</a>&nbsp;<code>MethodChain.prototype.autoGetSet(name, parent)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/autoGetSet.js#L23 "View in source") [&#x24C9;][1]



#### Arguments
1. `name` *(Primitive)*: method name being built
2. `parent` *(Object)*: parent containing the method

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
const chain = new Chain()
   chain.methods('eh').plugin(autoGetSet).build()

   chain.eh(1)
   //=> Chain
   chain.eh()
   //=> 1
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #methodchain.prototype "Jump back to the TOC."
