<script setup>
import { ref } from 'vue';

const todos = ref([]);
const todo = ref('');

const addTodo = () => {
  todos.value.push(todo.value);
  todo.value = '';
};

const removeTodo = (todo) => {
  console.log('Remove', todo);
};
</script>

<template>
  <div class="w-4/5 mx-auto">
    <h1 class="text-3xl font-bold my-10">Todos ({{ todos.length }})</h1>
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
        <h2 class="text-xl font-bold my-4">Pending Todos</h2>
        <ul class="ml-8">
          <li
            class="list-decimal"
            :key="todo"
            v-for="todo in todos"
            @click="removeTodo"
          >
            {{ todo }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
