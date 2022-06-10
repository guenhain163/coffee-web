import Vuex from 'vuex'
import Vue from 'vue'
import userModule from './user'

Vue.use(Vuex)


export const store = new Vuex.Store({
    modules: {
        'user': userModule
    }
})