import {BaseViewController} from "../../core/BaseViewController";
import {ViewEvents} from "../../core/BaseView";
import {MainMenuView, MainMenuViewEvents} from "./MainMenuView";
import {SceneTypes} from "../scenes/SceneModel";
import {MainMenuEvents} from "./MainMenuEvents";

export class MainMenuController extends BaseViewController<MainMenuView> {
    protected addListeners(): void {
        this.dispatcher.once(ViewEvents.INIT, this.onInit, this);

        this.dispatcher.on(MainMenuViewEvents.BUTTON_CLICKED, this.onButtonClicked, this);

        this.registerViewListener(MainMenuViewEvents.BUTTON_CLICKED);
    }

    protected onInit(): void {
        this.view.init();
    }

    protected onButtonClicked(result: {scene: SceneTypes}): void {
        this.dispatcher.dispatch(MainMenuEvents.MENU_BUTTON_CLICKED, result);
    }
}