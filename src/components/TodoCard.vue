<template lang="pug">
    div.todo-card
        div {{todo.id}}
        div.todo-card__title {{todo.title}}
        div.todo-card__status(:class="{'todo-card__status_completed': todo.completed}") {{todo.completed ? 'Completed' : 'Not completed'}}
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.todo-card
    display flex
    flex-direction row
    align-items center
    padding 15px
    box-shadow 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)

.todo-card__title
    flex-grow 1
    margin 0 15px
    font-size 20px

.todo-card__status
    color red
    &.todo-card__status_completed
        color green
</style>

