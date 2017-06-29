const babili = require('rollup-plugin-babili')
const clean = require('rollup-plugin-cleanup')

module.exports = () => [
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
  ),
  clean(),
]
