const ConfigStore = require('configstore')
const {read, write, exists} = require('flipfile')
const _res = require('./_res')
const del = require('./_delete')

const res = _res(__dirname)

const path = res('../fromTo.json')
const defaultCopied = {
  /* ['absFrom']: 'absTo' */
}
const store = new ConfigStore('easy-exports', {copied: defaultCopied})

// put in store instead
const fromTo = {
  path,
}

// @TODO file-chain here
fromTo.read = () => {
  if (exists(path)) fromTo.data = read.json(path)
  else fromTo.data = {}

  return fromTo
}
fromTo.write = () => {
  const string = JSON.stringify(fromTo.data, null, 2)
  write(path, string)
  return fromTo
}
fromTo.del = () => {
  del(path)
  return fromTo
}
fromTo.values = () => Object.values(fromTo.data)
fromTo.keys = () => Object.keys(fromTo.data)

fromTo.read()

if (process.env.DEBUG) {
  fromTo.folder = res('../FAKEROOT')
}
else {
  fromTo.folder = res('../../')
}

module.exports = fromTo
