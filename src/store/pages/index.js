import Vue from "vue"
import Vuex from "vuex"

import _getters_getMainPage from './_getters/getMainPage'
import _getters_getTodoPageByUserId from './_getters/getTodoPageByUserId'

import _mutations_setMainPage from './_mutations/setMainPage'
import _mutations_setTodoPage from './_mutations/setTodoPage'

import _actions_setMainPage from './_actions/setMainPage'
import _actions_setTodoPage from './_actions/setTodoPage'

import state from "./state"

Vue.use(Vuex)

export default {
    namespaced: true,
    state: state,
    getters: {
        getMainPage: _getters_getMainPage,
        getTodoPageByUserId: _getters_getTodoPageByUserId
    },
    mutations: {
        setMainPage: _mutations_setMainPage,
        setTodoPage: _mutations_setTodoPage
    },
    actions: {
        setMainPage: _actions_setMainPage,
        setTodoPage: _actions_setTodoPage
    }
}
