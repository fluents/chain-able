const {lstatSync, readdirSync} = require('fs')
const {join, resolve} = require('path')
const {rollup} = require('rollup')
const log = require('fliplog')
const createPlugins = require('./plugins')

const keys = Object.keys
const cwd = process.cwd()
const res = rel => resolve(__dirname, rel)
const ROOT = res('../')
const rez = rel => resolve(ROOT, rel)

const pkgJSON = require(join(cwd, 'package.json'))

let {version, rollup: rollupConfig = {}, dependencies = {}} = pkgJSON
const {bundledDependencies, moduleName} = rollupConfig
const bundleDeps = bundledDependencies || []

const createBundle = options => {
  const {exportName, format} = options

  // const filename = `${options.name}${options.env === 'production'
  //   ? '.min'
  //   : ''}.js`

  let filename = (exportName || pkgJSON[format] || format + '/index.js')
    .replace('dists/', '')

  if (!filename.endsWith('.js') || !filename.includes('/')) {
    filename += '/index.js'
  }

  const dest = rez(`dists/${filename}`)

  const bundleOptions = {
    dest,
    // indent: true,
    format,
    // globals: Object.assign(moduleGlobals, rollupConfig.moduleGlobals),
    moduleName,
    sourceMap: true,
  }
  if (format === 'amd') {
    options.moduleId = moduleName
  }
  log.data(bundleOptions).echo()

  // log.quick(bundleOptions)
  // if (options.format === 'cjs') bundleOptions.exports = 'named'

  return ({write}) => write(bundleOptions)
}

const createRollup = options => {
  const external = keys(dependencies).filter(n => !bundleDeps.includes(n))
  const plugins = createPlugins(version, options)
  const config = {
    entry: options.entry || join(cwd, 'dist/index.js'),
    external,
    onwarn(warning) {
      log.red(warning).echo()
    },
    plugins,
  }

  return rollup(config)
}

module.exports = {createRollup, createBundle}
