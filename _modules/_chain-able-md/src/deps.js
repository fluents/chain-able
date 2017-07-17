const {resolve} = require('path')
const {write} = require('flipfile')
const ConfigStore = require('configstore')
const log = require('fliplog')

const store = new ConfigStore('awesome-markdown')

function isNum(x) {
  if (typeof x === 'number') return true
  if (/^0x[0-9a-f]+$/i.test(x) === true) return true
  return (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(x)
}

const onlyLettersAndSpaces = /^([\sa-z]+)*$/gim
const indent = (str, num = 0) => {
  if (num === 0) return str
  return ' '.repeat(num * 2) + str
}
const occurrs = (haystack, needle) => haystack.split(needle).length - 1
const root = resolve(__dirname, '../')
const res = rel => resolve(root, rel)

module.exports = {
  store,
  log,
  isNum,
  indent,
  occurrs,
  write,
  resolve: res,
}
