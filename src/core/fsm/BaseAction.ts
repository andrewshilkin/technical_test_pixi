import {EventDispatcher} from "../EventDispatcher";
import {getEventDispatcher} from "../utils/getEventDispatcher";

export abstract class BaseAction {

    protected dispatcher: EventDispatcher;
    protected actions: BaseAction[];
    protected shouldSkip: boolean = false;

    public get logString(): string | undefined {
        return `${this.constructor.name} executed`;
    }

    protected log(): void {
        if(this.logString !== undefined) {
            console.log(this.logString);
        }
    }

    constructor(...args: any[]) {
        this.dispatcher = getEventDispatcher();
        this.actions = args;
    }

    public abstract execute(): Promise<any>;

    public skip(): void {
        this.shouldSkip = true;
    }

}
