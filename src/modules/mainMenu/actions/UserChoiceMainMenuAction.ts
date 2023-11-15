import {BaseAction} from "../../../core/fsm/BaseAction";
import ModelStorage from "../../../core/ModelStorage";
import {SceneModel, SceneTypes} from "../../scenes/SceneModel";
import {MainMenuEvents} from "../MainMenuEvents";

export class UserChoiceMainMenuAction extends BaseAction {
    public execute(): Promise<any> {
        return new Promise<void>((resolve) => {
            this.dispatcher.once(MainMenuEvents.MENU_BUTTON_CLICKED, (clickedResult: {scene: SceneTypes}) => {
                const model = ModelStorage.getModel(this, SceneModel);
                model.scene = clickedResult.scene;
                resolve();
            });
        })
    }
}