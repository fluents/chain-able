# arguments.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `isArguments`
* <a href="#isArguments"  data-meta="isArguments x undefined"  data-call="isArguments x undefined"  data-category="Methods"  data-description="Function check if toString on object is Arguments"  data-name="isArguments"  data-see="href https github com fluents chain able blob master src deps is toS js label is toS href https developer mozilla org en US docs Web JavaScript Reference Functions arguments label mozilla func arguments href https github com substack node deep equal blob master lib is arguments js label node deep equals is arguments href https github com lodash lodash blob master isArguments js label lodash is arguments href http underscorejs org docs underscore html section 141 label underscore is arguments"  data-all="meta isArguments x undefined call isArguments x undefined category Methods description Function check if toString on object is Arguments name isArguments member see href https github com fluents chain able blob master src deps is toS js label is toS href https developer mozilla org en US docs Web JavaScript Reference Functions arguments label mozilla func arguments href https github com substack node deep equal blob master lib is arguments js label node deep equals is arguments href https github com lodash lodash blob master isArguments js label lodash is arguments href http underscorejs org docs underscore html section 141 label underscore is arguments notes todos klassProps" >`isArguments`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `isArguments`

<!-- div -->

<h3 id="isArguments" data-member="" data-category="Methods" data-name="isArguments"><code>isArguments(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/arguments.js#L18 "View in source") [&#x24C9;][1]

(Function): check if toString on object is Arguments


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/toS.js" >is/toS</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments" >mozilla-func-arguments</a>
* <a href="https://github.com/substack/node-deep-equal/blob/master/lib/is_arguments.js" >node-deep-equals-is-arguments</a>
* <a href="https://github.com/lodash/lodash/blob/master/isArguments.js" >lodash-is-arguments</a>
* <a href="http://underscorejs.org/docs/underscore.html#section-141" >underscore-is-arguments</a>

#### @Since
4.0.0

#### Arguments
1. `x=undefined` *(&#42;|Object)*: value to check if isArguments

#### Returns
*(boolean)*: isArguments

#### Example
```js
isArguments({})(
  //=> false
  function() {
    isArguments(arguments)
    //=> true
  }
)()

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #isarguments "Jump back to the TOC."
