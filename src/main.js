import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import Routes from './routes'
import Main from "./components/Main";
import SideDrawer from "./components/SideDrawer";
import store from '~/store'

// if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.prototype.$routes = Routes

new Vue({
    store,
    render(h) {
        return h(
            Main,
            [
                h(SideDrawer, {
                    slot: 'drawerContent'
                }),
                h(Routes.HelloWorld, {
                    slot: 'mainContent'
                })
            ]
        )
    }
}).$start();

