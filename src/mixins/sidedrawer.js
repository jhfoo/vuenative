export default {
    data() {
        return {
            // we'll use this to enable gestures on our sideDrawer.
            gesturesEnabled: true
        }
    },
    computed: {
        // drawerElement points to the drawer node using vue $refs
        drawerElement() { return (this.$refs && this.$refs.drawer) || null },
        // drawer is responsible for getting and setting the sideDrawer property in vuex state.
        isShowDrawer: {
            get() {
                return this.$store.getters.isShow
            },
            set(v) { return this.$store.commit('isShow', v) }
        }
    },
    watch: {
        // we watch the drawer prop for changes and open/close the sideDrawer accordingly
        isShowDrawer(v) {
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
            console.log('drawer: ' + this.isShowDrawer)
            this.isShowDrawer = true
        },
        closeDrawer() {
            console.log('drawer: ' + this.isShowDrawer)
            this.isShowDrawer = false
        }
    }
}