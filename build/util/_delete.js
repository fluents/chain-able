const {unlinkSync, rmdirSync} = require('fs')

/**
 * @TODO: use trash
 * @see http://stackoverflow.com/questions/8496212/node-js-fs-unlink-function-causes-eperm-error/20920795
 * @description delete a file
 * @since 0.0.1
 * @param  {String}  path          abs path
 * @param  {Boolean} [debug=false] log failures
 * @return {Boolean}               successful or fail
 */
function del(path, debug = false) {
  try {
    unlinkSync(path)
  }
  catch (fileErr) {
    try {
      rmdirSync(path)
    }
    catch (dirError) {
      try {
        const rimraf = require('rimraf')
        rimraf.sync(path)
        return true
      }
      catch (rimrafError) {
        if (debug === true) console.log({rimrafError, path})
      }

      if (debug === true) console.log({fileErr, path})
      if (debug === true) console.log({dirError, path})
      // ignore
      return false
    }

    if (debug === true) console.log({fileErr, path})
    // ignore
    return false
  }
  return true
}

module.exports = del
