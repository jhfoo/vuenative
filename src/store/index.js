import Vue from 'nativescript-vue'
import Vuex from 'vuex'

import SideDrawer from './SideDrawer'

Vue.use(Vuex)

let debug = process.env.NODE_ENV !== 'production'

let store = new Vuex.Store({
    modules: {
        SideDrawer
    },
    strict: debug
})

Vue.prototype.$store = store

export default store