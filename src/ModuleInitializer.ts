import {MainMenuModule} from "./modules/mainMenu/MainMenuModule";
import {SceneModule} from "./modules/scenes/SceneModule";
import {Task01Module} from "./modules/task01/Task01Module";
import {FpsModule} from "./modules/fps/FpsModule";
import {Task02Module} from "./modules/task02/Task02Module";

export class ModuleInitializer {
    public addModules(): void {
        new SceneModule().execute();
        new MainMenuModule().execute();
        new Task01Module().execute();
        new FpsModule().execute();
        new Task02Module().execute();
    }
}