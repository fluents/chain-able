# eqValue.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse`
* <a href="#Traverse-prototype-exports"  data-meta="exports x undefined y undefined loose false"  data-call="exports x undefined y undefined loose false"  data-category="Methods"  data-description="Function checks value equality used by eq which compares all types"  data-name="exports"  data-member="Traverse"  data-todos="USE ENUM FLAGS ON LOOSE TO ALLOW MORE CONFIG FOR COMPARATOR VALUEOF walk proto check ownProps"  data-all="meta exports x undefined y undefined loose false call exports x undefined y undefined loose false category Methods description Function checks value equality used by eq which compares all types name exports member Traverse see notes todos USE ENUM FLAGS ON LOOSE TO ALLOW MORE CONFIG FOR COMPARATOR VALUEOF walk proto check ownProps n klassProps" >`Traverse.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse`

<!-- div -->

<h3 id="Traverse-prototype-exports" data-member="Traverse" data-category="Methods" data-name="exports"><code>Traverse.exports(x=undefined, y=undefined, [loose=false])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eqValue.js#L48 "View in source") [&#x24C9;][1]

(Function): checks value equality, used by eq which compares all types


#### @todos 

- [ ] !!!!!! USE ENUM FLAGS ON LOOSE TO ALLOW MORE CONFIG FOR ==, COMPARATOR, VALUEOF, walk proto (check ownProps...)...
 

#### @Since
4.1.0

#### Arguments
1. `x=undefined` *(&#42;)*: compare to y
2. `y=undefined` *(&#42;)*: compare to x
3. `[loose=false]` *(boolean|number)*: use == checks when typof !=

#### Returns
*(boolean)*:

#### Example
```js
eqValue(1, 1) //=> true
eqValue('1', 1) //=> false
eqValue('1', 1, true) //=> true
eqValue({}, {}) //=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse "Jump back to the TOC."
