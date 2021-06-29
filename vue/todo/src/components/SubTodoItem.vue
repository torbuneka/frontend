<template>
    <li> 
        <span v-bind:class="{done: subtodo.completed}">
            <input type="checkbox" :value="subtodo.completed" :disabled="subtodo.completed" :checked="subtodo.completed" v-on:click="$emit('check-subtodo', [subtodo.id, subtodo.title, subtodo.sequence, subtodo.completed])" > 
            <input type="text" :disabled="subtodo.completed" v-model.lazy="subtodo.title" class="form-control" >
            <button v-if="subtodo.completed" v-on:click="$emit('check-subtodo', [subtodo.id, subtodo.title, subtodo.sequence, subtodo.completed])">restore</button>
            <button v-if="!subtodo.completed" v-on:click=" $emit('rename-subtodo', [subtodo.id, subtodo.title, subtodo.sequence, subtodo.completed])">save changes</button>
            <button class='delete' v-if="!subtodo.completed" v-on:click="$emit('remove-subtodo', subtodo.id)" >delete</button>
        </span>
    </li>
</template>

<script>

export default {
    props: ['subtodo']
}
</script>

<style scoped>
    li {
        border: 2px solid black;
        display:flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
        margin-left: 30px;
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