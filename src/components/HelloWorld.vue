<template>
    <Page>
        <ActionBar :title="title" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                <Label textWrap="true" text="Play with NativeScript!"
                    class="h2 description-label" />
                <Label textWrap="true" :text="count" />
                <Label textWrap="true"
                    text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code."
                    class="h2 description-label" />
                <Button text="Drawer" class="btn -primary"
                    @tap="onToggleDrawer" />
                <Button text="Blue Button" class="btn -primary"
                    @tap="onButtonTap" />
                <GridLayout rows="*" height="1000px">
                    <RadPieChart allowAnimation="true" row="0">
                        <PieSeries v-tkPieSeries selectionMode="DataPoint"
                            expandRadius="0.4" outerRadiusFactor="0.7"
                            :items="pieSource" valueProperty="Amount"
                            legendLabel="Brand" />
                        <RadLegendView v-tkPieLegend position="Right"
                            title="Brands" offsetOrigin="TopRight" width="110"
                            enableSelection="true" />
                    </RadPieChart>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadCartesianChart from "nativescript-ui-chart/vue";
    import Page2 from "./Page2";
    import SideDrawer from "~/mixins/sidedrawer";
    Vue.use(RadCartesianChart);

    export default {
        mixins: [SideDrawer],
        components: {
            Page2
        },
        methods: {
            onToggleDrawer() {
                this.count++;
                this.drawer = true;
                console.log(this.drawer);
            },
            onButtonTap() {
                this.count++;
                console.log("Button was pressed");
                this.$navigateTo(Page2);
            }
        },
        data() {
            return {
                count: 0,
                pieSource: [{
                        Brand: "Audi",
                        Amount: 10
                    },
                    {
                        Brand: "Mercedes",
                        Amount: 76
                    },
                    {
                        Brand: "Fiat",
                        Amount: 60
                    },
                    {
                        Brand: "BMW",
                        Amount: 24
                    },
                    {
                        Brand: "Crysler",
                        Amount: 40
                    }
                ],
                title: "Woohoo!"
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>