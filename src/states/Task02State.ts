import {BaseAction} from "../core/fsm/BaseAction";
import {BaseState} from "../core/fsm/BaseState";
import {SerialAction} from "../core/fsm/SerialAction";
import {ProcessToSceneAction} from "../modules/scenes/actions/ProcessToSceneAction";
import {WaitExitFromTask02Action} from "../modules/task02/actions/WaitExitFromTask02Action";

export class Task02State extends BaseState {
    public static ID: string = "Task02State";
    private _nextState: string;

    constructor(nextState: string) {
        super(Task02State.ID);
        this._nextState = nextState;

    }

    public addActions(): BaseAction[] {
        return [
            new SerialAction(
                new WaitExitFromTask02Action(),
                new ProcessToSceneAction()
            )
        ];
    }

    public getNextState(): string {
        return this._nextState;
    }
}