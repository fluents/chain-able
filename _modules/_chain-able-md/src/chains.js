const Chainable = require('../../../')

const {toArr} = Chainable

// uses this._tasks instead of store so it is not an entry
class QueueChain extends Chainable {
  constructor(parent) {
    super(parent)
    this.task(new Promise(r => setTimeout(r, 100)))
  }
  onComplete(cb) {
    Promise.all(this._tasks).then(data => cb(data))
    return this
  }
  tasks() {
    return Promise.all(this._tasks)
  }
  task(task = null) {
    const tasks = this._tasks || []
    const all = tasks.concat(toArr(task))

    // if (task === null) return all
    this._tasks = all
    return this
  }
}

Chainable.QueueChain = QueueChain

module.exports = Chainable
