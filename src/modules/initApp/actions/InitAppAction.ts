import {ViewEvents} from "../../../core/BaseView";
import {BaseAction} from "../../../core/fsm/BaseAction";

export class InitAppAction extends BaseAction {
    public execute(): Promise<any> {
        this.dispatcher.dispatch(ViewEvents.INIT);
        return Promise.resolve();
    }
}