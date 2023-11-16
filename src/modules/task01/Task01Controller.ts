import {ViewEvents} from "../../core/BaseView";
import {BaseViewController} from "../../core/BaseViewController";
import {Task01Events} from "./Task01Events";
import {Task01View, Task01ViewEvents} from "./Task01View";

export class Task01Controller extends BaseViewController<Task01View> {
    protected addListeners(): void {
        this.dispatcher.once(ViewEvents.INIT, this.onInit, this);
        this.dispatcher.on(Task01ViewEvents.EXIT_CLICKED, this.onExit, this);
        
        this.registerViewListener(Task01ViewEvents.EXIT_CLICKED);
    }

    protected onInit(): void {
        this.view.init();
    }

    protected onExit(): void {
        this.dispatcher.dispatch(Task01Events.EXIT_FROM_TASK);
    }
}