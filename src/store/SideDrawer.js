const state = {
    // this toggles the sidedrawer
    isShow: false
}

const mutations = {
    // always and only change vuex state through mutations.
    isShow(state, data) {
        state.isShow = data
    }
}

const getters = {
    // the 'sideDrawer' getter will be available to listen to on the front end.
    // this is the change that we're watching in /app/mixins/sideDrawer.js
    isShow: (state) => state.isShow
}

// export this module.
export default {
    state,
    mutations,
    getters
}