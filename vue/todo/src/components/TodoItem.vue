<template>
    <li> 
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" :value="todo.completed" :disabled="todo.completed" :checked="todo.completed" v-on:click="$emit('check-todo', [todo.id, todo.title, todo.sequence, todo.completed])" > 
            <input type="text" :disabled="todo.completed" v-model=todo.title class="form-control" >
            <button v-if="todo.completed" v-on:click="$emit('check-todo', [todo.id, todo.title, todo.sequence, todo.completed])">restore</button>
            <!---<button v-if="!todo.completed && onEdit == false" v-on:click="onEdit=!onEdit">edit</button>
            <button v-if="!todo.completed && onEdit == true" v-on:click="onEdit=!onEdit && $emit('rename-todo', [todo.id, todo.title, todo.sequence, todo.completed])">save</button>--->
            <button class='delete' v-if="!todo.completed" v-on:click="$emit('remove-todo', todo.id)" >delete</button>
        </span>
    </li>
</template>

<script>

export default {
    props: ['todo'],
    data(){
        return {
            onEdit: false
        }
    }
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