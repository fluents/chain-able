# JSON.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `getIncludesCount`
* <a href="#getIncludesCount"  data-meta="getIncludesCount haystack undefined needle undefined"  data-call="getIncludesCount haystack undefined needle undefined"  data-category="Methods"  data-description="Function"  data-name="getIncludesCount"  data-all="meta getIncludesCount haystack undefined needle undefined call getIncludesCount haystack undefined needle undefined category Methods description Function name getIncludesCount member see notes todos klassProps" >`getIncludesCount`</a>

<!-- /div -->

<!-- div -->

## `isEven`
* <a href="#isEven"  data-meta="isEven x undefined"  data-call="isEven x undefined"  data-category="Methods"  data-description="Function isEven"  data-name="isEven"  data-all="meta isEven x undefined call isEven x undefined category Methods description Function isEven name isEven member see notes todos klassProps" >`isEven`</a>

<!-- /div -->

<!-- div -->

## `isJSON`
* <a href="#isJSON"  data-meta="isJSON x undefined"  data-call="isJSON x undefined"  data-category="Methods"  data-description="Function isJSON without tryCatch"  data-name="isJSON"  data-all="meta isJSON x undefined call isJSON x undefined category Methods description Function isJSON without tryCatch name isJSON member see notes todos klassProps" >`isJSON`</a>

<!-- /div -->

<!-- div -->

## `isOdd`
* <a href="#isOdd"  data-meta="isOdd x undefined"  data-call="isOdd x undefined"  data-category="Methods"  data-description="Function isOdd"  data-name="isOdd"  data-all="meta isOdd x undefined call isOdd x undefined category Methods description Function isOdd name isOdd member see notes todos klassProps" >`isOdd`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `getIncludesCount`

<!-- div -->

<h3 id="getIncludesCount" data-member="" data-category="Methods" data-name="getIncludesCount"><code>getIncludesCount(haystack=undefined, needle=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/JSON.js#L92 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `haystack=undefined` *(Array|string)*:
2. `needle=undefined` *(Matchable|string)*:

#### Returns
*(number)*: occurrs/includes times/count

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isEven`

<!-- div -->

<h3 id="isEven" data-member="" data-category="Methods" data-name="isEven"><code>isEven(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/JSON.js#L80 "View in source") [&#x24C9;][1]

(Function): isEven


#### @extends



#### Arguments
1. `x=undefined` *(any|number)*: value to check

#### Returns
*(boolean)*: isEven

#### Example
```js
isEven(1)
//=> false
isEven(2)
//=> true

var rando = Math.floor(Math.random(0, 10000))
isEven(rando) !== isOdd(rando)
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isJSON`

<!-- div -->

<h3 id="isJSON" data-member="" data-category="Methods" data-name="isJSON"><code>isJSON(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/JSON.js#L122 "View in source") [&#x24C9;][1]

(Function): isJSON, without tryCatch

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*: x isJSON

#### Example
```js
isJSON('{}')
// => true

isJSON('')
// => false

isJSON('[]')
// => true

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isOdd`

<!-- div -->

<h3 id="isOdd" data-member="" data-category="Methods" data-name="isOdd"><code>isOdd(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/JSON.js#L51 "View in source") [&#x24C9;][1]

(Function): isOdd


#### @extends



#### Arguments
1. `x=undefined` *(any|number)*: value to check

#### Returns
*(boolean)*: isOdd

#### Example
```js
isOdd(1)
//=> true
isOdd(2)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #getincludescount "Jump back to the TOC."
