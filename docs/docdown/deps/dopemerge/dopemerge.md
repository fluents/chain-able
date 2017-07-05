# dopemerge.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `dopemerge`
* <a href="#dopemerge-cloneIfNeeded">`dopemerge.cloneIfNeeded`</a>
* <a href="#dopemerge-defaultArrayMerge">`dopemerge.defaultArrayMerge`</a>
* <a href="#dopemerge-dopemerge">`dopemerge.dopemerge`</a>
* <a href="#dopemerge-emptyTarget">`dopemerge.emptyTarget`</a>
* <a href="#dopemerge-isMergeableObj">`dopemerge.isMergeableObj`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `dopemerge`

<!-- div -->

<h3 id="dopemerge-cloneIfNeeded"><a href="#dopemerge-cloneIfNeeded">#</a>&nbsp;<code>dopemerge.cloneIfNeeded(value=undefined, optsArg=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L90 "View in source") [&#x24C9;][1]

Defaults to `false`.
If `clone` is `true` then both `x` and `y` are recursively cloned as part of the merge.


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js">fluents/chain able/blob/master/src/deps/traverse.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js">fluents/chain able/blob/master/src/traverse chain.js</a>
#### Since
2.0.0

#### Arguments
1. `value=undefined` *(&#42;)*: value to clone if needed
2. `optsArg=undefined` *(DopeMergeOptions)*: dopemerge options, could contain .clone

#### Returns
*(&#42;)*: merged
<br>
<br>
{@link https://github.com/KyleAMathews/deepmerge deepmerge}

#### Example
```js
var obj = { eh: true }

cloneIfNeeded(obj, { clone: true }) === obj
//=> false

cloneIfNeeded(obj, { clone: false }) === obj
//=> true

```
---

<!-- /div -->

<!-- div -->

<h3 id="dopemerge-defaultArrayMerge"><a href="#dopemerge-defaultArrayMerge">#</a>&nbsp;<code>dopemerge.defaultArrayMerge(target=undefined, source=undefined, optsArg=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L129 "View in source") [&#x24C9;][1]

The merge will also merge arrays and array values by default.
However, there are nigh-infinite valid ways to merge arrays,
and you may want to supply your own.
You can do this by passing an `arrayMerge` function as an option.

#### Since
2.0.0

#### Arguments
1. `target=undefined` *(&#42;)*: array merged onto, could be emptyTarget if cloning
2. `source=undefined` *(&#42;)*: original source array
3. `optsArg=undefined` *(&#42;)*: dopemerge options

#### Returns
*(&#42;)*: merged
<br>
<br>
{@link https://github.com/KyleAMathews/deepmerge deepmerge}

#### Example
```js
function concatMerge(destinationArray, sourceArray, options) {
  destinationArray
  //=> [1, 2, 3]

  sourceArray
  //=> [3, 2, 1]

  options
  //=> { arrayMerge: concatMerge }

  return destinationArray.concat(sourceArray)
}
merge([1, 2, 3], [3, 2, 1], { arrayMerge: concatMerge })
//=> [1, 2, 3, 3, 2, 1]

```
---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/_dopemergelater.d.ts">🌊  Types: _dopemergelater.d</a>&nbsp;

<h3 id="dopemerge-dopemerge"><a href="#dopemerge-dopemerge">#</a>&nbsp;<code>dopemerge.dopemerge(obj1=undefined, obj2=undefined, opts=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L255 "View in source") [&#x24C9;][1]

Merge the enumerable attributes of two objects deeply. Merge two objects `x` and `y` deeply, returning a new merged object with the elements from both `x` and `y`. If an element at the same key is present for both `x` and `y`, the value from
`y` will appear in the result. Merging creates a new object, so that neither `x` or `y` are be modified. However, child objects on `x` or `y` are copied over - if you want to copy all values, you must pass `true` to the clone option.


### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>

[deepmerge]: https://github.com/KyleAMathews/deepmerge <!-- NAMED_LINK -->

#### Arguments
1. `obj1=undefined` *(&#42;)*: left
2. `obj2=undefined` *(&#42;)*: right
3. `opts=undefined` *(&#42;)*: dopemerge options

#### Returns
*(&#42;)*: merged
<br>
<br>
{@link https://github.com/KyleAMathews/deepmerge deepmerge}

#### Example
```js
var x = {
  foo: { bar: 3 },
  array: [
    {
      does: 'work',
      too: [1, 2, 3],
    },
  ],
}

var y = {
  foo: { baz: 4 },
  quux: 5,
  array: [
    {
      does: 'work',
      too: [4, 5, 6],
    },
    {
      really: 'yes',
    },
  ],
}

var expected = {
  foo: {
    bar: 3,
    baz: 4,
  },
  array: [
    {
      does: 'work',
      too: [1, 2, 3, 4, 5, 6],
    },
    {
      really: 'yes',
    },
  ],
  quux: 5,
}

merge(x, y)
//=> expected

```
---

<!-- /div -->

<!-- div -->

<h3 id="dopemerge-emptyTarget"><a href="#dopemerge-emptyTarget">#</a>&nbsp;<code>dopemerge.emptyTarget(val=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L61 "View in source") [&#x24C9;][1]

make a new empty Array or Object for cloning

#### Since
2.0.0

#### Arguments
1. `val=undefined` *(&#42;)*: array or object to return an empty one of

#### Returns
*(&#42;)*: merged
<br>
<br>
{@link https://github.com/KyleAMathews/deepmerge deepmerge}

#### Example
```js
emptyTarget({ eh: true })
//=> {}

emptyTarget([1])
//=> []

```
---

<!-- /div -->

<!-- div -->

<h3 id="dopemerge-isMergeableObj"><a href="#dopemerge-isMergeableObj">#</a>&nbsp;<code>dopemerge.isMergeableObj(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L41 "View in source") [&#x24C9;][1]

1: not null object `2`: object toString is not a date or regex

#### Since
2.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(&#42;)*: merged
<br>
<br>
{@link https://github.com/KyleAMathews/deepmerge deepmerge}

#### Example
```js
isMergeableObj({})
//=> true

isMergeableObj(Object.create(null))
// => true

isMergeableObj(new Date())
//=> false

isMergeableObj(/eh/)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #dopemerge "Jump back to the TOC."
