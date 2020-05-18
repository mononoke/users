export default state => id => {
    return state.todos[id] || 1
}
