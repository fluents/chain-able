# decorate.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MethodChain`
* <a href="#MethodChain-prototype-exports"  data-meta="exports parentToDecorate undefined"  data-call="exports parentToDecorate undefined"  data-category="Methods"  data-description="Function decorates a parent when the argument is provided BUT THE FUNCTIONS WILL STILL BE SCOPED TO CURRENT PARENT for easy factory chaining"  data-name="exports"  data-member="MethodChain"  data-see="href https github com fluents chain able blob master src MethodChain js label MethodChain"  data-todos="this is more like a preset since it adds plugins more of methodFactory now"  data-all="meta exports parentToDecorate undefined call exports parentToDecorate undefined category Methods description Function decorates a parent when the argument is provided nBUT THE FUNCTIONS WILL STILL BE SCOPED TO CURRENT PARENT nfor easy factory chaining name exports member MethodChain see href https github com fluents chain able blob master src MethodChain js label MethodChain notes todos this is more like a preset since it adds plugins n more of methodFactory now n klassProps" >`MethodChain.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `MethodChain`

<!-- div -->

<h3 id="MethodChain-prototype-exports" data-member="MethodChain" data-category="Methods" data-name="exports"><code>MethodChain.exports(parentToDecorate=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/decorate.js#L28 "View in source") [&#x24C9;][1]

(Function): decorates a parent when the argument is provided
BUT THE FUNCTIONS WILL STILL BE SCOPED TO CURRENT PARENT
for easy factory chaining


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js" >MethodChain</a>

#### @todos 

- [ ] this is more like a preset since it *adds* plugins?
      more of methodFactory now
 

#### @Since
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

 [1]: #methodchain "Jump back to the TOC."
