# ⛓ chain-able

[![NPM version][chain-able-npm-image]][chain-able-npm-url]
[![docs](https://img.shields.io/badge/📖-docs-blue.svg)](https://github.com/fluents/chain-able/wiki)
[![Dependencies][david-deps-img]][david-deps-url]
[![fliphub][gitter-badge]][gitter-url]
[![BuildStatus](https://travis-ci.org/fluents/awesome-fluents.svg?branch=master)](https://travis-ci.org/fluents/awesome-fluents)
[![Coverage Status](https://coveralls.io/repos/github/fluents/chain-able/badge.svg?branch=master)](https://coveralls.io/github/fluents/chain-able?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b1d92a30c4aa43df9a6233cfadde2307)](https://www.codacy.com/app/aretecode/chain-able?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fluents/chain-able&amp;utm_campaign=Badge_Grade)
[![gzip size](http://img.badgesize.io/https://unpkg.com/chain-able@3.0.0/index.amd.js?compression=gzip)](https://unpkg.com/chain-able@3.0.0)
[![fluent](https://img.shields.io/badge/⛓-fluent-9659F7.svg)](https://github.com/fluents/awesome-fluents)
[![fluent](https://img.shields.io/badge/🎡-playground-black.svg)](https://aretecode.github.io/chain-able-playground/)

[david-deps-img]: https://img.shields.io/badge/0-dependencies-blue.svg
[david-deps-url]: https://david-dm.org/fluents/chain-able
[chain-able-npm-image]: https://img.shields.io/npm/v/chain-able.svg
[chain-able-npm-url]: https://npmjs.org/package/chain-able
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://spdx.org/licenses/MIT
[gitter-badge]: https://img.shields.io/gitter/room/fliphub/pink.svg
[gitter-url]: https://gitter.im/fliphub/Lobby

[wiki]: https://github.com/fluents/chain-able/wiki
[deps]: https://github.com/fluents/chain-able/wiki/deps
[parent]: https://github.com/fluents/chain-able/wiki/parent
[analogy]: https://github.com/fluents/chain-able/wiki/analogy
[Observe]: https://github.com/fluents/chain-able/wiki/Observe
[DotProp]: https://github.com/fluents/chain-able/wiki/DotProp
[Schema]: https://github.com/fluents/chain-able/wiki/Schema
[Transform]: https://github.com/fluents/chain-able/wiki/Transform
[Shorthand]: https://github.com/fluents/chain-able/wiki/Shorthand
[API]: https://github.com/fluents/chain-able/wiki/api
[compose]: https://github.com/fluents/chain-able/wiki/Compose
[Chainable]: https://github.com/fluents/chain-able/wiki/Chainable
[ChainedMap]: https://github.com/fluents/chain-able/wiki/ChainedMap
[ChainedSet]: https://github.com/fluents/chain-able/wiki/ChainedSet
[FactoryChain]: https://github.com/fluents/chain-able/wiki/FactoryChain
[MergeChain]: https://github.com/fluents/chain-able/wiki/MergeChain
[MethodChain]: https://github.com/fluents/chain-able/wiki/MethodChain
[TraverseChain]: https://github.com/fluents/chain-able/wiki/TraverseChain
[CHANGELOG]: https://github.com/fluents/chain-able/blob/master/docs/CHANGELOG.md
[Snippet]: https://github.com/fluents/chain-able/wiki/Snippet
[Examples]: https://github.com/fluents/chain-able/wiki/Examples
[ExamplesPrimitives]: https://github.com/fluents/chain-able/wiki/Primitives
[ExamplesLocalStorage]: https://github.com/fluents/chain-able/wiki/LocalStorage
[ExamplesExpressive]: https://github.com/fluents/chain-able/wiki/LocalStorage
[ExamplesComparison]: https://github.com/fluents/chain-able/wiki/Comparison
[ExamplesIteratable]: https://github.com/fluents/chain-able/wiki/Iteratable
[TypeDefs]: https://github.com/fluents/chain-able/tree/master/typings
[Tests]: https://github.com/fluents/chain-able/tree/master/test
[Src]: https://github.com/fluents/chain-able/tree/master/src
[map]: https://ponyfoo.com/articles/es6-maps-in-depth
[set]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
[cov]: https://coveralls.io/github/fluents/chain-able?branch=master

> interfaces that describe their intentions


### 📦 install

```bash
yarn add chain-able
npm i chain-able --save
```

#### cdn
- _dev_ `<script src="https://unpkg.com/chain-able@beta/dists/dev/index.js"></script>`
- _min_ `<script src="https://unpkg.com/chain-able@beta/dists/umd/index.js"></script>`


# 🏰 benefits

writing an api using chain-able means:
- write **1** api
- get **3** apis as a result!
  - 🍉 persistable, rehydratable, & transferrable configurations
  - ⛓ fluent/chainable api
  - 🍦 vanilla object syntax

# 🎁 features

- [expressive, clearly communicative code][wiki]
- [runtime type validation][Schema]
- [🔬 300+ tests][Tests] with [96%+ code coverage][cov]
- ⚡ [performant & tiny][Src] `~8kb` _(gzip)_ [_300 byte_ minimal version available as snippet][snippet]

<details><summary><em><b>more...</b></em></summary>

- [🌐 api][API]
  - [⛓ Chainable][Chainable]
  - [🗺 ChainedMap][ChainedMap]
  - [🔢 ChainedSet][ChainedSet]
  - [🍴 extends Map & Set, same transparent api][map]
  - [🔣 symbols to make usage even easier][Chainable]
- [🍭 iteratable][ExamplesIteratable]
- [🗣 expressive][ExamplesExpressive]
- [👾 makes solving complex problems simple][Examples]
- [💆 seamless native integration][ExamplesPrimitives]
- [🎼 compose & decorate][compose]
  - [👂 observe with Wildcard/Glob, RegExp, Functions][Observe]
  - [🤖 transform][Transform]
  - [🕵 debug][Shorthand]
  - [👣 traverse **any** data][TraverseChain]
  - [⚖️ fast deepEquals][Transform]
  - [🗺 remap][Transform]
  - [👆 tap][ChainedMap]
  - [🔋 toggleable dot.prop][DotProp]
  - [🖐 shorthands, wrap, return, setIfEmpty][Shorthand]
- [🛂 types, schemas, validation][Schema]
- [🔌 method builder][MethodChain]
  - [`onCall`][MethodChain]
  - [`onSet`][MethodChain]
  - [`onGet`][MethodChain]
  - [`type`][MethodChain]
  - [`define`][MethodChain]
  - [`getSet`][MethodChain]
  - [`default`][MethodChain]
  - [`initial`][MethodChain]
  - [`bind`][MethodChain]
  - [`camelCase`][MethodChain]
  - [`autoIncrement`][MethodChain]
  - [`factory`][MethodChain]
  - [`returns`][MethodChain]
  - [`callReturns`][MethodChain]
  - [`decorate (any object!)`][MethodChain]
- [🏭 infinitely nestable understandable factories][FactoryChain]
- [▶️◀️ easy deep merging][MergeChain]
- [☮️ compatibility - typescript, nodejs,  webpack, rollup, fusebox, babel, buble, amd][API]

</details>

-----

### 🔗 related

- [😎⛓ awesome fluents](https://github.com/fluents/awesome-fluents)
- many thanks to [Eli Perelman](https://github.com/eliperelman) for all the chainable goodness
- thanks to [James Halliday](https://github.com/substack) for the tremendous [traversals](https://github.com/substack/js-traverse)
- thanks to [Sindre Sorhus](https://github.com/sindresorhus) for the simple [dot-prop](https://github.com/sindresorhus/dot-prop) access
- thanks to [Josh Duff](https://github.com/KyleAMathews) for [deep merging](https://github.com/KyleAMathews/deepmerge)
- based on [webpack-chain](https://github.com/mozilla-rpweb/webpack-chain), but not webpack-specific.
- thanks to [Jon Schlinkert](https://github.com/jonschlinkert/kind-of) & [inferno](https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts) for type checking inspirations
- transpiled with [buble](https://gitlab.com/Rich-Harris/buble)
- [Martin Fowler on FluentInterface](https://www.martinfowler.com/bliki/FluentInterface.html)
- [ramda](https://github.com/ramda/ramda) & [lodash](https://github.com/lodash/lodash) for some well tested & documented utilities (currying, mapping)
