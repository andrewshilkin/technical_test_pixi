import {BaseAction} from "../core/fsm/BaseAction";
import {BaseState} from "../core/fsm/BaseState";
import {SerialAction} from "../core/fsm/SerialAction";
import {InitAppAction} from "../modules/initApp/actions/InitAppAction";
import {LoadCommonAssetsAction} from "../modules/initApp/actions/LoadCommonAssetsAction";
import {LoadCommonFontsAction} from "../modules/initApp/actions/LoadCommonFontsAction";

export class ApplicationInitState extends BaseState {
    public static ID: string = "ApplicationInitState";
    private _nextState: string;

    constructor(nextState: string) {
        super(ApplicationInitState.ID);
        this._nextState = nextState;
    }

    public addActions(): BaseAction[] {
        return [
            new SerialAction(
                new LoadCommonAssetsAction(),
                new LoadCommonFontsAction(),
                new InitAppAction(),
            )
        ];
    }

    public getNextState(): string {
        return this._nextState;
    }
}