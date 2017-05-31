const traverse = require('./traverse')
const {EventEmitter} = require('events')

const toArr = name => (Array.isArray(name) ? name : [name])
const dev = process.NODE_ENV !== 'production'

module.exports = Chainsaw

/**
 * @prop {Function} chain
 * @prop {Function} trap
 * @prop {Function} pop (is also overriden in upgradeChainsaw)
 * @prop {Function} next
 * @prop {Function} record
 * @prop {Function} trap
 * @prop {Function} down
 * @prop {Function} jump
 *
 * @see saw.chain, saw.record
 * @param {Function | Class} builder
 * @return {Function | any}
 */
function Chainsaw(builder) {
  var saw = Chainsaw.saw(builder, {})
  var r = builder.call(saw.handlers, saw)
  if (r !== undefined) saw.handlers = r
  saw.record()
  return saw.chain()
}

Chainsaw.saw = function(builder, handlers) {
  var saw = new EventEmitter()
  saw.handlers = handlers
  saw.actions = []

  saw.chain = function() {
    var ch = traverse(saw.handlers).map(function(node) {
      if (this.isRoot) return node
      var ps = this.path

      if (typeof node === 'function') {
        if (dev) console.log('update!', ps)

        this.update((a, b, c, d, e) => {
          saw.actions.push({
            path: ps,
            args: [a, b, c, d, e].filter(arg => arg),
          })
          return ch
        })
      }
    })

    ch.begin = () => {
      saw.emit('begin')
      saw.next()
      console.log('began', ch)
      return ch
    }
    // process.nextTick(() => {
    //   saw.emit('begin')
    //   saw.next()
    // })

    return ch
  }

  saw.pop = () => saw.actions.shift()

  saw.next = function() {
    var action = saw.pop()

    if (!action) {
      saw.emit('end')
    }
    else if (!action.trap) {
      var node = saw.handlers
      action.path.forEach(key => (node = node[key]))
      node.apply(saw.handlers, action.args)
    }
  }

  saw.nest = function(fn) {
    // change from arguments
    var cb = fn
    var autonext = true
    var args = []
    for (var i = 1, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }

    if (typeof cb === 'boolean') {
      autonext = cb
      cb = args.shift()
    }

    var s = Chainsaw.saw(builder, {})
    var r = builder.call(s.handlers, s)

    if (r !== undefined) s.handlers = r

    // If we are recording...
    if (typeof saw.step !== 'undefined') {
      // ... our children should, too
      s.record()
    }

    cb.apply(s.chain(), args)
    if (autonext !== false) s.on('end', saw.next)
  }

  saw.record = () => upgradeChainsaw(saw)

  if (dev) {
    ['trap', 'down', 'jump'].forEach(method => {
      saw[method] = function() {
        throw new Error(
          `To use the trap, down & jump features, please
          call record() first to start recording actions.`
        )
      }
    })
  }

  return saw
}

function upgradeChainsaw(saw) {
  saw.step = 0

  /**
   * @see saw.actions, saw.step
   * @override pop
   * @return {any}
   */
  saw.pop = () => saw.actions[saw.step++]

  /**
   * @param  {Array<string> | string} name
   * @param {Function} cb
   */
  saw.trap = function(name, cb) {
    if (dev) console.log('trap!', name)

    saw.actions.push({
      path: toArr(name),
      step: saw.step,
      cb,
      trap: true,
    })
  }

  /**
   * @desc slice actions starting from current step
   *       map actions
   *         remove traps
   *         return paths
   *       increment step by indexOf(true)
   * @param  {Array<string> | string} name
   */
  saw.down = name => {
    if (dev) console.log('down!', name)

    var ps = toArr(name).join('/')
    var i = saw.actions
      .slice(saw.step)
      .map(x => {
        if (x.trap && x.step <= saw.step) return false
        return x.path.join('/') == ps
      })
      .indexOf(true)

    if (i >= 0) saw.step += i
    else saw.step = saw.actions.length

    var act = saw.actions[saw.step - 1]
    if (act && act.trap) {
      // It's a trap!
      saw.step = act.step
      act.cb()
    }
    else saw.next()
  }

  saw.jump = step => {
    if (dev) console.log('jump!')

    saw.step = step
    saw.next()
  }
}
