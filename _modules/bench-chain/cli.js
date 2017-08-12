const log = require('fliplog')

// @NOTE: not released yet
const {pkg, AppCLI, gen} = require('fluent-skeleton')

/**
 * @ typedef {number|string} name
 * @ typedef {Object<name>} Averages
 * @ typedef {Object<name: Array<Object>} Results
 */

class CLI extends AppCLI {
  constructor() {
    super()
    this.dir = __dirname
    this.setup()
  }

  /**
   * @TODO remove `@TODO:` apparently doxdox sucks
   */
  docs() {
    super.docs(['src/**/*.js'])
  }

  /**
   * @desc writes pkg json
   * @return {CLI} @chainable
   */
  pkg() {
    pkg
      .version('0.0.4')
      .name('bench-chain')
      .description('benchmark recording - averages & graphs.')
      .main('src/index')
      .script('test', `ava --verbose`)
      .script('docs', `jsdoc`)
      .dep('benchmark', '2.1.4')
      .dep('flipfile', '*')
      .dep('fliplog', '*')
      .devDep('ava', '*')
      .devDep('doxdox', '*')
      .devDep('jsdoc', '3.4.3')
      .devDep('jsdoc-api', '3.0.0')
      .devDep('jsdoc-babel', '0.3.0')
      .devDep('tui-jsdoc-template', '1.1.0')
      .keywords(['benchmark', 'ui', 'average', 'graph', 'time', 'record'])
      .author('James <aretecode@gmail.com>')
      .license('MIT')
      .repo('aretecode/bench-chain')
      .jsdocs({
        source: {
          include: ['readme.md', 'src', 'disted'],
          includePattern: '.+\\.js(doc)?$',
        },
        opts: {
          recurse: true,
          destination: './jsdocs',
          template: 'node_modules/tui-jsdoc-template',
          package: 'package.json',
        },
        plugins: ['node_modules/jsdoc-babel', 'plugins/markdown'],
      })
      .dir(__dirname)
      .save()
    return this
  }
}

/**
 * @desc parses cli arguments to call methods
 * @example
 *  `node cli --pkg --docs --npm=build,test`
 */
new CLI().handle()
