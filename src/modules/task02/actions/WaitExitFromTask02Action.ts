import {BaseAction} from "../../../core/fsm/BaseAction";
import ModelStorage from "../../../core/ModelStorage";
import {SceneModel, SceneTypes} from "../../scenes/SceneModel";
import {Task02Events} from "../Task02Events";

export class WaitExitFromTask02Action extends BaseAction {
    public execute(): Promise<any> {
        return new Promise<void>((resolve) => {
            this.dispatcher.once(Task02Events.EXIT_FROM_TASK, () => {
                const model = ModelStorage.getModel(this, SceneModel);
                model.scene = SceneTypes.MAIN_MENU;
                resolve();
            });
        })
    }
}