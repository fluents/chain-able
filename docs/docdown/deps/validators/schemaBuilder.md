# schemaBuilder.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `typeValidator`
* <a href="#typeValidator">`typeValidator`</a>

<!-- /div -->

<!-- div -->

## `validateType`
* <a href="#validateType">`validateType`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `typeValidator`

<!-- div -->

<h3 id="typeValidator"><a href="#typeValidator">#</a>&nbsp;<code>typeValidator(input)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L56 "View in source") [&#x24C9;][1]



#### Arguments
1. `input` *(any)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `validateType`

<!-- div -->

<h3 id="validateType"><a href="#validateType">#</a>&nbsp;<code>validateType</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L42 "View in source") [&#x24C9;][1]



#### Example
```js
nestedSchema = {
  dates: {
     created: {
        at: 'date'
     }
  }
}

input = {
   dates: {
     created: {
       at: new Date()
     }
   }
}

input = new Date()
input = {
   dates: {
     mismatch: true
   }
}
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #typevalidator "Jump back to the TOC."
