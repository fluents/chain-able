const {Chain, toArr, compose} = require('../src')

class Winning {}
class Yes extends compose(Winning) {
  get winning() {
    return true
  }
}
const yes = new Yes()
console.log(yes instanceof Winning, yes.winning)

class ChainInc extends Chain {
  getSetIncrement(names) {
    toArr(names).map(name =>
      this.set(name, 0).extendGetSet([
        {
          set: () => this.tap(name, x => x + 1),
          name,
        },
      ])
    )

    return this
  }
}

const last = arr => arr.slice(0).pop()
class TodoStore extends ChainInc {
  constructor(parent) {
    super(parent)

    this.set('todos', [])
      .getSetIncrement(['completed', 'pending', 'total'])
      .transform('todos', todos => {
        this.total(+1) && last(todos).completed
          ? this.completed(+1)
          : this.pending(+1)

        return todos
      })
  }

  add(task, completed = false) {
    const todo = {task, completed, assignee: null}
    const todos = this.get('todos').concat([todo])
    return this.set('todos', todos)
  }
}

const store = new TodoStore()
// console.log(store())
console.log(store)
