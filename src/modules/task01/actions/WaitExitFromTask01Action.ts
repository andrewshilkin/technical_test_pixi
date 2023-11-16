import {BaseAction} from "../../../core/fsm/BaseAction";
import ModelStorage from "../../../core/ModelStorage";
import {SceneModel, SceneTypes} from "../../scenes/SceneModel";
import {Task01Events} from "../Task01Events";

export class WaitExitFromTask01Action extends BaseAction {
    public execute(): Promise<any> {
        return new Promise<void>((resolve) => {
            this.dispatcher.once(Task01Events.EXIT_FROM_TASK, () => {
                const model = ModelStorage.getModel(this, SceneModel);
                model.scene = SceneTypes.MAIN_MENU;
                resolve();
            });
        })
    }
}