const uglify = require('rollup-plugin-uglify')
const {minify} = require('uglify-es')

// https://github.com/mishoo/UglifyJS2/pull/733/files !!!
// https://github.com/mishoo/UglifyJS2#minify-options-structure
// should mangle...
module.exports = options => {
  let mangles = options.mangles === undefined ? true : options.mangles

  // @TODO hard to keep it mangling top-level, so ugly with 1 letter fns
  // mangles = false

  const beautify = !!options.beautify

  const uglifyOptions = {
    warnings: true,
    parse: {
      // parse options
      html5_comments: false,
      shebang: false,
    },
    // https://github.com/mishoo/UglifyJS2#conditional-compilation-api
    compress: {
      // compress options
      dead_code: true,
      global_defs: {
        ENV_DEBUG: false,
        ENV_DEVELOPMENT: false,
        dev: false,
        debug: false,
      },

      // drop_debugger: true,
      booleans: true,
      unused: true,
      comparisons: true,
      conditionals: true,
      hoist_funs: true,
      if_return: true,
      join_vars: true,
      cascade: true,
      collapse_vars: true,

      // drop_console: true,

      // debug: '',
      // only 1 getters - length
      pure_getters: true,

      // helpful - except when you WANT the constants
      evaluate: true,
      sequences: true,

      // @TODO:
      // pure_funcs: true, side_effects: false,

      // @NOTE we need this one for fp/arity
      keep_fargs: true,

      keep_fnames: beautify, // for now

      // keep_fnames: false, // for now
      passes: 10,
    },

    // mangle: false,
    mangle: mangles
      ? {
        properties: false,
        //  {
        //    name_cache: resolve('./tmp/namecache.json'),
        //    unsafe: true,
        //    builtins: true,
        //  }
        toplevel: mangles,

        // ties to compression opt
        keep_fnames: beautify,
        reserved: ['unwrapExports'],
      }
      : false,

    // output: {
    //   beautify: true,
    // },
    sourceMap: true,
    toplevel: mangles,
    ie8: false,
  }
  console.log(uglifyOptions)
  return uglify(uglifyOptions, minify)

  // more minimal
  // plugins.push(
  //   uglify(
  //     {
  //       warnings: false,
  //       parse: {
  //         // parse options
  //         html5_comments: false,
  //         shebang: false,
  //       },
  //       compress: {
  //         // compress options
  //         dead_code: true,
  //         drop_debugger: true,
  //         booleans: true,
  //         unused: true,
  //       },
  //
  //       sourceMap: true,
  //       toplevel: false,
  //       ie8: false,
  //     },
  //     minify
  //   )
  // )
}
