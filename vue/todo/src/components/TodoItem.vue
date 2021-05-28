<template>
    <li> 
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" :value="todo.completed"  :checked="todo.completed" v-on:change="todo.completed = !todo.completed" > 
            <input type="text" :value="todo.title" :disabled="todo.completed == true">
            <button>edit</button>
            <button class='delete' v-on:click="$emit('remove-todo', todo.id)">delete</button>
        </span>
    </li>
</template>

<script>

export default {
    props: ['todo']
}
</script>

<style scoped>
    li {
        border: 2px solid black;
        display:flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .delete{
        color: red;
    }
    button {
         text-decoration: underline
    }
    .done{
        text-decoration: line-through;
        color:grey
    }
</style>