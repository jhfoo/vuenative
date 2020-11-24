export default {
    data() {
        return {
            // we'll use this to enable gestures on our sideDrawer.
            gesturesEnabled: false
        }
    },
    computed: {
        // drawerElement points to the drawer node using vue $refs
        drawerElement() { return (this.$refs && this.$refs.drawer) || null },
        // drawer is responsible for getting and setting the sideDrawer property in vuex state.
        drawer: {
            get() {
                return this.$store.getters.isShow
            },
            set(v) { return this.$store.commit('isShow', v) }
        }
    },
    watch: {
        // we watch the drawer prop for changes and open/close the sideDrawer accordingly
        drawer(v) {
            if (this.drawerElement) {
                return v ?
                    this.drawerElement.nativeView.showDrawer() :
                    this.drawerElement.nativeView.closeDrawer()
            }
        }
    },
    methods: {
        gotoPage(PageName) {
            this.closeDrawer()
            this.$navigateTo(this.$routes[PageName])
        },
        // some helpful methods for opening and closing the drawer from the vue instance.
        openDrawer() {
            this.drawer = true
        },
        closeDrawer() {
            this.drawer = false
        }
    }
}