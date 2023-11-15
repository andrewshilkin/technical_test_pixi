import {BaseController} from "./BaseController";
import {BaseView} from "./BaseView";

export class BaseViewController<T extends BaseView> extends BaseController {
    protected view: T;
    
    constructor(view: T) {
        super();
        this.view = view;
        this.addListeners();
    }

    protected registerViewListener(viewEvent: string): void {
        this.view.addListener(viewEvent, (args) => {
            this.dispatcher.dispatch(viewEvent, args);
        });
    }
}