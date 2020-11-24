<template>
    <Page>
        <StackLayout orientation="vertical" backgroundColor="lightgray">
            <Label text="hello world!" />
            <Label :text="count" />
            <Button text="Button" @tap="onButtonTap" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        methods: {
            onButtonTap() {
                this.count++;
                console.log("Button was pressed in Page2");
                this.$navigateBack();
            }
        },
        data() {
            return {
                count: 0
            };
        }
    };
</script>

<style>
</style>