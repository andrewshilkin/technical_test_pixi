import {BaseAction} from "../core/fsm/BaseAction";
import {BaseState} from "../core/fsm/BaseState";
import {SerialAction} from "../core/fsm/SerialAction";
import {ProcessToSceneAction} from "../modules/scenes/actions/ProcessToSceneAction";
import {WaitExitFromTask01Action} from "../modules/task01/actions/WaitExitFromTask01Action";

export class Task01State extends BaseState {
    public static ID: string = "Task01State";
    private _nextState: string;

    constructor(nextState: string) {
        super(Task01State.ID);
        this._nextState = nextState;

    }

    public addActions(): BaseAction[] {
        return [
            new SerialAction(
                new WaitExitFromTask01Action(),
                new ProcessToSceneAction()
            )
        ];
    }

    public getNextState(): string {
        return this._nextState;
    }
}