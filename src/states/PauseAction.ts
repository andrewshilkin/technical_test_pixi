import {BaseAction} from "../core/fsm/BaseAction";

export class PauseAction extends BaseAction {
    public execute(): Promise<any> {
        return new Promise<void>((resolve) => {

        });
    }
}