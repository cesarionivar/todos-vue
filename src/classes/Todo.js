class Todo {
  constructor(todo) {
    this.todo = {
      id: Date.now(),
      desc: todo,
      completed: false,
    };

    return this.todo;
  }
}

export default Todo;
