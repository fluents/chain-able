// @TODO use build script with .replace for each
module.exports =
  typeof process === 'object' &&
  typeof process.release === 'object' &&
  process.release.name === 'node'
