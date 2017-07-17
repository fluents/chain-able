# decorate.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MethodChain.prototype`
* <a href="#MethodChain-prototype-exports">`MethodChain.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `MethodChain.prototype`

<!-- div -->

<h3 id="MethodChain-prototype-exports"><a href="#MethodChain-prototype-exports">#</a>&nbsp;<code>MethodChain.prototype.exports(parentToDecorate=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/decorate.js#L29 "View in source") [&#x24C9;][1]

(Function): decorates a parent when the argument is provided
BUT THE FUNCTIONS WILL STILL BE SCOPED TO CURRENT PARENT
for easy factory chaining


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>

### @todos 

- [ ] this is more like a preset since it *adds* plugins?
      more of methodFactory now
 
#### Since
4.0.0-alpha.1

#### Arguments
1. `parentToDecorate=undefined` *(Object)*: object to put the method on instead

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
const chain = new Chain()
const obj = {}
chain.method('ehOh').decorate(obj).build()
typeof obj.ehOh
//=> 'function'

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #methodchain.prototype "Jump back to the TOC."
