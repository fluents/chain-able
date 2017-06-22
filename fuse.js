const {resolve} = require('path')
const moduleAlias = require('module-alias')

// moduleAlias.addPath(resolve(__dirname, './node_modules'))
// moduleAlias.addPath(resolve(__dirname, '../../../fuse-box/fuse-box-master'))
// moduleAlias.addPath(
//   resolve(__dirname, '../../../fuse-box/fuse-box-master/modules')
// )
// moduleAlias.addPath(
//   resolve(__dirname, '../../../fuse-box/fuse-box-master/node_modules')
// )
// // moduleAlias.addPath(resolve(__dirname, '../../../'))
// moduleAlias.addPath(resolve(__dirname, './node_modules'))

const {
  FuseBox,
  QuantumPlugin,
  BublePlugin,
  JSONPlugin,
  UglifyJSPlugin,
  PrepackPlugin,
} = require('fuse-box')
// } = require('../../../fuse-box/fuse-box-master')

let fuse = new FuseBox({
  // homeDir: __dirname + '/dist',
  homeDir: __dirname,
  // sourcemaps: true,
  output: 'disted/$name.js',
  cache: false,
  // bakeAPI: 'index.js',
  log: true, // '!filelist',
  // debug: true,
  globals: {default: '*'},
  natives: {
    process: false,
    stream: false,
    Buffer: false,
    http: false,
  },
  plugins: [
    // PrepackPlugin(),
    JSONPlugin(),
    // BublePlugin({}),
    QuantumPlugin({
      ensureES5: true,
      bakeApiIntoBundle: 'chain-able-fuse',
      target: 'server',
      removeExportsInterop: true,
      uglify: false,
      treeshake: true,
      containedAPI: true,
    }),
  ],
})

// fuse.dev()
fuse
  .bundle('chain-able-fuse')
  .target('server')
  // .instructions(`> [index.cjs.dev.es6.js]`) //  -fliplog
  .instructions(`> [dist/index.js]`) //  -fliplog

fuse.run()
