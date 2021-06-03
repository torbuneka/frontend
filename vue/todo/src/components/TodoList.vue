<template>
    <div>
        <button v-on:click="$emit('create-task')">Create task</button>
        <h3>Active tasks</h3>
        <ul>
            <TodoItem 
            v-for="todo in todos" 
             :todo="todo" :key="todo.id"
             v-show="todo.completed==false"
             v-on:remove-todo="removeTodo"
             v-on:check-todo="checkTodo"
             v-on:rename-todo="renameTodo"
            />
        </ul>
        <h3>Completed Tasks</h3>
        <ul>
            <TodoItem 
            v-for="todo in todos" 
             :todo="todo" :key="todo.id"
             v-show="todo.completed==true"
             v-on:remove-todo="removeTodo"
             v-on:check-todo="checkTodo"
            v-on:rename-todo="renameTodo"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default{
    props: ['todos'],
    components: {
    TodoItem
  },
  methods: {
      removeTodo(id) {
        this.$emit('remove-todo', id)
      },
      checkTodo(id) {
        this.$emit('check-todo', id)
      },
      renameTodo([id, title, sequence, completed]){
          this.$emit('rename-todo', [id, title, sequence, completed])
      }
  }
}
</script>

<style scoped>
    ul{
        list-style: none;
        margin-left: 20%;
        margin-right: 20%;
    }
    button{
        background-color: green;
        height: 40px;
        width: 150px;
    }
</style>
