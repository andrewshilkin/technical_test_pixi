import AppRenderer from "../../core/AppRenderer";
import {ViewEvents} from "../../core/BaseView";
import {BaseViewController} from "../../core/BaseViewController";
import {FpsView} from "./FpsView";

export class FpsController extends BaseViewController<FpsView> {
    protected addListeners(): void {
        this.dispatcher.once(ViewEvents.INIT, this.onInit, this);
        
    }

    protected onInit(): void {
        this.view.init();
        this.addFpsTicker();
    }

    protected addFpsTicker(): void {
        AppRenderer.application.ticker.add(() => {
            this.view.setFpsText(`FPS: ${AppRenderer.application.ticker.FPS.toFixed(2)}`);
        })
    }
}