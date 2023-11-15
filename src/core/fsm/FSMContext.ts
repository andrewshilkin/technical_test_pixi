import {BaseState} from "./BaseState";

export class FSMContext {

    private _currentState: BaseState;
    protected states: Map<string, BaseState> = new Map<string, BaseState>();

    public goto(stateId: string): void {
        if (!this.states.get(stateId)!) {
            throw new Error(`${stateId} is not added to FSM`);
        }
        
        console.groupEnd();
        console.log(`switched to ${stateId}`);
        console.group(`${stateId}`);
        
        this._currentState = this.states.get(stateId)!;
        this._currentState.start().then( (state) => {
            this.goto(state);
        })
    }

    public addState(state: BaseState): void {
        this.states.set(state.id, state);
    }

    get currentState(): BaseState {
        return this._currentState;
    }
}
