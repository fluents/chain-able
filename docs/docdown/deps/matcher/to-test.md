# to-test.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `toTest`
* <a href="#toTest"  data-meta="toTest matchable undefined arg1 undefined arg2 undefined"  data-call="toTest matchable undefined arg1 undefined arg2 undefined"  data-category="Methods"  data-description="Function like matcher but isMatch"  data-name="toTest"  data-notes="as else if for easier ternary uglification"  data-all="meta toTest matchable undefined arg1 undefined arg2 undefined call toTest matchable undefined arg1 undefined arg2 undefined category Methods description Function like matcher but isMatch name toTest member see notes as else if for easier ternary uglification n todos klassProps" >`toTest`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `toTest`

<!-- div -->

<h3 id="toTest" data-member="" data-category="Methods" data-name="toTest"><code>toTest(matchable=undefined, [arg1=undefined], [arg2=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/to-test.js#L47 "View in source") [&#x24C9;][1]

(Function): like matcher, but .isMatch


#### @notes 

* as else-if for easier ternary uglification
 

#### @Since
3.0.0

#### Arguments
1. `matchable=undefined` *(Matchable)*: any matchable
2. `[arg1=undefined]` *(any)*: arg to match with
3. `[arg2=undefined]` *(any)*: optional second arg to pass into tester

#### Returns
*(boolean)*: is a match, passes the test

#### Example
```js
matcher('kinga', 'kinga')
//=> true
matcher('k*nga', 'kinga')
//=> true
matcher('kinga', 'nope')
//=> false

matcher(new RegExp(/kinga/), 'kinga')
//=> true
matcher(new RegExp(/kinga/), 'nope')
//=> false

matcher(x => x === 'kinga', 'kinga')
//=> true
matcher(x => x === 'kinga', 'nope')
//=> false

matcher({ test: x => x === 'kinga' }, 'kinga')
//=> true
matcher({ test: x => x === 'kinga' }, 'nope')
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #totest "Jump back to the TOC."
