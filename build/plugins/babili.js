if (should.babili) {
  const babili = require('rollup-plugin-babili')
  const clean = require('rollup-plugin-cleanup')
  plugins.push(
    babili(
      {
        // minify: false,
        // mangle: {
        //   keepFnName: true,
        // },
        // deadcode: {
        //   keepFnName: true,
        // },
      }
    )
  )
  plugins.push(clean())
}
