# matcher.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `matcher`
* <a href="#matcher-prototype-make"  data-meta="make pattern undefined shouldNegate undefined alphaOmega undefined"  data-call="make pattern undefined shouldNegate undefined alphaOmega undefined"  data-category="Methods"  data-description="Function turn any string function or RegExp into a matcher"  data-name="make"  data-member="matcher"  data-all="meta make pattern undefined shouldNegate undefined alphaOmega undefined call make pattern undefined shouldNegate undefined alphaOmega undefined category Methods description Function turn any string function or RegExp into a matcher name make member matcher see notes todos klassProps" >`matcher.make`</a>
* <a href="#matcher-prototype-match"  data-meta="matcher inputs undefined patterns undefined shouldNegate undefined alphaOmega undefined"  data-call="matcher inputs undefined patterns undefined shouldNegate undefined alphaOmega undefined"  data-category="Methods"  data-description="Function same as make but also accepts inputs and returns an array"  data-name="match"  data-member="matcher"  data-all="meta matcher inputs undefined patterns undefined shouldNegate undefined alphaOmega undefined call matcher inputs undefined patterns undefined shouldNegate undefined alphaOmega undefined category Methods description Function same as make but also accepts inputs and returns an array name match member matcher see notes todos klassProps" >`matcher.match`</a>
* <a href="#matcher-prototype-matcher"  data-meta="matcher"  data-call="matcher"  data-category="Properties"  data-description="unknown"  data-name="matcher"  data-member="matcher"  data-all="meta n matcher call matcher category Properties description unknown name matcher member matcher see notes todos klassProps" >`matcher.matcher`</a>

<!-- /div -->

<!-- div -->

## `test`
* <a href="#test"  data-meta="test"  data-call="test"  data-category="Properties"  data-description="unknown"  data-name="test"  data-todos="replace to test"  data-all="meta test call test category Properties description unknown name test member see notes todos replace to test n klassProps" >`test`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `matcher`

<!-- div -->

<h3 id="matcher-prototype-make" data-member="matcher" data-category="Methods" data-name="make"><code>matcher.make(pattern=undefined, shouldNegate=undefined, alphaOmega=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L65 "View in source") [&#x24C9;][1]

(Function): turn any string[], function[], or RegExp[] into a matcher


#### @Since
3.0.0

#### Arguments
1. `pattern=undefined` *(Function|RegExp|string|string&#91;&#93;)*: a matchable pattern
2. `shouldNegate=undefined` *(|boolean)*: turn into a negated regex
3. `alphaOmega=undefined` *(|boolean)*: should have regex start at the beginning and the end

#### Returns
*(&#42;)*: matchable

#### Example
```js
matcher.make('*')
//=> RegExp('.*', 'i')

```
#### Example
```js
var any = new RgExp('.*', 'i')
matcher.make(any)
//=> any

```
#### Example
```js
var strings = x => typeof x === 'string'
matcher.make(strings)
// {test: strings}

```
#### Example
```js
var tester = { test: x => x === true }
matcher.make(tester)
// tester

```
#### Example
```js
var noName = '!name'
matcher.make(noName, true)
// new RegExp('(?:name)', 'i')

```
#### Example
```js
var noName = '!name'
matcher.make(noName, true, true)
// new RegExp('^(?:name)$', 'i')

```
---

<!-- /div -->

<!-- div -->

<h3 id="matcher-prototype-match" data-member="matcher" data-category="Methods" data-name="match"><code>matcher.matcher(inputs=undefined, patterns=undefined, shouldNegate=undefined, alphaOmega=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L141 "View in source") [&#x24C9;][1]

(Function): same as .make but also accepts inputs, and returns an array


#### @Since
3.0.0

#### Arguments
1. `inputs=undefined` *(string|string&#91;&#93;)*: input to use patterns as predicates on
2. `patterns=undefined` *(Function|RegExp|string|string&#91;&#93;)*: predicates to match with, transformed to Matcher
3. `shouldNegate=undefined` *(|boolean)*: should negate, passed to matcher.make
4. `alphaOmega=undefined` *(|boolean)*: should enforce regex @beginning and end, passed to .matcher

#### Returns
*(&#42;)*:

#### Example
```js
matcher(['foo', 'bar', 'moo'], ['*oo', '!foo'])
//=> ['moo']

matcher(['foo', 'bar', 'moo'], ['!*oo'])

```
#### Example
```js
matcher('kinga', 'kinga')
//=> ['kinga']
matcher('k*nga', 'kinga')
//=> ['kinga']
matcher('kinga', 'nope')
//=> []

matcher(new RegExp(/kinga/), 'kinga')
//=> ['kinga']
matcher(new RegExp(/kinga/), 'nope')
//=> ['nope']

matcher(x => x === 'kinga', 'kinga')
//=> ['kinga']
matcher(x => x === 'kinga', 'nope')
//=> []

matcher({ test: x => x === 'kinga' }, 'kinga')
//=> ['kinga']
matcher({ test: x => x === 'kinga' }, 'nope')
//=> []

```
---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/matcher.d.ts">🌊  Types: matcher.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/deps/matcher.js">🔬  Tests: matcher</a>&nbsp;

<h3 id="matcher-prototype-matcher" data-member="matcher" data-category="Properties" data-name="matcher"><code>matcher.matcher</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L9 "View in source") [&#x24C9;][1]

unknown


#### @symb 

🎯 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `test`

<!-- div -->

<h3 id="test" data-member="" data-category="Properties" data-name="test"><code>test</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L167 "View in source") [&#x24C9;][1]

unknown


#### @todos 

- [ ] replace to-test
 
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #matcher "Jump back to the TOC."
