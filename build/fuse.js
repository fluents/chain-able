const {resolve} = require('path')

const cwd = process.cwd()
const res = rel => resolve(cwd, rel)

// @NOTE: for building fuse locally
// const moduleAlias = require('module-alias')
// moduleAlias.addPath(res('./node_modules'))
// moduleAlias.addPath(res('../../../fuse-box/fuse-box-master'))
// moduleAlias.addPath(res('../../../fuse-box/fuse-box-master/modules'))
// moduleAlias.addPath(res('../../../fuse-box/fuse-box-master/node_modules'))
// moduleAlias.addPath(res('../../../'))
// moduleAlias.addPath(res('./node_modules'))

const {
  FuseBox,
  QuantumPlugin,
  BublePlugin,
  JSONPlugin,
  UglifyJSPlugin,
} = require('fuse-box')
// } = require('../../../fuse-box/fuse-box-master')

let fuse = new FuseBox({
  homeDir: cwd,
  sourcemaps: true,
  output: res('dists/fuse/$name.js'),
  cache: false,
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
    // BublePlugin({}),
    QuantumPlugin({
      hoisting: true,
      ensureES5: true,
      bakeApiIntoBundle: 'chain',
      removeExportsInterop: true,
      // @TODO: uglify needs a fix
      // uglify: true,
      treeshake: true,
      containedAPI: true,
    }),
  ],
})

// fuse.dev()
fuse.bundle('chain').instructions(`> [dist/index.js]`)
fuse.run()
