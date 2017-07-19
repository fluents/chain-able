module.exports = {
  ts(TSC_SOURCE, TSC_OUT) {
    const {read, write} = this.dep()
    const ts = require('typescript')
    const source = read(TSC_SOURCE)

    let result = ts.transpileModule(source, {
      compilerOptions: {module: ts.ModuleKind.CommonJS},
    })
    write(require.resolve(TSC_OUT), result.outputText)

    console.log(JSON.stringify(result))
    process.exit()
  },
  tsc(buildTests = false) {
    const {script} = this.dep()

    if (buildTests) {
      const flags =
        '--pretty --sourceMap --allowJs --project test --outDir test-dist'
      return script('tsc', flags)
    }
    return script('tsc')
  },
}
