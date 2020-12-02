<template>
    <Page class="scrollStyle">
        <Header/>
        <ScrollView class="scrollStyle">
            <StackLayout class="scrollStyle">
                <card-view class="cardStyle" elevation="40" radius="10">
                    <stack-layout>
                        <label text="Helloooo World"></label>
                        <Label textWrap="true" text="Welcome to Pablo"
                            class="h2 description-label" />
                    </stack-layout>
                </card-view>
                <card-view class="cardStyle" margin="20" padding="20" elevation="40" radius="10">
                    <stack-layout>
                        <Label textWrap="true" :text="count" />
                        <Label textWrap="true"
                            text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code."
                            class="h2 description-label" />
                    </stack-layout>
                </card-view>

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
    import Vue from "nativescript-vue";
    import RadCartesianChart from "nativescript-ui-chart/vue";
    import Page2 from "./Page2"
    import Header from "./Header"
    Vue.use(RadCartesianChart);

    export default {
        components: {
            Page2,
            Header
        },
        methods: {
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