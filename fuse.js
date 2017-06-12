const {resolve} = require('path')
const moduleAlias = require('module-alias')

// moduleAlias.addPath(resolve(__dirname, './node_modules'))
moduleAlias.addPath(resolve(__dirname, '../../../../fuse-box'))
moduleAlias.addPath(resolve(__dirname, '../../../../fuse-box/modules'))
moduleAlias.addPath(resolve(__dirname, '../../../../fuse-box/node_modules'))
moduleAlias.addPath(resolve(__dirname, '../../../../'))
moduleAlias.addPath(resolve(__dirname, './node_modules'))

const {
  FuseBox,
  QuantumPlugin,
  BublePlugin,
  JSONPlugin,
  UglifyJSPlugin,
} = require('../../../../fuse-box')

let fuse = new FuseBox({
  homeDir: __dirname + '/dist',
  // sourcemaps: true,
  output: 'disted/$name.js',
  cache: false,
  bakeAPI: 'index.js',
  log: true,
  debug: true,
  globals: {default: '*'},
  natives: {
    process: false,
    stream: false,
    Buffer: false,
    http: false,
  },
  plugins: [
    JSONPlugin(),
    BublePlugin({}),
    QuantumPlugin({
      bakeApiIntoBundle: 'chain-able-fuse',
      target: 'server',
      removeExportsInterop: true,
      uglify: true,
      treeshake: true,
    }),
  ],
})

// fuse.dev()
fuse
  .bundle('chain-able-fuse')
  .target('server')
  .instructions(`> index.js -fliplog`)

fuse.run()
