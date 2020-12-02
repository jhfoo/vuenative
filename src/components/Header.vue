<template>
    <ActionBar :title="title" class="BarStyle">
        <NavigationButton @tap="onToggleDrawer" text="Drawer Menu" android.systemIcon="ic_menu"></NavigationButton>
        <ActionItem tap="onDelete" text="Account" android.position="popup"></ActionItem>
        <ActionItem tap="onDelete" text="Log Out" android.position="popup"></ActionItem>
    </ActionBar>
</template>

<style scoped>
.BarStyle {
    background-color:  #d05A33;
    color: white;
}
.scrollStyle {
  background-color: #fff;
}
.cardStyle {
  background-color: #3489db;
  color: #fff;
  margin-top: 20;
  margin-left: 20;
  margin-right: 20;
}
</style>

<script>
    import SideDrawer from "~/mixins/sidedrawer";

    export default {
        mixins: [SideDrawer],
        methods: {
            onToggleDrawer() {
                this.count++;
                this.isShowDrawer = true;
                console.log('onToggleDrawer()')
                console.log(this.isShowDrawer);
            },
            onButtonTap() {
                this.count++;
                console.log("Button was pressed");
                this.$navigateTo(Page2);
            }
        },
        data() {
            return {
                title: "Woohoo!"
            };
        }
    };
</script>