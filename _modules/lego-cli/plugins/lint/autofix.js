const {resolve} = require('path')
const {read, write, isDir} = require('flipfile')
const globby = require('globby')
const log = require('fliplog')

class CLI {
  constructor(dir) {
    this.dir = dir
  }

  find(pattern = ['src/**/*.js', '!node_modules']) {
    this.found = globby.sync(pattern, {
      cwd: this.dir,
      absolute: true,
    })
    return this.found
  }

  mapFiles() {
    const mapped = this.found
      .map(abs => {
        if (isDir(abs)) return null
        return {
          source: read(abs),
          filename: abs,
        }
      })
      .filter(file => file)
      .map(file => ({source: this.prettier(file), abs: file.abs}))
      .map(file => this.eslint(file))
    log.quick(mapped)
  }

  eslint(file, config = require('../../.eslintrc.js')) {
    const {source, filename} = file
    const eslint = require('eslint')
    const {linter} = eslint

    const colored = log.colored(source, 'cyan')
    log.cyan('before\n').data(colored).echo() // "var foo = bar;"

    const messages = linter.verify(source, config, {filename})
    const code = linter.getSourceCode()

    log.yellow('messages').data(messages).echo()
    if (!code || !code.text) {
      log.red('could not handle this file ').data({filename}).echo()
      return source
    }
    // log.yellow('code').fmtobj(code).echo()
    log.blue(code.text).echo() // "var foo = bar;"
    return code.text
  }

  /**
   * @since 0.0.1
   * @tutorial https://github.com/prettier/prettier
   * @param  {string} code
   * @param  {Object} [config=null] prettier options
   * @return {string} prettified output
   */
  prettier(file, config = null) {
    const {filename, source} = file
    const prettier = require('prettier')

    return prettier.format(source, {
      // Indent lines with tabs
      useTabs: false,

      // Fit code within this line limit
      printWidth: 80,

      // Number of spaces it should use per tab
      tabWidth: 2,

      // If true, will use single instead of double quotes
      singleQuote: true,

      // Controls the printing of trailing commas wherever possible. Valid options:
      // "none" - No trailing commas
      // "es5"  - Trailing commas where valid in ES5 (objects, arrays, etc)
      // "all"  - Trailing commas wherever possible (function arguments)
      trailingComma: 'es5',

      // Controls the printing of spaces inside object literals
      bracketSpacing: true,

      // If true, puts the `>` of a multi-line jsx element at the end of
      // the last line instead of being alone on the next line
      jsxBracketSameLine: false,

      // Which parser to use. Valid options are "flow" and "babylon"
      parser: 'babylon',

      // Whether to add a semicolon at the end of every line (semi: true),
      // or only at the beginning of lines that may introduce ASI failures (semi: false)
      semi: false,
    })
  }
}

const cli = new CLI(resolve('../../'))
cli.find()
cli.mapFiles()
