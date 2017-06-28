const buble = require('rollup-plugin-buble')

module.exports = () =>
  buble({
    transforms: {
      // forOf: false,
      // dangerousForOf: false,
      // computedProperty: false,
    },
  })
