<template lang="pug">
    SortPage(:number="numberOfUsers" :limit="5" v-model="page")
        div.users__list-container(slot="body")
            table.users__list
                thead
                    tr
                        th(v-for="name in columnsName" :key="name") {{name}}
                tbody
                    tr(v-for="user in users" :key="user.id")
                        td.users__name(@click="openUserPage(user)") {{user.name}}
                        td {{user.email}}
                        td {{user.phone}}

        div.users__pages
            div 1

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
const columnsName = ['name', 'phone', 'email']
import SortPage from '@/components/SortPage'

export default {
    name: 'Users',
    components: {
        SortPage
    },
    data: () => {
        return {
            columnsName,
            error: '',
            page: 0,
            numberOfUsers: 0,
            users: []
        }
    },
    computed: {
        ...mapGetters('pages', ['getMainPage'])
    },
    watch: {
        page(to) {
            this.setMainPage({page: to})
        },
        getMainPage: {
            immediate: true,
            handler(to) {
                this.page = to
                this.getUsers(to)
            }
        }
    },
    methods: {
        ...mapActions('pages', ['setMainPage']),
        getUsers(page) {
            let address = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
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

                this.users = JSON.parse(xhr.responseText)
                this.numberOfUsers = Number(xhr.getResponseHeader('x-total-count'))
            }
        },
        openUserPage(user) {
            this.$router.push({
                name: "todo",
                params: {
                    userName: user.name,
                    user: `${user.id}_${user.name}`
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.users__list-container
    flex-grow 1
    margin 10px 0

.users__list
    width 100%
    border-collapse collapse

.users__name
    cursor pointer
    &:hover
        outline 2px solid rgba(60,64,67,.15)

.users__list th
    border 1px solid #e0e0e0
    text-align left
    padding 5px
    color #727272

.users__list td
    padding 5px
    border 1px solid #e0e0e0
    color #636363
</style>
