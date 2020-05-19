<template lang="pug">
    div.home
        div.home__field(@click="openUsers") Users
        RouterView
</template>

<script>
export default {
    name: "Home",
    methods: {
        openUsers() {
            this.$router.push({
                name: 'users'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.home
    padding 15px

.home__field
    padding 15px
    font-size 30px
    text-transform uppercase
    box-shadow 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
    cursor pointer
</style>
