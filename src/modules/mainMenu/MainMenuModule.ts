import {BaseModule} from "../../core/BaseModule";
import {MainMenuController} from "./MainMenuController";
import {MainMenuView} from "./MainMenuView";

export class MainMenuModule extends BaseModule {
    public execute(): void {
        new MainMenuController(
            new MainMenuView()
        )
    }

}