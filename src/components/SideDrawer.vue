<template>
    <ScrollView>
        <StackLayout>
            <Label text="Navigation Menu" />
            <Label text="Primary" padding="10" backgroundColor="lightgray" />
            <Label text="Page 2" padding="10" @tap="closeDrawer()" />
            <Label text="Promotions" padding="10" @tap="closeDrawer()" />
            <Label text="Labels" padding="10" backgroundColor="lightgray" />
            <Label text="Important" padding="10" @tap="closeDrawer()" />
            <Label text="Starred" padding="10" @tap="closeDrawer()" />
            <Label text="Sent Mail" padding="10" @tap="closeDrawer()" />
            <Label text="Drafts" padding="10" @tap="closeDrawer()" />
            <Button text="Close" color="lightgray" padding="10"
                style="horizontal-align: center" @tap="closeDrawer()" />
        </StackLayout>
    </ScrollView>
</template>

<script>
    import SideDrawer from "~/mixins/sidedrawer";

    export default {
        mixins: [SideDrawer],
        data() {
            return {};
        }
    };
</script>

<style>
</style>