- [🔗 playground - super small files using features - adapted from tests](https://aretecode.github.io/chain-able-playground/)
- [🔗 jsfiddle with Inferno](https://jsfiddle.net/wqxuags2/28/)

<!-- div -->
## who uses it?


- [fliplog][fliplog]: fluent logging with verbose insight, colors, tables, emoji, filtering, spinners, progress bars, timestamps, capturing, stack traces, tracking, presets, & more...
- [lego-api][lego-api] renders the infinitely nestable permutations of conditionals for [fuse-box][fuse-box] so only what you use is included in the bundled api
- [d-l-l][d-l-l] makes your webpack build faster, in just a few lines, without having to waste time with the tedious manual configuration steps required to use the DLLPlugin
- [webpack-split-plugin][webpack-split-plugin] easily split bundles into multiple pieces with custom specifications
- [bench-chain][bench-chain] benchmark recording - averages & graphs.
- [cli-chain][cli-chain] easy, powerful, interactive, infinitely nestable fluent cli builder.
- [awesome-fluents][awesome-fluents] more awesome fluents/chains.
- [funwithflags][funwithflags] parse argument options. minimist in es6.
- [chain-able-find][chain-able-find] globby-compatible api, faster, & fluent.
- [chain-able-md][chain-able-md] markdown builder with a fluent api, used to create chain-able docs.
- [frisbee-chain][frisbee-chain] fetch api enhancer with Frisbee, as-a-chain.
<!-- /div -->

<!-- div -->
## [examples](https://github.com/fluents/chain-able/tree/master/examples)
- `MethodChain` _examples using method chains_
  - [data type + schema][schema]
  - [define][define]
  - [encase][encase]
  - [merging][merging]
  - [compose][compose]
  - [observing][observe]
  <!-- - transforming -->
- **minis** _really mini projects for examples_
  - [`DecoratorChain`][DecoratorChain] (making a chain that can be used to build decorators that work for all combinations*)
  - [`SwitchChain`][SwitchChain] - making `switch(condition) {}` as-a-chain, for fun
  - [`RegExpChain`][RegExpChain] - _fluent RegExp building with english words instead of symbols_
  - [`ObjectDefineChain`][ObjectDefineChain] - _simple example with `Object.define` as-a-chain_
- [typescript][examples_ts] (_for intelisense demo_)
- [decorators][examples_decorators] (for es6 transpiling experimenting)
- **State**
  - [Inferno/React state][examples_react_state] (_for intelisense demo_)
  - [TodoStore][TodoStore] (_react state store as a todostore_)
  - [LocalStorage][localStorage]
- **nodejs**
  - [Comments][examples_commentchain] (_another schema example_)
- @TODO:
  - Events: _an eventsource example_
  - chain-able-fs: _FileSystem stuff on nodejs_
  - Proxy: _minimal easy creation of chain-able with Proxies, slower, but shorter_
  - React & MobX: _more state chain examples_
  - Routing: _browser html routing, as a module later_
<!-- /div -->

[chain-able-md]: https://github.com/fluents/chain-able/blob/master/_modules/_chain-able-md/src/index.js
[webpack-split-plugin]: https://github.com/aretecode/webpack-split-plugin
[frisbee-chain]: https://github.com/fluents/chain-able/tree/master/examples
[examples_commentchain]: https://github.com/fluents/chain-able/tree/master/examples/packages/node/index.js
[localStorage]: https://github.com/fluents/chain-able/tree/master/examples/packages/playground/localStorage.js
[compose]: https://github.com/fluents/chain-able/tree/master/examples/packages/playground/compose.js
[observe]: https://github.com/fluents/chain-able/tree/master/examples/packages/playground/observe.js
[define]: https://github.com/fluents/chain-able/tree/master/examples/packages/playground/define.js
[encase]: https://github.com/fluents/chain-able/tree/master/examples/packages/playground/encase.js
[merging]: https://github.com/fluents/chain-able/tree/master/examples/packages/playground/merge.js
[schema]: https://github.com/fluents/chain-able/tree/master/examples/packages/playground/schema.js
[TodoStore]: https://github.com/fluents/chain-able/tree/master/examples/packages/playground/TodoStore.js
[examples_react_state]: examples_react_state
[examples_decorators]: examples_decorators
[examples_ts]: examples_ts
[DecoratorChain]: https://github.com/fluents/chain-able/tree/master/examples/packages/minis/DecoratorChain.js
[ObjectDefineChain]: https://github.com/fluents/chain-able/tree/master/examples/packages/minis/ObjectDefineChain.js
[SwitchChain]: https://github.com/fluents/chain-able/tree/master/examples/packages/minis/SwitchChain.js
[RegExpChain]: https://github.com/fluents/chain-able/tree/master/examples/packages/minis/RegExp.js

[d-l-l]: https://github.com/fliphub/d-l-l
[chain-able-find]: https://github.com/fluents/chain-able-find
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
