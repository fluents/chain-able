# includes.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `includes`
* <a href="#includes-prototype-includes"  data-meta="includes haystack undefined needle undefined"  data-call="includes haystack undefined needle undefined"  data-category="Methods"  data-description="Function"  data-name="includes"  data-member="includes"  data-see="href https developer mozilla org en docs Web JavaScript Reference Operators Bitwise Operators Bitwise NOT label Developer mozilla org en docs web java script reference operators bitwise operators href https github com fluents chain able blob master src deps conditional includes flipped js label fluents chain able blob master src deps conditional includes flipped js"  data-todos="haystack indexOf needle"  data-all="meta includes haystack undefined needle undefined call includes haystack undefined needle undefined category Methods description Function name includes member includes see href https developer mozilla org en docs Web JavaScript Reference Operators Bitwise Operators Bitwise NOT label Developer mozilla org en docs web java script reference operators bitwise operators href https github com fluents chain able blob master src deps conditional includes flipped js label fluents chain able blob master src deps conditional includes flipped js notes todos haystack indexOf needle n klassProps" >`includes.includes`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `includes`

<!-- div -->

<h3 id="includes-prototype-includes" data-member="includes" data-category="Methods" data-name="includes"><code>includes.includes(haystack=undefined, needle=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/includes/includes.js#L21 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT" >Developer.mozilla.org/en/docs/web/java script/reference/operators/bitwise operators</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/conditional/includes/flipped.js" >fluents/chain able/blob/master/src/deps/conditional/includes/flipped.js</a>

#### @todos 

- [ ] `~haystack.indexOf(needle)`
 
#### Arguments
1. `haystack=undefined` *(Array|string)*: haystack includes needle
2. `needle=undefined` *(&#42;|string)*: needle in haystack

#### Returns
*(boolean)*: needle in haystack

#### Example
```js
includes('eh', 'e') //=> true
includes('eh', 'nope') //=> false
includes(['eh'], 'eh') //=> true
includes(['eh'], 'nope') //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #includes "Jump back to the TOC."
