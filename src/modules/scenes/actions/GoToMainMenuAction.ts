import {BaseAction} from "../../../core/fsm/BaseAction";
import ModelStorage from "../../../core/ModelStorage";
import {SceneEvents} from "../SceneEvents";
import {SceneModel, SceneTypes} from "../SceneModel";

export class GoToMainMenuAction extends BaseAction {
    public execute(): Promise<any> {
        const model = ModelStorage.getModel(this, SceneModel);
        model.scene = SceneTypes.MAIN_MENU;
        this.dispatcher.dispatch(SceneEvents.PROCESS_TO_SCREEN);
        return Promise.resolve();
    }
}