# matcher.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isMatcher"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isMatcher"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is regexp js label is regexp href https github com fluents chain able blob master src deps is function js label is function href https github com fluents chain able search utf8 E2 9C 93 q conditionals or type label conditionals or"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isMatcher member is see href https github com fluents chain able blob master src deps is regexp js label is regexp href https github com fluents chain able blob master src deps is function js label is function href https github com fluents chain able search utf8 E2 9C 93 q conditionals or type label conditionals or notes todos klassProps" >`is.isMatcher`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isMatcher" data-member="is" data-category="Methods" data-name="isMatcher"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/matcher.js#L31 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/regexp.js" >is/regexp</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/function.js" >is/function</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=conditionals/or&type=" >conditionals/or</a>

#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*: isFunction || isRegExp

#### Example
```js
isMatcher(/(.*)/)
//=> true

isMatcher(x => true)
//=> true

isMatcher(1)
//=> false
isMatcher('.*')
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
