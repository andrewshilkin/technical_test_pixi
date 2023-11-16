import {FSMContext} from "./core/fsm/FSMContext";
import {ApplicationInitState} from "./states/ApplicationInitState";
import {MainMenuState} from "./states/MainMenuState";
import {Task01State} from "./states/Task01State";
import {Task02State} from "./states/Task02State";

export class FSMInitializer {
    protected fsm: FSMContext;

    public createFSM(): void {
        this.fsm = new FSMContext();
    }
    public addStates(): void {
        this.fsm.addState(new ApplicationInitState(MainMenuState.ID));
        this.fsm.addState(new MainMenuState());
        this.fsm.addState(new Task01State(MainMenuState.ID));
        this.fsm.addState(new Task02State(MainMenuState.ID));
    }

    public startFSM(): void {
        this.fsm.goto(ApplicationInitState.ID);
    }
}