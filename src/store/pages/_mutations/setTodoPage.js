import Vue from 'vue'
export default function(state, {userId, page}) {
    Vue.set(state.todos, userId, page)
}
