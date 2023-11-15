import {BaseModule} from "../../core/BaseModule";
import ModelStorage from "../../core/ModelStorage";
import {SceneController} from "./SceneController";
import {SceneModel} from "./SceneModel";

export class SceneModule extends BaseModule {
    public execute(): void {
        new SceneController();
        ModelStorage.addModel(new SceneModel());
    }

}