module.exports = {
  /**
   * @since 0.0.1
   * @tutorial https://github.com/babel
   * @param  {string} string code source
   * @param  {Object} [config=null] babel options
   * @return {string} transformed babel output
   */
  babel(string, config = null) {
    // return new Script().add().bin('babel').raw('src/ --out-dir dist').run()
    const babel = require('babel-core')
    // result = babel.transform(str, {allowReturnOutsideFunction: true});
    const parsedAst = babel.parse(string, {allowReturnOutsideFunction: true})
    const {code, map, ast} = babel.transformFromAst(parsedAst, string, config)
    return code
  },
}
