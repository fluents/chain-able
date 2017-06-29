const replacePlugin = require('rollup-plugin-replace')

const replace = {}
module.exports = should => {
  if (should.env === 'development') {
    should.development = true
  }
  else if (should.env === 'production') {
    should.production = true
  }

  if (should.debugger) {
    replace['// @@DEBUGGER'] = `if (true) {debugger}`
    replace['process.env.DEBUG'] = true
    replace['process.env.NODE_ENV'] = JSON.stringify('debug')
  }
  else if (should.development) {
    replace['process.env.DEBUG'] = true
    replace['process.env.NODE_ENV'] = JSON.stringify('development')
  }
  else if (should.production) {
    replace['process.env.NODE_ENV'] = JSON.stringify('production')
    replace['process.env.DEBUG'] = false
  }

  // console.log({replace})
  return replacePlugin(replace)
}
