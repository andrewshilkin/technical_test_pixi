import {BaseAction} from "../core/fsm/BaseAction";
import {BaseState} from "../core/fsm/BaseState";
import {SerialAction} from "../core/fsm/SerialAction";
import {UserChoiceMainMenuAction} from "../modules/mainMenu/actions/UserChoiceMainMenuAction";
import {ProcessToSceneAction} from "../modules/scenes/actions/ProcessToSceneAction";
import {GoToMainMenuAction} from "../modules/scenes/actions/GoToMainMenuAction";

import ModelStorage from "../core/ModelStorage";
import {SceneModel, SceneTypes} from "../modules/scenes/SceneModel";
import {Task01State} from "./Task01State";
import {Task02State} from "./Task02State";


export class MainMenuState extends BaseState {
    public static ID: string = "MainMenuState";

    constructor() {
        super(MainMenuState.ID);
    }

    public addActions(): BaseAction[] {
        return [
            new SerialAction(
                new GoToMainMenuAction(),
                new UserChoiceMainMenuAction(),
                new ProcessToSceneAction(),
            )
        ];
    }

    public getNextState(): string {
        const model = ModelStorage.getModel(this, SceneModel);

        switch (model.scene) {
            case SceneTypes.TASK_01: return Task01State.ID;
            case SceneTypes.TASK_02: return Task02State.ID;
        }

        return MainMenuState.ID;
    }
}