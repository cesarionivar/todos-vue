import Todo from './Todo';

class TodoList {
  constructor() {
    this.getInitialTodos();
  }

  addTodo(todo) {
    this.todos.unshift(new Todo(todo));
    this.saveInLocalStorage(this.todos);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveInLocalStorage(this.todos);
    return this.todos;
  }

  markAsCompleted(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.saveInLocalStorage(this.todos);
    return this.todos;
  }

  getInitialTodos() {
    this.todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];

    return this.todos;
  }

  saveInLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

export default TodoList;
