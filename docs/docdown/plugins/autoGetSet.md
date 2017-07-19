# autoGetSet.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `MethodChain`
* <a href="#MethodChain-prototype-autoGetSet"  data-meta="autoGetSet name undefined parent undefined"  data-call="autoGetSet name undefined parent undefined"  data-category="Methods"  data-description="Function"  data-name="autoGetSet"  data-member="MethodChain"  data-see="href https github com fluents chain able blob master src MethodChain js label fluents chain able blob master src method chain js"  data-all="meta autoGetSet name undefined parent undefined call autoGetSet name undefined parent undefined category Methods description Function name autoGetSet member MethodChain see href https github com fluents chain able blob master src MethodChain js label fluents chain able blob master src method chain js notes todos klassProps" >`MethodChain.autoGetSet`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `MethodChain`

<!-- div -->

<h3 id="MethodChain-prototype-autoGetSet" data-member="MethodChain" data-category="Methods" data-name="autoGetSet"><code>MethodChain.autoGetSet(name=undefined, parent=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/autoGetSet.js#L24 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js" >fluents/chain able/blob/master/src/method chain.js</a>
#### Arguments
1. `name=undefined` *(Primitive)*: method name being built
2. `parent=undefined` *(Object)*: parent containing the method

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

 [1]: #methodchain "Jump back to the TOC."
