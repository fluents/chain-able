# all.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional`
* <a href="#conditional-prototype-all"  data-meta="all predicate undefined array undefined a Boolean a Boolean"  data-call="all predicate undefined array undefined"  data-category="Methods"  data-description="Function map all values in an array to see if all match Returns true if all elements of the list match the predicate false if there are any that don t"  data-name="all"  data-member="conditional"  data-see="href https github com ramda ramda blob master src all js label ramda ramda blob master src all js href https github com fluents chain able blob master src deps fp curry js label fluents chain able blob master src deps fp curry js"  data-todos="not some"  data-all="meta all predicate undefined array undefined n a Boolean a Boolean call all predicate undefined array undefined category Methods description Function map all values in an array to see if all match nReturns true if all elements of the list match the predicate false if there are any that don t name all member conditional see href https github com ramda ramda blob master src all js label ramda ramda blob master src all js href https github com fluents chain able blob master src deps fp curry js label fluents chain able blob master src deps fp curry js notes todos not some n klassProps" >`conditional.all`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional`

<!-- div -->

<h3 id="conditional-prototype-all" data-member="conditional" data-category="Methods" data-name="all"><code>conditional.all(predicate=undefined, array=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/all.js#L26 "View in source") [&#x24C9;][1]

(Function): map all values in an array to see if all match
Returns `true` if all elements of the list match the predicate, `false` if there are any that don't.


#### @see 

* <a href="https://github.com/ramda/ramda/blob/master/src/all.js" >ramda/ramda/blob/master/src/all.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/fp/curry.js" >fluents/chain able/blob/master/src/deps/fp/curry.js</a>

#### @todos 

- [ ] `not(some)` ?
 

#### @sig 

(a -> Boolean) -> [a] -> Boolean 

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
