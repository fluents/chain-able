const replacePlugin = require('rollup-plugin-replace')
const MagicString = require('magic-string')

// fork of the replace plugin, see ./ast
// const {createFilter, makeLegalIdentifier} = require('rollup-pluginutils')
// const log = require('fliplog')
//
// function escape(str) {
//   return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
// }
//
// function replacePlugin(options = {}) {
//   const values = options.values || options
//   const delimiters = (options.delimiters || ['', '']).map(escape)
//   const pattern = new RegExp(
//     delimiters[0] + '(' + Object.keys(values).join('|') + ')' + delimiters[1],
//     'g'
//   )
//
//   const filter = createFilter(options.include, options.exclude)
//
//   return {
//     name: 'replace',
//
//     transform(code, id) {
//       if (!filter(id)) return null
//
//       const magicString = new MagicString(code)
//
//       // log.data({magicString}).echo()
//
//       let hasReplacements = false
//       let match
//       let start, end, replacement
//
//       while ((match = pattern.exec(code))) {
//         hasReplacements = true
//
//         start = match.index
//         end = start + match[0].length
//         replacement = String(values[match[1]])
//
//         magicString.overwrite(start, end, replacement)
//       }
//
//       if (!hasReplacements) return null
//
//       let result = {code: magicString.toString()}
//       if (options.sourceMap !== false)
//         result.map = magicString.generateMap({hires: true})
//       return result
//     },
//   }
// }

// @see ./ast plugin
module.exports = should => {
  const replace = {}

  if (should.debugger) {
    replace['// @@DEBUGGER'] = `if (true) {debugger;}`
    // replace['process.env.DEBUG'] = true
    // replace['process.env.NODE_ENV'] = JSON.stringify('debug')
  }
  else {
    replace['// @@DEBUGGER'] = `// @@DEBUGGER`
  }
  // else if (should.development) {
  //   // replace['process.env.DEBUG'] = true
  //   // replace['process.env.NODE_ENV'] = JSON.stringify('development')
  // }
  // else if (should.production) {
  //   // replace['process.env.NODE_ENV'] = JSON.stringify('production')
  //   // replace['process.env.DEBUG'] = false
  // }

  console.log({replace})
  return replacePlugin(replace)
}
