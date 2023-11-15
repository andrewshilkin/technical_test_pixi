import {BaseAction} from "./BaseAction";

export class ParallelAction extends BaseAction {

    protected mainResolve: Function;

    execute(): Promise<any> {
        return new Promise<any>( resolve => {
            this.mainResolve = resolve;
            Promise.all(
                this.actions.map((action) => {
                    return action.execute();
                })
            ).then( () => {
                this.mainResolve();
            });
        })
    }
}
