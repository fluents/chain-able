# compose.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `compose`
* <a href="#compose-compose">`compose.compose`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `compose`

<!-- div -->

<h3 id="compose-compose"><a href="#compose-compose">#</a>&nbsp;<code>compose.compose([target=ChainedMap], [extensions=[Observe,Shorthands,Transform,DotProp]])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/compose.js#L69 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `[target=ChainedMap]` *(|Class|Function)*: class or function to extend
2. `[extensions=[Observe,Shorthands,Transform,DotProp]]` *(|Array)*: Array of extensions to compose together left ro right

#### Returns
*(&#42;)*: composed

#### Example
```js
class Eh extends compose() {}
 new Eh() instanceof Chainable
 //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #compose "Jump back to the TOC."
