const {mkdir} = require('fs')
const {join} = require('path')
const log = require('fliplog')
const fwf = require('funwithflags')

const cwd = process.cwd()
const pkgJSON = require(join(cwd, 'package.json'))

if (pkgJSON.private || !pkgJSON.rollup) {
  return
}

// "build:typings": "tsc && lerna exec -- node ../../scripts/typings/build.js",
// "build:es": "npm run rollup -- --format=es --optimize=false --name=index.es --uglify=false",
// "build:node": "npm run rollup -- --format=cjs --replace=false --name=index --uglify=false",
// "build:umd:dev": "npm run rollup -- --uglify=false",
// "build:umd:prod": "npm run rollup -- --env=production",
module.exports = overrides => {
  const options = fwf(process.argv.slice(0), {
    boolean: [
      'replace',
      'optimize',
      'uglify',
      'sourceMaps',
      'tsc',
      'production',
    ],
    string: ['format', 'entry', 'dest'],
    default: {
      dest: false,
      entry: false,
      env: 'development',
      format: 'umd', //  'amd', 'iife', 'dev', 'es'
      optimize: true,
      replace: true,
      uglify: true,
      tsc: false,
      production: true,
      name: pkgJSON.name,
      version: pkgJSON.version,
    },
  })
  Object.assign(options, overrides)
  log.data(overrides).echo()

  const {createRollup, createBundle} = require('./bundle')

  const rollup = createRollup(options)
  const bundle = createBundle(options)

  return rollup
    .catch()
    .then(bundle)
    .then(() => {
      console.log(`✅ ${pkgJSON.name}`)
    })
    .catch(error => {
      console.error(
        `${pkgJSON.name} in ${options.format} is FAILED ${error.message}`
      )
      log.catch(error)
    })
}
