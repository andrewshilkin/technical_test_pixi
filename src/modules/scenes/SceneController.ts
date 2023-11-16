import AppRenderer from "../../core/AppRenderer";
import {BaseController} from "../../core/BaseController";
import ModelStorage from "../../core/ModelStorage";
import {SceneEvents} from "./SceneEvents";
import {SceneModel, SceneTypes} from "./SceneModel";

export class SceneController extends BaseController {
    constructor() {
        super();
        this.addListeners();
    }
    protected addListeners(): void {
        this.dispatcher.addListener(SceneEvents.PROCESS_TO_SCREEN, this.onProcessScreen, this);
    }

    protected onProcessScreen(): void {
        const model = ModelStorage.getModel(this, SceneModel);

        AppRenderer.getContainerByName("mainMenu").visible = false;
        AppRenderer.getContainerByName("task01").visible = false;
        AppRenderer.getContainerByName("task02").visible = false;
        AppRenderer.getContainerByName("task03").visible = false;
        switch (model.scene) {
            case SceneTypes.MAIN_MENU:
                AppRenderer.getContainerByName("mainMenu").visible = true;
                break;
            case SceneTypes.TASK_01:
                AppRenderer.getContainerByName("task01").visible = true;
                break;
            case SceneTypes.TASK_02:
                AppRenderer.getContainerByName("task02").visible = true;
                break;
        }
    }
}