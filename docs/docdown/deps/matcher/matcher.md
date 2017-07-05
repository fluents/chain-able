# matcher.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `matcher`
* <a href="#matcher-make">`matcher.make`</a>
* <a href="#matcher-matcher">`matcher.matcher`</a>
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

<h3 id="matcher-make"><a href="#matcher-make">#</a>&nbsp;<code>matcher.make(pattern=undefined, shouldNegate=undefined, alphaOmega=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L64 "View in source") [&#x24C9;][1]

turn any string[], function[], or RegExp[] into a matcher


### @symb 

🎯 
#### Since
3.0.0

#### Arguments
1. `pattern=undefined` *(Function|RegExp|string|string&#91;&#93;)*: a matchable pattern
2. `shouldNegate=undefined` *(|boolean)*: turn into a negated regex
3. `alphaOmega=undefined` *(|boolean)*: should have regex start at the beginning and the end

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

<a href="https://github.com/fluents/chain-able/blob/master/typings/matcher.d.ts">🌊  Types: matcher.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/deps/matcher.js">🔬  Tests: matcher</a>&nbsp;

<h3 id="matcher-matcher"><a href="#matcher-matcher">#</a>&nbsp;<code>matcher.matcher</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L9 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://github.com/sindresorhus/escape-string-regexp">sindresorhus/escape string regexp</a>

### @symb 

🎯 
---

<!-- /div -->

<!-- div -->

<h3 id="matcher-matcher"><a href="#matcher-matcher">#</a>&nbsp;<code>matcher.matcher(inputs=undefined, patterns=undefined, shouldNegate=undefined, alphaOmega=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L140 "View in source") [&#x24C9;][1]

same as .make but also accepts inputs, and returns an array


### @see 

* <a href="https://github.com/sindresorhus/escape-string-regexp">sindresorhus/escape string regexp</a>

### @symb 

🎯 
#### Since
3.0.0

#### Arguments
1. `inputs=undefined` *(string|string&#91;&#93;)*: input to use patterns as predicates on
2. `patterns=undefined` *(Function|RegExp|string|string&#91;&#93;)*: predicates to match with, transformed to Matcher
3. `shouldNegate=undefined` *(|boolean)*: should negate, passed to matcher.make
4. `alphaOmega=undefined` *(|boolean)*: should enforce regex @beginning and end, passed to .matcher

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

<!-- /div -->

<!-- div -->

## `test`

<!-- div -->

<h3 id="test"><a href="#test">#</a>&nbsp;<code>test</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/matcher.js#L169 "View in source") [&#x24C9;][1]




### @symb 

🎯 
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #matcher "Jump back to the TOC."
