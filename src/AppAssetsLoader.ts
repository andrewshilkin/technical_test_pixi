import {Assets} from "pixi.js";
import WebFont from "webfontloader";
import {EventDispatcher} from "./core/EventDispatcher";
import {getEventDispatcher} from "./core/utils/getEventDispatcher";

export class AppAssetsLoader {
    private static _instance: AppAssetsLoader = new AppAssetsLoader();
    protected dispatcher: EventDispatcher = getEventDispatcher();
  
    constructor() {
        if (AppAssetsLoader._instance) {
            throw new Error("Use AppAssetsLoader.getInstance()");
        }
        AppAssetsLoader._instance = this;
    }

    static getInstance(): AppAssetsLoader {
        return this._instance;
    }

    public async loadFonts(): Promise<void> {
        return new Promise<void>((resolve) => {
            WebFont.load({
                custom: {
                    families: ['kenvector_future', 'kenvector_future_thin'],
                    urls: ['assets/fonts/fonts.css'], // CSS file containing @font-face rule
                },
                active: resolve, // Callback function to start your application after the font has loaded
            });
        });
    }

    public async loadCommonAssets(): Promise<any> {
        Assets.addBundle('common', {
            blue_button: "./assets/common/blue_button.png",
            cardBack_red: "./assets/task01/cardBack_red.png",
        });
        return Assets.loadBundle('common');
    }

}