export default function({commit}, {userId, page}) {
    commit('setTodoPage', {userId, page})
}
