const {execSync} = require('child_process')
const {log, store} = require('./deps')

// @TODO cache until outdated
// const packageJson = require('package-json')
const packageJson = pkg => {
  const results = execSync('npm view ' + pkg)
    .toString()
    .trim()
    .split('\n')
    .map(line => {
      if (line.includes('...') && line.includes('more items')) {
        return `'fake-for-valid-js'],`
      }
      return line
    })
    .join('\n')

  try {
    const evaled = new Function('return' + results)()
    return evaled

    // const parsed = JSON.parse(results)
    // return parsed
  }
  catch (e) {
    log.green(results).echo()
    log.catch(e)
    return results
  }
  return results
}
const pkgDesc = name => {
  const key = 'npm.data.' + name

  // check store
  if (store.has(key)) {
    const {description} = store.get(key)

    log
      .blue('using pkg from store, ' + name)
      .data({key, path: store.path, description})
      .echo()

    return description
  }

  // fetch
  log.blue('fetching pkg description for ' + name).echo()
  const pkg = packageJson(name)

  // save in store
  store.set(key, pkg)

  return pkg.description
}

module.exports = {pkgDesc, packageJson}
