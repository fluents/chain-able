const {Chain, eq} = require('chain-able')

const last = arr => arr.slice(0).pop()

class TodoStore extends Chain {
  constructor(parent) {
    super(parent)

    this.set('todos', [])
      .methods(['completed', 'pending', 'total'])
      .autoIncrement()
      .build()
      .observe('todos', ({todos}) => {
        this.total(+1)
        if (last(todos).completed) this.completed(+1)
        else this.pending(+1)
      })
  }

  // is verbose for clarification, could just
  // return this.merge('todos', [{task, completed}])
  add(task, completed = false) {
    const todo = {task, completed}
    const todos = this.get('todos').concat([todo])
    return this.set('todos', todos)
  }
}

const chain = new TodoStore()
chain.add({eh: true}).add({moose: 'eh!'}, true)

const entries = chain.entries()
const expected = {
  todos: [
    {task: {eh: true}, completed: false},
    {task: {moose: 'eh!'}, completed: true},
  ],
  completed: 1,
  pending: 2,
  total: 3,
}

eq(entries, expected)
//=> true
