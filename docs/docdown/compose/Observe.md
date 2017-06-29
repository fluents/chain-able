# Observe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `observe`
* <a href="#observe">`observe`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `observe`

<!-- div -->

<h3 id="observe"><a href="#observe">#</a>&nbsp;<code>observe(properties, fn)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L39 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- refactored with dot-prop

#### Arguments
1. `properties` *(Matchable)*:
2. `fn` *(Function)*:

#### Returns
*(Chain)*: @chainable

#### Example
```js
chain
    .extend(['eh'])
    .observe('eh', data => data.eh === true)
    .eh(true)
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #observe "Jump back to the TOC."
