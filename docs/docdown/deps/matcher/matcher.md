# matcher.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `matcher`
* <a href="#matcher-ObjectAssign">`matcher.ObjectAssign`</a>
* <a href="#matcher-make">`matcher.make`</a>
* <a href="#matcher-matcher">`matcher.matcher`</a>

<!-- /div -->

<!-- div -->

## `test`
* <a href="#test">`test`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `matcher`

<!-- div -->

<h3 id="matcher-ObjectAssign"><a href="#matcher-ObjectAssign">#</a>&nbsp;<code>matcher.ObjectAssign</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L6 "View in source") [&#x24C9;][1]



---

<!-- /div -->

<!-- div -->

<h3 id="matcher-make"><a href="#matcher-make">#</a>&nbsp;<code>matcher.make(pattern, shouldNegate, alphaOmega)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L61 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `pattern` *(Function|RegExp|string|string&#91;&#93;)*: a matchable pattern
2. `shouldNegate` *(|boolean)*: turn into a negated regex
3. `alphaOmega` *(|boolean)*: should have regex start at the beginning and the end

#### Returns
*(&#42;)*: matchable

#### Example
```js
matcher.make('*')
   //=> RegExp('.*', 'i')
```
---

<!-- /div -->

<!-- div -->

<h3 id="matcher-matcher"><a href="#matcher-matcher">#</a>&nbsp;<code>matcher.matcher(inputs, patterns, shouldNegate, alphaOmega)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L133 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `inputs` *(string|string&#91;&#93;)*: input to use patterns as predicates on
2. `patterns` *(Function|RegExp|string|string&#91;&#93;)*: predicates to match with, transformed to Matcher
3. `shouldNegate` *(|boolean)*: should negate, passed to matcher.make
4. `alphaOmega` *(|boolean)*: should enforce regex @beginning and end, passed to .matcher

#### Returns
*(&#42;)*:

#### Example
```js
matcher(['foo', 'bar', 'moo'], ['*oo', '!foo']);
  //=> ['moo']

  matcher(['foo', 'bar', 'moo'], ['!*oo']);
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `test`

<!-- div -->

<h3 id="test"><a href="#test">#</a>&nbsp;<code>test</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L157 "View in source") [&#x24C9;][1]



---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #matcher "Jump back to the TOC."
