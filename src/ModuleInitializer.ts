import {MainMenuModule} from "./modules/mainMenu/MainMenuModule";
import {SceneModule} from "./modules/scenes/SceneModule";

export class ModuleInitializer {
    public addModules(): void {
        new SceneModule().execute();
        new MainMenuModule().execute();
    }
}