# enumerable.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isEnumerable"  data-meta="isEnumerable obj undefined prop undefined"  data-call="isEnumerable obj undefined prop undefined"  data-category="Methods"  data-description="Function object at property is enumerable"  data-name="isEnumerable"  data-member="is"  data-see="href https developer mozilla org en docs Web JavaScript Reference Global Objects Object propertyIsEnumerable label mozilla propertyisenumerable"  data-todos="use fp call"  data-all="meta isEnumerable obj undefined prop undefined call isEnumerable obj undefined prop undefined category Methods description Function object at property is enumerable name isEnumerable member is see href https developer mozilla org en docs Web JavaScript Reference Global Objects Object propertyIsEnumerable label mozilla propertyisenumerable notes todos use fp call n klassProps" >`is.isEnumerable`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isEnumerable" data-member="is" data-category="Methods" data-name="isEnumerable"><code>is.isEnumerable(obj=undefined, prop=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/enumerable.js#L32 "View in source") [&#x24C9;][1]

(Function): object at property is enumerable


#### @see 

* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" >mozilla-propertyisenumerable</a>

#### @todos 

- [ ] use fp/call
 

#### @Since
3.0.0

#### Arguments
1. `obj=undefined` *(&#42;|Object)*:
2. `prop=undefined` *(&#42;|string)*:

#### Returns
*(boolean)*: obj&#91;prop&#93; is enumerable

#### Example
```js
const obj = { eh: true }
isEnumerable(obj, 'eh')
//=> true

const objPropEnumerable = isEnumerable(obj)
objPropEnumerable('eh')
//=> true

Object.defineProperty(obj, 'length', {
  enumerable: false,
  value: () => Object.keys(obj).length,
})
isEnumerable(obj, 'length')
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
