<template lang="pug">
    div.users
        UserCard
</template>

<script>
// @ is an alias to /src
import UserCard from '@/components/UserCard.vue'

export default {
    name: 'Home',
    components: {
        UserCard
    },
    data: () => {
        return {
            error: ''
        }
    },
    mounted() {
        let address = 'https://jsonplaceholder.typicode.com/users?_page=1&_limit=5'
        const xhr = new XMLHttpRequest()

        xhr.open("GET", address, true)
        xhr.send()

        xhr.onreadystatechange = () => {
            console.log('readyState', xhr.readyState, xhr.status)
            if (xhr.readyState !== 4) {
                return
            }

            if (xhr.status !== 200) {
                this.error = xhr.status + ': ' + xhr.statusText
                return
            }

            let users = JSON.parse(xhr.responseText)
            console.log('users', users)
        }

    }
}
</script>

<style lang="stylus" scoped>
.users
    height 100vh
    width 100vw
    padding 15px
    box-sizing border-box
</style>
