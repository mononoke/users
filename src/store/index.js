import Vue from 'vue'
import Vuex from 'vuex'

import _modules_pages from "./pages"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        pages: _modules_pages
    }
})
