import {Application, Container} from "pixi.js";

class AppRenderer {
    private _app: Application;
    public set application(app: Application) {
        this._app = app;
        console.log(this._app.renderer.width, this._app.renderer.height);
    }

    public get stage(): Container {
        return this._app.stage;
    }

    public get width(): number {
        return this._app.renderer.width;
    }

    public get height(): number {
        return this._app.renderer.height;
    }

    public addToRenderTree(component: Container, layoutName: string): void {
        const layout = this.stage.getChildByName(layoutName, true) as Container;
        layout.addChild(component);
    }

    public getContainerByName(layoutName: string): Container {
        return this.stage.getChildByName(layoutName, true) as Container;
    }
}

export default new AppRenderer();