module.exports = {
  /**
   * @since 0.0.1
   * @tutorial https://github.com/prettier/prettier
   * @param  {string} code
   * @param  {Object} [config=null] prettier options
   * @return {string} prettified output
   */
  prettier(code, config = null) {
    const prettier = require('prettier')

    return prettier.format(code, {
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
  },
}
