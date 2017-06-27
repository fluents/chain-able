# build system:

![time](https://pics.me.me/you-dinosaurs-have-probably-never-seen-webpack-this-makes-me-21548139.png)

### problem
- we want to write code in the latest greatest, but not everyone can haz it
- we want all the latest greatest, and for it to work with all the old things
- it has to be performant & lean, yet easy to debug

### solution
- try and make everyone happy especially ourselves, use all the tools!
- use [D8][] (debug shell for [V8][]) with [irhydra][] with locally built [irhydra][] using [dart][] -> [awesome-deopt][] to **easily** find your deopts & quickly optimizable functions, don't be fooled by js
- make a bunch of small side-effect-free functions that can be easily scoped when you do your build
- be safe with export naming & sugar syntax for import/export, test your dist files
- add a lot of debugging functionality wrapped in conditionals that will be dropped out when you build, but kept for development versions
- export for lots of formats, the more the merrier, make the api painless for people to use
<!-- - clearly communicative code (none of this `const isDottable = (obj, path) => T(reduceRight(curry3(or)(isString)(isArray)(obj))`) -->

[dart]: https://www.dartlang.org/
[awesome-deopt]: https://github.com/aretecode/awesome-deopt
[chromium]: https://www.chromium.org/developers/how-tos/run-chromium-with-flags
[D8]: https://github.com/v8/v8/wiki/Using-D8
[V8]: https://github.com/v8/v8
[irhydra]: https://github.com/mraleph/irhydra

## steps

0. ✅ `src` code is [es6 supported by LTS node & last many versions of chrome][node.green]
1. run the [Makefile][] with shorthand combinations for what needs to be run (e.g., `make`, or `make copy test cov prepublish`)
2. copy with [flow-remove-types][] (_types are no longer in the src but the copying for easy importing is still helpful_)
  - `src/` -> `/`
  - `src/` -> `dist/`
  - `test/` -> `test-dist`
3. code coverage: run [buble][] on the `dist/` & `test-dist/` with sourceMaps inlined (_output into those same respective dirs_)
4. [nyc][] runs [ava][], which uses [babel][], which uses the inline sourceMaps from [buble][]... this is an unfortunate & required convoluted sequence of steps because:
  - [nyc][] does not support for es6
  - [ava][] forces the use of [babel][]
  - unfortunately the [tap][tap] reporter for [ava][] doesn't play nicely with [covert][] (which is old anyway)
  - there are barely any code coverage libraries for js
  - [babel][] has issues (breaks) when _running_ babel-transpiled-code that _extends_ raw es6 classes
  - **GOING TO TRY JEST** https://medium.com/@kentcdodds/migrating-to-jest-881f75366e7e
5. run [rollup][] - exports
  - `rollup: config: {}` entry in `package.json` for some targets that need a little extra config
  - we already have a `dist` folder that is es3+, and we can use it for each target (vs transpiling all of the source code each time)
  - best practice here is an index/entry file that just conditionally requires & exports the right file for the environment
  - rollup allows multiple [targets each with their own format](https://github.com/rollup/rollup/wiki/JavaScript-API#format) which I'll inline for convenience
    - `amd` – Asynchronous Module Definition, used with module loaders like RequireJS
    - `cjs` – CommonJS, suitable for Node and Browserify/Webpack/FuseBox
    - `es` (*default*) – Keep the bundle as an ES module file
    - `iife` – A self-executing function, suitable for inclusion as a <script> tag. (If you want to - create a bundle for your application, you probably want to use this, because it leads to - smaller file sizes.) ([preact][] builds with this)
    - `umd` – Universal Module Definition, works as amd, cjs and iife all in one ❗ (this is default dev export, used also for dev by [inferno][])
5. production finishing touches:
  - replace our environment variables to [remove things for production](#ReplaceDefine)
  - export a _development_ build that keeps these conditions, for easier debugging
  - [uglify-js3][uglify-js3] is run with [uglify-es][uglify-es]
  - [optimize-js][optimize-js] wraps some functions
  - [eslint][] uses [babeleslint][] to check the code, [prettier][] makes it pretty - then is forced back by [eslint][] if the rules are overriden (since it does not respect some of them)
  - [codacy][] checks the lint rules in case any were missed by local tools
  - [travis][] does the same thing all over again so we are sure it didn't "just work for us"
  - [coveralls][] & [badgesize][]  gets the result & then you get badges & graphs
5. record build data [size-over-time][]
  - [gzip-size][gzip-size] of the build `gzip-size dist/index.js --raw >> build/size-over-time.txt`
  - record date `date +%Y:%M:%D:%H:%M:%S >> build/size-over-time.txt`
  - format `echo --- >> build/size-over-time.txt`
  - comment (_should do a cli prompt_)
6. experiment with other bundling setups
  - [fuse-box][] has a much easier build process, reports gzip, much faster, can compile with buble, typescript, or babel without any extra plugins, but the size is just a _little_ bigger than [rollup][] so I can't use it for `main` export yet - but likely soon
  - at one point, creating a [rollup][] bundle of es6 code, transpiling that with [typescript][] (_so helpers are not duplicated, though with the latest version they have a helper for that_), then re-bundling & uglifying gave a little better size than [buble][], but it didn't stay that way for long :-/
  - using [webpack][], even with the new [webpack 3 scope hoisting][] was many many times bigger than everything else so it was just not an option, more for applications than libraries (using webpack is much better with [webpack-chain][])
  - [gulp][] probably would work, but would need 100 plugins
  - [browserify][], although the slowest, was the easiest to just with 1 line cli cmd, and is the most stable by far, so when I just wanted to zip an html + css + js file, it just worked no trouble no config, kudos there, but not really for optimizing size
  - [brunch][] is definitely not focused on this job, but similar to [yeoman][] in the way that it can get you started with a skeleton, probably worth putting a getting started repo on it for chainable
  - [grunt][] using grunt nowadays, is like using underscore, jquery, and coffeescript all together nowadays - not for a good reason (which there are), but just because the code wasn't maintained
  - [pin.gy][] nice looking cli, but that's about the same as [browserify][] without being an OG
  - [broccoli.js][] it says node 0.10.x as `node --version` for "latest"



#### related
- [cli](https://github.com/fluents/chain-able/tree/master/build)
- [rollup][rollup]
- [Makefile][Makefile]
- [buble][buble]
- [babel][babel] + [ava][ava] + [istanbul/nyc][nyc]
- [flow-remove-types][flow-remove-types]
- [typescript][typescript]
- [fuse-box][fuse-box]
- [uglify-js3][]
- [optimize-js][]
- [fuse-box][]

# targets
some notes
- most important & standard ones are `main`, `browser`
- nobody should be using `js:next`, `module` replaces it
- typings is for [typescript][]

```json
{
  "main:es6": "src/index.js",
  "main:dev": "dists/dev/index.js",
  "main:tsc": "dists/tsc/index.js",
  "main:iife": "dists/iife/index.js",
  "main:umd": "dists/umd/index.js",
  "main:cjs": "dists/cjs/index.js",
  "main:es": "dists/es/index.js",
  "js:next": "dists/es/index.js",
  "main": "dists/umd/index.js",
  "module": "dists/umd/index.js",
  "web": "dists/cjs/index.js",
  "browser": "dists/cjs/index.js",
  "alias": "dists/cjs/index.js",
  "amd": "dists/amd/index.js",
  "types": "typings/index.d.ts",
  "typings": "typings/index.d.ts"
}
```

# ReplaceDefine
This is how replace/define plugin works:

Libraries (such as react, inferno, etc) (see [react-readme](https://github.com/facebook/react/blob/c78464f8ea9a5b00ec80252d20a71a1482210e57/scripts/error-codes/dev-expression-with-codes.js#L63), [react-code](https://github.com/facebook/react/blob/c78464f8ea9a5b00ec80252d20a71a1482210e57/scripts/error-codes/dev-expression-with-codes.js#L63), [inferno-code](https://github.com/infernojs/inferno/blob/0203b437ba2b2f8305b7dbf49752c463af3f5146/packages/inferno/src/DOM/rendering.ts#L37)) have conditionals which look like the following:
```js
if (process.env.NODE_ENV === 'development') { /* do debugging */ }
```

After it has been run with a config similar to:
```js
define({
  'process.env.NODE_ENV': JSON.stringify('production'),
})
```

the library code will come out as
```js
if ('production' === 'development') { /* do debugging */ }
```

when that code is run through [uglify](https://github.com/mishoo/UglifyJS#api) [or babili](https://www.npmjs.com/package/babel-plugin-minify-dead-code-elimination) with drop-dead-code (`default: true`), it can do static-analysis, and will remove that block, since `'production'` is never `'development'`.

since this is a string replacement, it does not mean that a `process` polyfill is required for the browser, so `console.log(process.env)` will not exist unless it is auto-polyfilled because of that `console.log`, or because you've explicitly added a polyfill that handles that.

the origin of `define` is [C define](https://www.techonthenet.com/c_language/constants/create_define.php)

to see more on deadcode elimination
- [tree-shaking-versus-dead-code-elimination](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
- [angular rollup](http://blog.mgechev.com/2016/06/26/tree-shaking-angular2-production-build-rollup-javascript/)
- [angular webpack](https://offering.solutions/blog/articles/2017/02/08/angular-2-ahead-of-time-aot-compilation-lazy-loading-treeshaking-webpack/)
- angular fuse? probably next

# types & docs
- [doxdox][] creates some documentation from [jsdocs][]
- [docdown][] is used by [lodash][]
- typescript/flow types can generated here too from [jsdocs][], or from the js
  - [typescript-jsdoc][]
  - [typescript-2-jsdoc][]
  - [flow-jsdoc][]
  - [react-docs][]

# export transpiling

> be careful - module.exports & exports.name work perfectly well, test your dist files

- https://github.com/infernojs/inferno/issues/928
- https://github.com/infernojs/inferno/issues/903
- https://github.com/infernojs/inferno/issues/686
- https://github.com/DefinitelyTyped/DefinitelyTyped/issues/8005
- https://github.com/Microsoft/TypeScript/issues/5565#issuecomment-155171298


# next

[closure][] & [traceur][] I haven't tried with chainable yet so

<!-- https://www.reddit.com/r/javascript/comments/46sbd2/is_amd_requirejs_dying/?st=j1fhzu9p&sh=3e6c2df3
no more umd
https://jasonformat.com/umd-is-dead-long-live-umd/
https://twitter.com/_developit/status/844260377546440705 ***
https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/
http://davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
because any user of your lib when they use their builder
- they will be able to use your `module.exports`,
- if they need it on global, they can use `ProvidePlugin`, or the like in fusebox or rollup
- it does more harm than good, because then rollup & web pack will not be able to properly fully shake your lib -->

[lodash]: https://github.com/lodash/lodash
[docdown]: https://github.com/jdalton/docdown
[webpack 3 scope hoisting]: https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b
[closure]: http://closure-compiler.appspot.com/home
[traceur]: https://github.com/google/traceur-compiler
[webpack-chain]: https://github.com/mozilla-rpweb/webpack-chain
[typescript-jsdoc]: https://www.npmjs.com/package/tsd-jsdoc
[typescript-2-jsdoc]: http://ts2jsdoc.js.org/
[flow-jsdoc]: https://github.com/Kegsay/flow-jsdoc
[react-docs]: https://github.com/kadirahq/babel-plugin-react-docgen
[jsdocs]: http://usejsdoc.org/
[doxdox]: doxdox.org
[badgesize]: https://github.com/ngryman/badge-size
[coveralls]: https://coveralls.io/github/fluents/chain-able
[prettier]: https://github.com/prettier/prettier
[babeleslint]: https://github.com/babel/babel-eslint
[eslint]: http://eslint.org/
[inferno]: https://github.com/infernojs/inferno/blob/master/scripts/rollup/build.js#L20
[preact]: https://github.com/developit/preact/blob/master/config/rollup.config.js#L7
[rollupapi]: https://github.com/rollup/rollup/wiki/JavaScript-API
[gulp]: http://gulpjs.com/
[grunt]: https://github.com/gruntjs/grunt
[pin.gy]: https://pin.gy/cli/
[broccoli.js]: http://broccolijs.com/
[yeoman]: https://github.com/yeoman
[brunch]: http://brunch.io/
[node.green]: http://node.green/
[webpack]: https://webpack.js.org/
[browserify]: https://github.com/substack/node-browserify
[uglify-es]: https://www.npmjs.com/package/uglify-es
[uglify-js3]: https://github.com/mishoo/UglifyJS2
[optimize-js]: https://github.com/nolanlawson/optimize-js
[travis]: travis-ci.org
[codacy]: https://www.codacy.com/app/aretecode/chain-able
[codecov]: https://codecov.io/gh
[tap]: https://github.com/sindresorhus/awesome-tap#reporters
[covert]: https://github.com/substack/covert
[gzip-size]: https://github.com/sindresorhus/gzip-size
[Makefile]: https://gist.github.com/isaacs/62a2d1825d04437c6f08
[flow-remove-types]: https://github.com/flowtype/flow-remove-types
[nyc]: https://github.com/istanbuljs/nyc
[babel]: babeljs.io/repl/
[ava]: [https://github.com/avajs/ava]
[webpack-split-plugin]: https://github.com/aretecode/webpack-plugin-split
[fliplog]: https://github.com/aretecode/fliplog
[lego-api]: https://github.com/fuse-box/lego-api
[cli-chain]: https://github.com/fluents/cli-chain
[script-chain]: https://github.com/fluents/script-chain
[bench-chain]: https://github.com/aretecode/bench-chain
[funwithflags]: https://github.com/aretecode/funwithflags
[awesome-fluents]: https://github.com/fluents/awesome-fluents
[easily-minifiable]: https://gist.github.com/aretecode/9b1765a897554b82da96591372d3c149
[awesome-deops]: https://github.com/aretecode/awesome-deopts
[build]: https://github.com/fluents/chain-able/tree/master/build
[size-over-time]: https://github.com/fluents/chain-able/blob/master/build/size-over-time.txt
[stress-test]: https://github.com/aretecode/stress-test
[rollup]: rollupjs.org
[fuse-box]: https://github.com/fuse-box/fuse-box
[buble]: buble.surge.sh
[typescript]: http://www.typescriptlang.org/play/
