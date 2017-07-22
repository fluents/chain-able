# dopemerge.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `dopemerge`
* <a href="#dopemerge-prototype-cloneIfNeeded"  data-meta="cloneIfNeeded value undefined optsArg undefined"  data-call="cloneIfNeeded value undefined optsArg undefined"  data-category="Methods"  data-description="Function Defaults to false If clone is true then both x and y are recursively cloned as part of the merge"  data-name="cloneIfNeeded"  data-member="dopemerge"  data-see="href https github com fluents chain able blob master src deps dopemerge emptyTarget js label emptyTarget href https github com fluents chain able search utf8 E2 9C 93 q isMergeableObj type label isMergeableObj"  data-all="meta cloneIfNeeded value undefined optsArg undefined call cloneIfNeeded value undefined optsArg undefined category Methods description Function Defaults to false nIf clone is true then both x and y are recursively cloned as part of the merge name cloneIfNeeded member dopemerge see href https github com fluents chain able blob master src deps dopemerge emptyTarget js label emptyTarget href https github com fluents chain able search utf8 E2 9C 93 q isMergeableObj type label isMergeableObj notes todos klassProps" >`dopemerge.cloneIfNeeded`</a>
* <a href="#dopemerge-prototype-defaultArrayMerge"  data-meta="defaultArrayMerge target undefined source undefined optsArg undefined"  data-call="defaultArrayMerge target undefined source undefined optsArg undefined"  data-category="Methods"  data-description="Function The merge will also merge arrays and array values by default However there are nigh infinite valid ways to merge arrays and you may want to supply your own You can do this by passing an arrayMerge function as an option"  data-name="defaultArrayMerge"  data-member="dopemerge"  data-all="meta defaultArrayMerge target undefined source undefined optsArg undefined call defaultArrayMerge target undefined source undefined optsArg undefined category Methods description Function The merge will also merge arrays and array values by default nHowever there are nigh infinite valid ways to merge arrays nand you may want to supply your own nYou can do this by passing an arrayMerge function as an option name defaultArrayMerge member dopemerge see notes todos klassProps" >`dopemerge.defaultArrayMerge`</a>
* <a href="#dopemerge-prototype-dopemerge"  data-meta="dopemerge obj1 undefined obj2 undefined opts undefined"  data-call="dopemerge obj1 undefined obj2 undefined opts undefined"  data-category="merge"  data-description="Function Merge the enumerable attributes of two objects deeply Merge two objects x and y deeply returning a new merged object with the elements from both x and y If an element at the same key is present for both x and y the value from y will appear in the result Merging creates a new object so that neither x or y are be modified However child objects on x or y are copied over if you want to copy all values you must pass true to the clone option"  data-name="dopemerge"  data-member="dopemerge"  data-see="href https github com KyleAMathews deepmerge label deepmerge"  data-all="meta dopemerge obj1 undefined obj2 undefined opts undefined call dopemerge obj1 undefined obj2 undefined opts undefined category merge description Function Merge the enumerable attributes of two objects deeply Merge two objects x and y deeply returning a new merged object with the elements from both x and y If an element at the same key is present for both x and y the value from n y will appear in the result Merging creates a new object so that neither x or y are be modified However child objects on x or y are copied over if you want to copy all values you must pass true to the clone option name dopemerge member dopemerge see href https github com KyleAMathews deepmerge label deepmerge notes todos klassProps" >`dopemerge.dopemerge`</a>
* <a href="#dopemerge-prototype-isMergeableObj"  data-meta="isMergeableObj x undefined"  data-call="isMergeableObj x undefined"  data-category="merge"  data-description="Function 1 not null object 2 object toString is not a date or regex"  data-name="isMergeableObj"  data-member="dopemerge"  data-all="meta isMergeableObj x undefined call isMergeableObj x undefined category merge description Function 1 not null object 2 object toString is not a date or regex name isMergeableObj member dopemerge see notes todos klassProps" >`dopemerge.isMergeableObj`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `dopemerge`

<!-- div -->

<h3 id="dopemerge-prototype-cloneIfNeeded" data-member="dopemerge" data-category="Methods" data-name="cloneIfNeeded"><code>dopemerge.cloneIfNeeded(value=undefined, optsArg=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L71 "View in source") [&#x24C9;][1]

(Function): Defaults to `false`.
If `clone` is `true` then both `x` and `y` are recursively cloned as part of the merge.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/emptyTarget.js" >emptyTarget</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=isMergeableObj&type=" >isMergeableObj</a>

#### @Since
2.0.0

#### Arguments
1. `value=undefined` *(&#42;)*: value to clone if needed
2. `optsArg=undefined` *(DopeMergeOptions)*: dopemerge options, could contain .clone

#### Returns
*(&#42;)*: cloned or original value

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

<h3 id="dopemerge-prototype-defaultArrayMerge" data-member="dopemerge" data-category="Methods" data-name="defaultArrayMerge"><code>dopemerge.defaultArrayMerge(target=undefined, source=undefined, optsArg=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L110 "View in source") [&#x24C9;][1]

(Function): The merge will also merge arrays and array values by default.
However, there are nigh-infinite valid ways to merge arrays,
and you may want to supply your own.
You can do this by passing an `arrayMerge` function as an option.


#### @Since
2.0.0

#### Arguments
1. `target=undefined` *(&#42;)*: array merged onto, could be emptyTarget if cloning
2. `source=undefined` *(&#42;)*: original source array
3. `optsArg=undefined` *(&#42;)*: dopemerge options

#### Returns
*(&#42;)*: merged array

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

<h3 id="dopemerge-prototype-dopemerge" data-member="dopemerge" data-category="merge" data-name="dopemerge"><code>dopemerge.dopemerge(obj1=undefined, obj2=undefined, opts=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L58 "View in source") [&#x24C9;][1]

(Function): Merge the enumerable attributes of two objects deeply. Merge two objects `x` and `y` deeply, returning a new merged object with the elements from both `x` and `y`. If an element at the same key is present for both `x` and `y`, the value from
`y` will appear in the result. Merging creates a new object, so that neither `x` or `y` are be modified. However, child objects on `x` or `y` are copied over - if you want to copy all values, you must pass `true` to the clone option.


#### @see 

* <a href="https://github.com/KyleAMathews/deepmerge" >deepmerge</a>
#### Arguments
1. `obj1=undefined` *(&#42;)*: left
2. `obj2=undefined` *(&#42;)*: right
3. `opts=undefined` *(&#42;)*: dopemerge options

#### Returns
*(&#42;)*: merged

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

<h3 id="dopemerge-prototype-isMergeableObj" data-member="dopemerge" data-category="merge" data-name="isMergeableObj"><code>dopemerge.isMergeableObj(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L42 "View in source") [&#x24C9;][1]

(Function): 1: not null object `2`: object toString is not a date or regex


#### @Since
2.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*:

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
