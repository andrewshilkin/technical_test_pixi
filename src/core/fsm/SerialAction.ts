import {BaseAction} from "./BaseAction";

export class SerialAction extends BaseAction {

    protected executedQueue: BaseAction[] = [];
    protected mainResolve: Function;
    protected currentAction: BaseAction;

    execute(): Promise<any> {
        return new Promise<void>(resolve => {
            this.queue().then(() => {
                resolve(undefined);
            })
        });
    }

    queue(): Promise<void> {
        return new Promise<void>( resolve => {
            this.executedQueue = this.actions.concat();
            this.executeActionFromQueue();
            this.mainResolve = resolve;
        });
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
        super.skip();
        this.currentAction.skip();
    }
}
