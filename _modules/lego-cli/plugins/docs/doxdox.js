module.exports = {
  /**
   * https://github.com/nhnent/tui.jsdoc-template
   * @param {Array<string>} files
   * @return {AppCli} @chainable
   */
  doxdox(files) {
    console.log(
      'had issue with requiring absolute before, but should be fixed in latest'
    )
    console.log(
      `doxdox 'src/**/*.js' --layout markdown --output docs/doxdox.md`
    )
    return this
    // jsdoc2md --config=jsdoc.json
    // jsdoc2md --source src --config=jsdoc.json
    // https://github.com/jsdoc3/jsdoc/blob/master/lib/jsdoc/env.js
    // https://github.com/jsdoc3/jsdoc/blob/master/cli.js
    // jsdoc src --recurse --template='node_modules/tui-jsdoc-template' --destination='docgen' --readme='README.md' ENV.conf.plugins="['node_modules/jsdoc-babel', 'plugins/markdown']"
    // jsdoc --include 'src' --recurse --template='node_modules/tui-jsdoc-template' --destination='docgen' --readme='README.md'
    //
    // --template 'node_modules/tui-jsdoc-template'
    // jsdoc src --recurse --destination 'docgen'
    //
    // require('fliplog').trackConsole();
    //
    // * @module jsdoc/opts/args
    // * @requires jsdoc/opts/argparser
    //
    //
    // ./jsdoc/jsdoc src --recurse --destination 'docgen' --plugins "node_modules/jsdoc-babel,plugins/markdown"
    // node ./node_modules/jsdoc/jsdoc src --recurse --destination 'docgen' --plugins "node_modules/jsdoc-babel,node_modules/jsdoc/plugins/markdown.js"

    // const doxdox = require('doxdox')
    const doxdox = require('../../../nofundocs/doxdox')
    files = this.docFiles(files)

    log
      .data({
        files,
        config: {
          // parser: 'dox',
          // layout: 'Markdown',
          pkg: this.pkgjson,
        },
      })
      .echo()

    log.white('files: ').data(files).echo()

    // stupid paths
    doxdox
      .parseInputs(files, {
        // parser: 'dox',
        // layout: 'markdown',
        parser: require.resolve('doxdox-parser-dox').replace(process.cwd(), ''),
        layout: require
          .resolve('doxdox-plugin-markdown')
          .replace(process.cwd(), ''),
        pkg: this.pkgjson,
      })
      .then(content => {
        log.cyan('writing docs').echo()
        log.white('content: ' + content).echo()
        File.src('./docs/docs.md', this.dir).setContent(content).write()
      })

    return this
  },
}
