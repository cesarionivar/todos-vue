<script setup>
import { ref } from 'vue';
import TodoList from './classes/TodoList';

const todoList = new TodoList();
const todos = ref(todoList.getInitialTodos());
const todo = ref('');

const addTodo = () => {
  if (todo.value === '') return null;
  todoList.addTodo(todo.value);
  todo.value = '';
};

const removeTodo = (id) => {
  todos.value = todoList.removeTodo(id);
};

const markAsCompleted = (id) => {
  todos.value = todoList.markAsCompleted(id);
};

const pendingTodos = () => {
  return todos.value.filter((todo) => !todo.completed).length;
};
</script>

<template>
  <div class="w-4/5 mx-auto">
    <h1 class="text-3xl font-bold my-10">Todos</h1>
    <section>
      <form>
        <input
          class="p-2 border-2 sm:w-64"
          type="text"
          name="todo"
          id="todo"
          placeholder="Add a todo"
          v-model="todo"
        />
        <button
          class="border-2 p-2 bg-blue-900 text-white"
          @click.prevent="addTodo"
        >
          Add todo
        </button>
      </form>
      <div class="flex flex-col">
        <h2 class="text-xl font-bold my-4">
          Pending Todos ({{ pendingTodos() }})
        </h2>
        <ul class="ml-8">
          <li
            v-for="todo in todos"
            :class="[
              todo.completed ? 'line-through' : '',
              'list-decimal',
              'cursor-pointer',
              'select-none',
            ]"
            :key="todo"
            @click="markAsCompleted(todo.id)"
            @dblclick="removeTodo(todo.id)"
          >
            {{ todo.desc }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
