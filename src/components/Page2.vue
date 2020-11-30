<template>
    <Page>
        <StackLayout orientation="vertical" backgroundColor="lightgray">
            <Label text="hello world!" />
            <Label :text="count" />
            <BarcodeScanner
                row="1"
                height="300"
                formats="QR_CODE, EAN_13, UPC_A"
                beepOnScan="true"
                reportDuplicates="true"
                preferFrontCamera="false"
                @scanResult="onScanResult"
                v-if="isIOS">
            </BarcodeScanner>
            <Button text="Scan" @tap="onScan" />
            <Button text="Button" @tap="onButtonTap" />
        </StackLayout>
    </Page>
</template>

<script>
import { isIOS } from "@nativescript/core"
import { BarcodeScanner } from "nativescript-barcodescanner"

const scanner = new BarcodeScanner()

    export default {
        components: {
            nativebarcodescanner: BarcodeScanner.BarcodeScannerView
        },
        methods: {
            onButtonTap() {
                this.count++;
                console.log("Button was pressed in Page2");
                this.$navigateBack();
            },
            onScanResult(result) {
                console.log(result)
            },
            onScan() {
                scanner.scan({
                    message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
                    showFlipCameraButton: true,   // default false
                    preferFrontCamera: false,     // default false
                    showTorchButton: true,        // default false
                    beepOnScan: true,             // Play or Suppress beep on scan (default true)
                    fullScreen: true,             // Currently only used on iOS; with iOS 13 modals are no longer shown fullScreen by default, which may be actually preferred. But to use the old fullScreen appearance, set this to 'true'. Default 'false'.
                    torchOn: false,               // launch with the flashlight on (default false)
                    closeCallback: () => { console.log("Scanner closed")}, // invoked when the scanner was closed (success or abort)
                    resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
                    // orientation: orientation,     // Android only, default undefined (sensor-driven orientation), other options: portrait|landscape
                    openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
                }).then((result) => {
                    // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
                    console.log(result)
                }, (errorMessage) => {
                    console.log("No scan. " + errorMessage);
                })
            },         
        },
        data() {
            return {
                count: 0,
                pause: false,
                isIOS: isIOS
            } 
        }
    };
</script>

<style>
</style>