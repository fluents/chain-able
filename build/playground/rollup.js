const {resolve} = require('path')
const log = require('fliplog')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const {rollup} = require('rollup')
const uglify = require('rollup-plugin-uglify')
const {minify} = require('uglify-es')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')

const res = rel => resolve(__dirname, rel)

const replacePlugin = () => {
  return replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    // 'process.env.NODE_ENV': JSON.stringify('debug'),
    'NO_OP': `function() {/* noop */}`,
  })
}
const bublePlugin = () =>
  buble({
    transforms: {
      // forOf: false,
      // dangerousForOf: false,
      // computedProperty: false,
    },
  })
const uglifyPlugin = () =>
  uglify(
    {
      warnings: true,
      parse: {
        // parse options
        html5_comments: false,
        shebang: false,
      },
      compress: {
        // compress options
        dead_code: true,
        drop_debugger: true,
        booleans: true,
        unused: true,
        comparisons: true,
        conditionals: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        collapse_vars: true,

        // only 1 getters - length
        pure_getters: true,

        // @TODO:
        // pure_funcs: true, side_effects: false,
        keep_fargs: false,
        keep_fnames: false, // for now
        passes: 3,
      },

      mangle: {
        properties: false,
        //  {
        //    name_cache: resolve('./tmp/namecache.json'),
        //    unsafe: true,
        //    builtins: true,
        //  }
        toplevel: true,

        // ties to compression opt
        keep_fnames: false,
      },

      sourceMap: true,
      toplevel: true,
      ie8: false,
    },
    minify
  )

const config = {
  // entry: res('./play.js'),
  // entry: res('../../src/deps/fp/curry.js'),
  entry: res('../../src/deps/is/tagEq.js'),
  // external: [],
  onwarn(warning) {
    log.red(warning).echo()
  },
  // , bublePlugin(), uglifyPlugin()
  plugins: [replacePlugin(), nodeResolve(), commonjs()],
}
const bundleOptions = {
  dest: res('./play.bundled.js'),
  indent: true,
  format: 'iife',
  moduleName: 'playground',
  sourceMap: false,
}

rollup(config)
  .catch()
  .then(ricky => {
    // @NOTE ricky has the ast, imports, exports, etc
    log.data(ricky).echo(false)
    ricky.write(bundleOptions)
  })
  .then(nill => +log.green(`✅ done`))
  .catch(log.catch)
