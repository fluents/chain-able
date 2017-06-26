// https://github.com/mishoo/UglifyJS2/pull/733/files !!!
if (should.uglify) {
  // https://github.com/mishoo/UglifyJS2#minify-options-structure
  // should mangle...
  plugins.push(
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
  )
}
