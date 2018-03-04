import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { isAndroid, isIOS } from "tns-core-modules/platform";
import * as utils from "tns-core-modules/utils/utils";

declare const com: any;
declare const BlinkingLabel: any;

let nativeView;
let isBlinking = false;

export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
}

export function creatingView(args) {
    if (isIOS) {
        nativeView = BlinkingLabel.new();
        nativeView.text = "Native";
    } else if (isAndroid) {
        nativeView = new com.hettiger.blinkinglabel.BlinkingLabel(utils.ad.getApplicationContext());
        nativeView.setText("Native");
    }

    args.view = nativeView;
}

export function toggleBlinking() {
    if (isBlinking) {
        nativeView.stopBlinking();
    } else {
        nativeView.startBlinking();
    }
    isBlinking = !isBlinking;
}
