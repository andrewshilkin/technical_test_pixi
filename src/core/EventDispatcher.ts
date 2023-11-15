import {EventEmitter} from "eventemitter3";

export class EventDispatcher extends EventEmitter {
    private static _instance: EventDispatcher = new EventDispatcher();
  
    constructor() {
        super();
        if (EventDispatcher._instance) {
            throw new Error("Use EventDispatcher.getInstance()");
        }
        EventDispatcher._instance = this;
    }

    static getInstance(): EventDispatcher {
        return this._instance;
    }

    public dispatch(event: string, options?: any): void {
        this.emit(event, options);
    }
}