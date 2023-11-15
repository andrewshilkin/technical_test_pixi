import {BaseView} from "./BaseView";
import {EventDispatcher} from "./EventDispatcher";
import {getEventDispatcher} from "./utils/getEventDispatcher";

export class BaseController {
    protected dispatcher: EventDispatcher;
    
    constructor() {
        this.dispatcher = getEventDispatcher();
    }

    protected addListeners(): void { }
}