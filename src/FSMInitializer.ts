import {FSMContext} from "./core/fsm/FSMContext";
import {ApplicationInitState} from "./states/ApplicationInitState";
import {MainMenuState} from "./states/MainMenuState";

export class FSMInitializer {
    protected fsm: FSMContext;

    public createFSM(): void {
        this.fsm = new FSMContext();
    }
    public addStates(): void {
        this.fsm.addState(new ApplicationInitState(MainMenuState.ID));
        this.fsm.addState(new MainMenuState(MainMenuState.ID));
    }

    public startFSM(): void {
        this.fsm.goto(ApplicationInitState.ID);
    }
}