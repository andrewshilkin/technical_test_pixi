import {Application} from "pixi.js";
import AppRenderer from "./core/AppRenderer";
import {AppLayoutInitializer} from "./layouts/AppLayoutInitializer";
import {ModuleInitializer} from "./ModuleInitializer";
import {FSMInitializer} from "./FSMInitializer";

const APP_WIDTH = 1280;
const APP_HEIGHT = 720;

export class App {
    protected app: Application;

    public init() {
        this.app = new Application({
            backgroundColor: 0xd3d3d3,
            width: APP_WIDTH,
            height: APP_HEIGHT,
        });

        AppRenderer.application = this.app;
        
        new AppLayoutInitializer().createLayouts();
        new ModuleInitializer().addModules();
        const fsmInit = new FSMInitializer();
        fsmInit.createFSM();
        fsmInit.addStates();
        fsmInit.startFSM();


        //@ts-ignore
        globalThis.__PIXI_APP__ = this.app;
    }

    public async run() {
        document.body.appendChild(this.app.view as any);
    }
}