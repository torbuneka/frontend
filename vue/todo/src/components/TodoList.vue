<template>
    <div>
        <button v-on:click="$emit('create-task')">Create task</button>
        <ul>
            <TodoItem 
            v-for="todo in todos" 
             :todo="todo" :key="todo.id"
             v-on:remove-todo="removeTodo"
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
