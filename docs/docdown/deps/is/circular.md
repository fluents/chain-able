# circular.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `errorKeywords`
* <a href="#errorKeywords"  data-meta="errorKeywords"  data-call="errorKeywords"  data-category="Properties"  data-description="unknown"  data-name="errorKeywords"  data-all="meta errorKeywords call errorKeywords category Properties description unknown name errorKeywords member see notes todos klassProps" >`errorKeywords`</a>

<!-- /div -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports obj undefined"  data-call="exports obj undefined"  data-category="Methods"  data-description="Function check if a value is circular"  data-name="exports"  data-member="is"  data-notes="is slow try catch json if isFunction obj throw new Error cannot determine if function is circular"  data-todos="find the circular property"  data-all="meta n exports obj undefined call exports obj undefined category Methods description Function check if a value is circular name exports member is see notes is slow try catch json n if isFunction obj throw new Error cannot determine if function is circular n todos find the circular property n klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `errorKeywords`

<!-- div -->

<h3 id="errorKeywords" data-member="" data-category="Properties" data-name="errorKeywords"><code>errorKeywords</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/circular.js#L7 "View in source") [&#x24C9;][1]

unknown

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Methods" data-name="exports"><code>is.exports(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/circular.js#L50 "View in source") [&#x24C9;][1]

(Function): check if a value is circular


#### @notes 

* is slow try catch json
* if (isFunction(obj)) { throw new Error('cannot determine if function is circular')}
 

#### @todos 

- [ ] find the circular property...
 

#### @symb 

🔘 

#### @Since
5.0.0-beta.4

#### Arguments
1. `obj=undefined` *(&#42;|Object)*: object to check if is circular

#### Returns
*(boolean)*: isCircular / hasCircular

#### Example
```js
const a = {}
a.b = a
isCircular(a) //=> true

const a = {}
a.b = {
  c: a,
}
isCircular(a) //=> true

const a = {}
a.b = {
  c: 4,
}
isCircular(a) //=> false

const a = []
a.push(a)
isCircular(a) //=> true

isCircular({}) //=> false
isCircular('hi') //=> false
isCircular(undefined) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #errorkeywords "Jump back to the TOC."
