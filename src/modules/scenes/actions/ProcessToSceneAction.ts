import {BaseAction} from "../../../core/fsm/BaseAction";
import {SceneEvents} from "../SceneEvents";

export class ProcessToSceneAction extends BaseAction {
    public execute(): Promise<any> {
        this.dispatcher.dispatch(SceneEvents.PROCESS_TO_SCREEN);
        return Promise.resolve();
    }
}