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
    padding 5px
    cursor pointer
</style>
