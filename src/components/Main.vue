<template>
    <RadSideDrawer ref="drawer" drawerLocation="Left"
        :gesturesEnabled="gesturesEnabled">
        <StackLayout ~drawerContent backgroundColor="gray">
            <slot name="drawerContent"></slot>
        </StackLayout>
        <Frame ~mainContent>
            <slot name="mainContent"></slot>
        </Frame>
    </RadSideDrawer>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    import HelloWorld from "./HelloWorld";
    import SideDrawer from "~/mixins/sidedrawer";
    Vue.use(RadSideDrawer);

    export default {
        mixins: [SideDrawer],
        components: {
            HelloWorld
        },
        methods: {
            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            }
        },

        data() {
            return {
                mainContentText: "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" +
                    " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer."
            };
        }
    };
</script>

<style>
</style>