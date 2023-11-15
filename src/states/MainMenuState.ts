import {BaseAction} from "../core/fsm/BaseAction";
import {BaseState} from "../core/fsm/BaseState";
import {SerialAction} from "../core/fsm/SerialAction";
import {UserChoiceMainMenuAction} from "../modules/mainMenu/actions/UserChoiceMainMenuAction";
import {ProcessToSceneAction} from "../modules/scenes/actions/ProcessToSceneAction";
import {GoToMainMenuAction} from "../modules/scenes/actions/GoToMainMenuAction";

import {PauseAction} from "./PauseAction";

export class MainMenuState extends BaseState {
    public static ID: string = "MainMenuState";
    private _nextState: string;

    constructor(nextState: string) {
        super(MainMenuState.ID);
        this._nextState = nextState;
    }

    public addActions(): BaseAction[] {
        return [
            new SerialAction(
                new GoToMainMenuAction(),
                new UserChoiceMainMenuAction(),
                new ProcessToSceneAction(),
                new PauseAction()
            )
        ];
    }

    public getNextState(): string {
        return this._nextState;
    }
}