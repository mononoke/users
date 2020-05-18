<template lang="pug">
    SortPage(:number="todos.length" :limit="limit" v-model="page")
        div(slot="header")
            GoBack(text="Back to users list" :callback="goBackFunc")
            div.todo__user-name {{userName}}
        div(slot="body")
            TodoCard.todo(v-for="todo in todosOnPage" :key="todo.id" :todo="todo")
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import SortPage from '@/components/SortPage'
import GoBack from '@/components/GoBack'
import TodoCard from '@/components/TodoCard'

export default {
    name: "Todo",
    components: {
        SortPage,
        GoBack,
        TodoCard
    },
    data: () => {
        return {
            userId: '',
            userName: '',
            error: '',
            page: 1,
            limit: 2,
            todos: []
        }
    },
    computed: {
        ...mapGetters('pages', ['getTodoPageByUserId']),
        goBackFunc() {
            return () => {
                this.$router.push({
                    name: 'users'
                })
            }
        },
        todosOnPage() {
            return this.todos.filter((t, i) => i <= this.limit * this.page - 1 && i >= this.limit * (this.page - 1))
        }
    },
    watch: {
        page(to) {
            this.setTodoPage({userId: this.userId, page: to})
        }
    },
    created() {
        const user = this.$route.params.user.split('_')
        this.userName = user[1]
        this.userId = user[0]
        this.page = this.getTodoPageByUserId(user[0])
        this.getTodos(user[0])
    },
    methods: {
        ...mapActions('pages', ['setTodoPage']),
        // getUser(userId) {
        //     let address = `https://jsonplaceholder.typicode.com/users?id=${userId}`
        //     const xhr = new XMLHttpRequest()
        //
        //     xhr.open("GET", address, true)
        //     xhr.send()
        //
        //     xhr.onreadystatechange = () => {
        //         if (xhr.readyState !== 4) {
        //             return
        //         }
        //
        //         if (xhr.status !== 200) {
        //             this.error = xhr.status + ': ' + xhr.statusText
        //             return
        //         }
        //
        //         let user = JSON.parse(xhr.responseText)
        //         console.log(user)
        //     }
        // },
        getTodos(userId) {
            let address = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
            const xhr = new XMLHttpRequest()

            xhr.open("GET", address, true)
            xhr.send()

            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) {
                    return
                }

                if (xhr.status !== 200) {
                    this.error = xhr.status + ': ' + xhr.statusText
                    return
                }

                this.todos = JSON.parse(xhr.responseText)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.todo__user-name
    text-align center
    font-size 20px

.todo
    margin 10px 0
</style>
