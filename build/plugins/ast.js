const log = require('fliplog')
const falafel = require('falafel')
const {createFilter, makeLegalIdentifier} = require('rollup-pluginutils')
const traverse = require('traverse')
const acorn = require('acorn')
const babylon = require('babylon')
// const acorn = require('acorn-dynamic-import').default

const SHOULD_STRIP = /ENV_DEVELOPMENT|ENV_DEBUG/

/**
 * @symb 🥙
 * @memberOf rollup.plugins 🗞️🔌🥙
 * @param {*} options
 */
function falafelPlugin(options = {}) {
  // var filter = createFilter(options.include, options.exclude)

  return {
    transform(code, id) {
      // @TODO: remove tryCatch, should work with module sourceType
      try {
        let updated = false
        var output = falafel(
          code,
          // babylon
          {parser: acorn, sourceType: options.sourceType || 'module'},
          function(node) {
            var source = node.source()

            if (node.type === 'Literal') {
              // log.green('literal').data(source).echo()
            }

            if (node.type === 'IfStatement') {
              // log.blue('IfStatement').echo()

              if (SHOULD_STRIP.test(source)) {
                log.bold('IfStatement with DEBUG').data(source).echo()

                updated = true
                node.update(';')

                // @NOTE: also works - but doesn't play well with rollup-replace
                // const conditional = `((process.env.NODE_ENV !== "debug"))`
                // while (SHOULD_STRIP.test(source)) {
                //   // log.diff(source)
                //   source = source
                //     .replace(/ENV_DEBUG/gim, conditional)
                //     .replace(/ENV_DEVELOPMENT/gim, conditional)
                //     .toString()
                //   console.log(source)
                //   node.update(source)
                //   // log.diff(source)
                //   // log.echo()
                // }
              }
            }
          }
        )
        if (updated) {
          // @NOTE: reparse the walked & replaced code ast or ast.toString
          //        may be helpful with sourceMaps depending on parsers and how they play with other plugins
          //
          // var acs = acorn.parse(output)
          // escodegen.generate(ast, {comment: true})
          // log.red('updated').prettyformat(output).echo()
          // log.red('updated').data(acs).exit()
          // var babs = require('babylon').parse(output.toString(), {
          //   // parse in strict mode and allow module declarations
          //   sourceType: 'module',
          // })
          // log.red('updated').data(babs).echo()
          // return babs
        }
        return output.toString()
      }
      catch (e) {
        log.red('fala..well').data(e).echo()
      }

      // @TODO: need to add back sourceMap
      // return {
      //   code: generatedCode,
      //   map: generatedSourceMap,
      // }
    },
  }
}

/**
 * @param {string} code from file in cli
 * @return {string} replaced string
 */
falafelPlugin.stripRollup = function(code) {
  var output = falafel(
    code,
    // babylon
    {parser: acorn, sourceType: 'module'},
    function(node) {
      // log.underline('node.type: ' + node.type).echo()

      // @example `var index$1 = unwrapExports(index);`
      if (node.type === 'CallExpression') {
        // log.bold('CallExpression ').data(node.callee.name).echo()
        if (node.callee && node.callee.name === 'unwrapExports') {
          log.bold('CallExpression ').data(node.source()).echo()
          node.update(node.source().replace('unwrapExports', ''))
        }
      }

      // @example `function unwrapExports(exported) {}`
      if (node.type === 'FunctionDeclaration') {
        if (node.id && node.id.name === 'unwrapExports') {
          node.id.name = ''
          // EMPTY
          node.update(';')
          // node.update('(' + (node.arguments || 'index') + ')')
        }
      }
    }
  )

  output = output.toString()
  return output
}

module.exports = falafelPlugin
