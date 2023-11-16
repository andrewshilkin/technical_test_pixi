import {EventDispatcher} from "../EventDispatcher";
import {getEventDispatcher} from "../utils/getEventDispatcher";
import {BaseAction} from "./BaseAction";

export abstract class BaseState {
    protected dispatcher: EventDispatcher;
    protected actions: BaseAction[] = [];
    protected executedQueue: BaseAction[] = [];
    protected isActive: boolean = false;
    protected mainResolve: Function;
    protected currentAction: BaseAction;
    protected shouldSkip: boolean = false;

    protected _id: string;
    constructor(id: string) {
        this._id = id;
        this.dispatcher = getEventDispatcher();
        this.actions = this.addActions();
    }

    public get id(): string {
        return this._id;
    }

    public start(): Promise<string> {
        this.isActive = true;
        return new Promise<string>(resolve => {
            this.execute().then(() => {
                this.isActive = false;
                const nextState: string = this.getNextState();
                resolve(nextState);
            })
        });
    }

    public abstract addActions(): BaseAction[];
    public abstract getNextState(): string;

    protected async execute(): Promise<void> {
        if (this.isSkipped()) {
            return Promise.resolve();
        } else {
            return new Promise<void>( resolve => {
                this.executedQueue = this.actions.concat();
                this.executeActionFromQueue();
                this.mainResolve = resolve;
            });
        }
    }

    protected executeActionFromQueue(): void {
        if (this.executedQueue.length === 0) {
            this.mainResolve();
            return;
        }
        this.currentAction = this.executedQueue.shift()!;
        this.currentAction.execute().then(() => {
            this.executeActionFromQueue()
        });
    }

    public skip(): void {
        this.shouldSkip = true;
        this.currentAction.skip();
    }

    protected isSkipped(): boolean {
        return false;
    }

}
