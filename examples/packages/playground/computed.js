chain
  .schema({
    id: 'number',
    name: 'string',
    status: '?string',
    roles: 'string[]',
    dates: {
      created: 'date',
      updated: 'date',
    },
    photo: {
      file: {
        name: '?string',
        size: 'number',
        type: ['image/jpeg', 'image/png'],
        thumbnail: '?url',
      },
    },
  })
  .computed('admin')
  .type('boolean')
  .use('roles, dates.created', entries => {
    const {roles, dates} = entries
    return roles.includes('admin') && dates.created.fromNow() > '1 minute'
  })
  // localstorage
  .storage({
    key: 'id + name',
  })
  .api(() => api.fetch('user', id))
  .save()

chain.hydrate()

class Todo extends Chain {
  toNumber() {}
}

class TodoStore extends Chain {
  todos = new ChainedSet(this)

  computedCount() {
    return this.todos.values().map(t => t.completed).reduce((sum, t) => t, 0)
  }

  addTodo = task => this.todos.add({task, completed: false, assignee: null})
}
