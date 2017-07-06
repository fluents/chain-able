var {resolve} = require('path')
var jetpack = require('fs-jetpack')
var {read} = require('flipfile')
var log = require('fliplog')

var res = rel => resolve(process.cwd(), rel)
var dir = rel => resolve(__dirname, rel)

// eslint-disable-next-line
var {version} = require(res('package.json'))

var dev = res('dists/dev')
var devIndex = res('dists/dev/index.js')
var currentVersionFolder = dir('./' + version)

var semverToInt = x =>
  Number(x.replace(/[.]/, '').replace(/alpha|beta/, 1).replace(/-/, ''))

// already are sorted
// var sorted = folders.sort((a, b) => semverToInt(a) > semverToInt(b))
// console.log(sorted)

var copied = jetpack.copy(dev, currentVersionFolder, {
  matching: ['*.js'],
  overwrite: true,
})
var folders = jetpack.list(__dirname).filter(f => !f.includes('index.js'))
var latestVersionFolder = folders[folders.length - 1]
var previousVersionFolder = folders[folders.length - 2]
var previousFile = dir(previousVersionFolder + '/index.js')
var previous = read(previousFile)
var current = read(devIndex)

log.diff(previous)
log.diff(current)
log.echo()
