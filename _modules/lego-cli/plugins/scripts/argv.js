const argvs = fwf(process.argv.slice(2))

/**
 * http://blog.millermedeiros.com/inline-docs/
 * http://dailyjs.com/post/framework-part-46
 * https://documentjs.com/docs/index.html (too old)
 *
 * @see https://github.com/yeoman/generator/blob/master/jsdoc.json
 * @desc takes in argv, calls method on CLI
 * @param  {AppCli} cli
 * @return {void}
 * @type {Function}
 */
function handle(cli) {
  log.registerCatch()

  delete argvs._

  const argv = Object.values(argvs)
  const argk = Object.keys(argvs)

  log.emoji('flag').cyan('argv/flags:').data(argvs).echo()

  argk.forEach((method, i) => {
    const val = argv[i]
    log.emoji('phone').blue('cli: ' + method).data(val).echo(true)

    if (cli[method]) {
      cli[method](val, argvs)
    }
    else {
      log.emoji('find').blue('no method for: ' + method).data(val).echo(true)
    }
  })
}




// --- docs ---




/**
 * @since 0.0.1
 * @return {AppCli} @chainable
 */
handle() {
  handle(this)
  return this
}
