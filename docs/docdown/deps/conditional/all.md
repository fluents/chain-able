# all.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional`
* <a href="#conditional-prototype-all"  data-meta="all predicate undefined array undefined"  data-call="all predicate undefined array undefined"  data-category="Methods"  data-description="Function map all values in an array to see if all match"  data-name="all"  data-member="conditional"  data-see="href https github com fluents chain able blob master src deps fp curry js label fluents chain able blob master src deps fp curry js"  data-all="meta all predicate undefined array undefined call all predicate undefined array undefined category Methods description Function map all values in an array to see if all match name all member conditional see href https github com fluents chain able blob master src deps fp curry js label fluents chain able blob master src deps fp curry js notes todos klassProps" >`conditional.all`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional`

<!-- div -->

<h3 id="conditional-prototype-all" data-member="conditional" data-category="Methods" data-name="all"><code>conditional.all(predicate=undefined, array=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/all.js#L25 "View in source") [&#x24C9;][1]

(Function): map all values in an array to see if all match


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/fp/curry.js" >fluents/chain able/blob/master/src/deps/fp/curry.js</a>

#### @Since
4.0.1

#### Arguments
1. `predicate=undefined` *(Function)*: match the value
2. `array=undefined` *(Array)*: to match against predicate

#### Returns
*(boolean)*: all match predicate

#### Example
```js
const allBoolean = all(x => typeof x === 'boolean'q)

   allBoolean([true])
   //=> true

   allBoolean([1])
   //=> false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #conditional "Jump back to the TOC."
