<<<<<<< HEAD
deepmerge
=========

> ~540B gzipped, ~1.1kB minified

Merge the enumerable attributes of two objects deeply.

example
=======

<!--js
var merge = require('./')
-->

```js
var x = {
    foo: { bar: 3 },
    array: [{
        does: 'work',
        too: [ 1, 2, 3 ]
    }]
}

var y = {
    foo: { baz: 4 },
    quux: 5,
    array: [{
        does: 'work',
        too: [ 4, 5, 6 ]
    }, {
        really: 'yes'
    }]
}

var expected = {
    foo: {
        bar: 3,
        baz: 4
    },
    array: [{
        does: 'work',
        too: [ 1, 2, 3, 4, 5, 6 ]
    }, {
        really: 'yes'
    }],
    quux: 5
}

merge(x, y) // => expected
```

methods
=======

```
var merge = require('deepmerge')
```

merge(x, y, [options])
-----------

Merge two objects `x` and `y` deeply, returning a new merged object with the
elements from both `x` and `y`.

If an element at the same key is present for both `x` and `y`, the value from
`y` will appear in the result.

Merging creates a new object, so that neither `x` or `y` are be modified.  However, child objects on `x` or `y` are copied over - if you want to copy all values, you must pass `true` to the clone option.

merge.all(arrayOfObjects, [options])
-----------

Merges two or more objects into a single result object.

```js
var x = { foo: { bar: 3 } }
var y = { foo: { baz: 4 } }
var z = { bar: 'yay!' }

var expected = { foo: { bar: 3, baz: 4 }, bar: 'yay!' }

merge.all([x, y, z]) // => expected
```

### options

#### arrayMerge

The merge will also merge arrays and array values by default.  However, there are nigh-infinite valid ways to merge arrays, and you may want to supply your own.  You can do this by passing an `arrayMerge` function as an option.

```js
function concatMerge(destinationArray, sourceArray, options) {
	destinationArray // => [1, 2, 3]
	sourceArray // => [3, 2, 1]
	options // => { arrayMerge: concatMerge }
	return destinationArray.concat(sourceArray)
}
merge([1, 2, 3], [3, 2, 1], { arrayMerge: concatMerge }) // => [1, 2, 3, 3, 2, 1]
```

#### clone

Defaults to `false`.  If `clone` is `true` then both `x` and `y` are recursively cloned as part of the merge.

install
=======

With [npm](http://npmjs.org) do:

```sh
npm install deepmerge
```

Just want to download the file without using any package managers/bundlers?  [Download the UMD version from unpkg.com](https://unpkg.com/deepmerge/dist/umd.js).

test
====

With [npm](http://npmjs.org) do:

```sh
npm test
```

license
=======

MIT
=======
Description
===========
Traverse and transform objects by visiting every node on a recursive walk.

Examples
========

These examples use node.js, but the module should work without it.

Collect Leaf Nodes
------------------
    var sys = require('sys');
    var Traverse = require('traverse').Traverse;
    
    var acc = [];
    Traverse({
        a : [1,2,3],
        b : 4,
        c : [5,6],
        d : { e : [7,8], f : 9 }
    }).forEach(function (x) {
        if (this.isLeaf) acc.push(x);
    });
    sys.puts(acc.join(' '));
    
    /* Output:
        1 2 3 4 5 6 7 8 9
    */

Replace Negative Numbers
------------------------
    var sys = require('sys');
    var Traverse = require('traverse').Traverse;
    
    var fixed = Traverse([
        5, 6, -3, [ 7, 8, -2, 1 ], { f : 10, g : -13 }
    ]).modify(function (x) {
        if (x < 0) this.update(x + 127);
    }).get()
    sys.puts(sys.inspect(fixed));
    
    /* Output:
        [ 5, 6, 124, [ 7, 8, 125, 1 ], { f: 10, g: 114 } ]
    */

Scrub and Collect Functions
---------------------------

Suppose you have a complex data structure that you want to send to another
process with JSON over a network socket. If the data structure has references to
functions in it, JSON will convert functions inside Arrays to null and ignore
keys that map to functions inside Objects.

    > JSON.stringify([ 7, 8, function () {}, 9, { b : 4, c : function () {} } ])
    '[7,8,null,9,{"b":4}]'

If these nested functions are important, it'd be nice if they could be collected
and replaced with some placeholder value that JSON can encapsulate. This sort of
transform and collection might be useful for
[an asynchronous remote method invocation library
](http://github.com/substack/dnode), for instance.

This example scrubs functions out of an arbitrary data structure so that the
structure may be JSON-ified. The functions are also collected for some other
use.
    
    var sys = require('sys');
    var Traverse = require('traverse').Traverse;
    
    var id = 54;
    var callbacks = {};
    var obj = { moo : function () {}, foo : [2,3,4, function () {}] };
    
    var scrubbed = Traverse(obj).modify(function (x) {
        if (x instanceof Function) {
            callbacks[id] = { id : id, f : x, path : this.path };
            this.update('[Function]');
            id++;
        }
    }).get();
    
    sys.puts(JSON.stringify(scrubbed));
    sys.puts(sys.inspect(callbacks));
    
    /* Output:
        {"moo":"[Function]","foo":[2,3,4,"[Function]"]}
        { '54': { id: 54, f: [Function], path: [ 'moo' ] }
        , '55': { id: 55, f: [Function], path: [ 'foo', '3' ] }
        }
    */
>>>>>>> more examples
