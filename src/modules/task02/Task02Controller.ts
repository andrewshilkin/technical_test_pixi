import {ViewEvents} from "../../core/BaseView";
import {BaseViewController} from "../../core/BaseViewController";
import {Task02View, Task02ViewEvents} from "./Task02View";
import {Task02Events} from "./Task02Events";

export class Task02Controller extends BaseViewController<Task02View> {
    protected addListeners(): void {
        this.dispatcher.once(ViewEvents.INIT, this.onInit, this);
        this.dispatcher.on(Task02ViewEvents.EXIT_CLICKED, this.onExit, this);

        this.registerViewListener(Task02ViewEvents.EXIT_CLICKED);

    }
    
    protected onInit(): void {
        this.view.init();
    }

    protected onExit(): void {
        this.dispatcher.dispatch(Task02Events.EXIT_FROM_TASK);
    }
}