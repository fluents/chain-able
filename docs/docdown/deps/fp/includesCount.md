# includesCount.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `getIncludesCount`
* <a href="#getIncludesCount"  data-meta="getIncludesCount haystack undefined needle undefined"  data-call="getIncludesCount haystack undefined needle undefined"  data-category="Methods"  data-description="Function getIncludesCount how many times a needle occurrs in a haystack"  data-name="getIncludesCount"  data-see="href https developer mozilla org en docs Web JavaScript Reference Global Objects String indexOf Using indexOf to count occurrences of a letter in a string label mozilla occurrences href https developer mozilla org en docs Web JavaScript Reference Global Objects Array indexOf Finding all the occurrences of an element label mozilla array occurrences"  data-all="meta getIncludesCount haystack undefined needle undefined call getIncludesCount haystack undefined needle undefined category Methods description Function getIncludesCount how many times a needle occurrs in a haystack name getIncludesCount member see href https developer mozilla org en docs Web JavaScript Reference Global Objects String indexOf Using indexOf to count occurrences of a letter in a string label mozilla occurrences href https developer mozilla org en docs Web JavaScript Reference Global Objects Array indexOf Finding all the occurrences of an element label mozilla array occurrences notes todos klassProps" >`getIncludesCount`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `getIncludesCount`

<!-- div -->

<h3 id="getIncludesCount" data-member="" data-category="Methods" data-name="getIncludesCount"><code>getIncludesCount(haystack=undefined, needle=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/includesCount.js#L19 "View in source") [&#x24C9;][1]

(Function): getIncludesCount, how many times a needle occurrs in a haystack


#### @see 

* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#Using_indexOf()_to_count_occurrences_of_a_letter_in_a_string" >mozilla-occurrences</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Finding_all_the_occurrences_of_an_element" >mozilla-array-occurrences</a>

#### @Since
5.0.0-beta.4

#### Arguments
1. `haystack=undefined` *(Array|string)*: haystack to look in
2. `needle=undefined` *(Matchable|string)*: needle to find

#### Returns
*(number)*: occurrs/includes times/count

#### Example
```js
getIncludesCount('1 00 1', '1') //=> 2
getIncludesCount([1, 1, 0, 0], 1) //=> 2
getIncludesCount([0], 1) //=> 0
getIncludesCount('', 1) //=> 0
getIncludesCount(null, 1) //=> 0

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #getincludescount "Jump back to the TOC."
