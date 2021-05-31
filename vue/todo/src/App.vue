<template>
  <div id="app">
    <h1>Todo list</h1>
    <TodoList 
      v-bind:todos="todos"
      @remove-todo="removeTodo"
      v-on:create-task="createTask"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import axios from 'axios'

export default {
  name: 'App',
  
  data() {
    return {
      todos: [
      {id: 1, completed: false, title: 'Task 1', sequence: 1 },
      {id: 2, completed: false, title: 'Task 2', sequence: 2 },
      {id: 3, completed: false, title: 'Task 3', sequence: 3 },
      {id: 4, completed: false, title: 'Task 4', sequence: 4 },
      {id: 5, completed: false, title: 'Task 5', sequence: 5 },
      {id: 6, completed: true, title: 'Task 6', sequence: 6 }]
    }
  },
  mounted() {
    /*fetch("http://185.246.66.84:3000/etorbunova/tasks")
    .then(response => response.json())
    .then(json => {this.todos = json})*/
    axios.get("http://185.246.66.84:3000/etorbunova/tasks")
    .then(response => (this.todos = response.data));
  },


  components: {
    TodoList
  },
  methods: {
    removeTodo(id) {
      /*this.todos = this.todos.filter(t => t.id !== id)*/
      axios.delete("http://185.246.66.84:3000/etorbunova/tasks/" + id)
      .then(() => {this.todos = this.todos.filter(t => t.id !== id)})
    },
    createTask() {
      const newtodo = {
        completed: false,
        title: this.todos.length === 0 ? "Task 1" : "Task " + (this.todos.length + 1),
        sequence: 1
      }
      axios.post("http://185.246.66.84:3000/etorbunova/tasks", newtodo)
      .then(response => {this.todos = [...this.todos, response.data]})
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
