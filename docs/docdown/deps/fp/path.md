# path.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports path undefined obj undefined Idx a a Undefined"  data-call="exports path undefined obj undefined"  data-category="Object"  data-description="Function Retrieve the value at a given path"  data-member="fp"  data-all="meta exports path undefined obj undefined n Idx a a Undefined call exports path undefined obj undefined category Object description Function Retrieve the value at a given path name member fp see notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<h3 id="fp-prototype-" data-member="fp" data-category="Object" data-name="path"><code>fp.exports(path=undefined, obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/path.js#L27 "View in source") [&#x24C9;][1]

(Function): Retrieve the value at a given path.


#### @sig 

[Idx] -> {a} -> a | Undefined 

#### @Since
v5.0.0

#### Arguments
1. `path=undefined` *(Array)*: The path to use.
2. `obj=undefined` *(Object)*: The object to retrieve the nested property from.

#### Returns
*(&#42;)*: The data at `path`.

#### Example
```js
R.path(['a', 'b'], { a: { b: 2 } }) //=> 2
R.path(['a', 'b'], { c: { b: 2 } }) //=> undefined

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
