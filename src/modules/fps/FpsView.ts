import {BaseView} from "../../core/BaseView";
import {Text} from "pixi.js";
import AppRenderer from "../../core/AppRenderer";

export class FpsView extends BaseView {
    protected fpsText: Text;
    public get layout(): string {
        return "fps";
    }
    public init(): void {
        this.addToLayout();
        AppRenderer.getContainerByName("fps").visible = true;
        this.fpsText = new Text('FPS: 0', {
            fontFamily: 'kenvector_future_thin',
            fontSize: 24,
            fill: 0x0,
            align: 'left',
        });
        this.container.addChild(this.fpsText);
    }

    public setFpsText(text: string): void {
        this.fpsText.text = text;
    }
}