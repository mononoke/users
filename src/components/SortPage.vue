<template lang="pug">
    div.sort-page
        div.sort-page__header
            slot(name="header")
        div.sort-page__body
            slot(name="body")
        div.sort-page__pages(v-if="pages.length > 1")
            div.sort-page__page(v-for="page in pages" :key="page" :class="{'sort-page__page_active': page === currentPage}" @click="changePage(page)") {{page}}
</template>

<script>
import getPages from '@/assets/getPages'

export default {
    model: {
        prop: 'currentPage',
        event: 'change'
    },
    props: {
        number: {
            type: Number,
            default: 1
        },
        limit: {
            type: Number,
            default: 1
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    computed: {
        pages() {
            return getPages(this.number, this.limit, this.currentPage)
        }
    },
    methods: {
        changePage(page) {
            this.$emit('change', page)
        }
    }
}
</script>

<style lang="stylus" scoped>
.sort-page
    display flex
    flex-direction column
    height 100vh
    width 100vw
    padding 15px
    box-sizing border-box

.sort-page__body
    flex-grow 1

.sort-page__pages
    display flex
    flex-direction row
    justify-content center
    padding 5px 0

.sort-page__page
    padding 8px
    taxt-align center
    font-weight bold
    font-size 18px
    cursor pointer
    &.sort-page__page_active
        background-color wheat
</style>
