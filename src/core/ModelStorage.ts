import {BaseController} from "./BaseController";
import {BaseAction} from "./fsm/BaseAction";
import {BaseState} from "./fsm/BaseState";
import {IBaseModel} from "./IBaseModel";

class ModelStorage {
    private _allModels: IBaseModel[] = [];
    public addModel(model: IBaseModel): void {
        this._allModels.push(model);
    }
    public getModel<T extends IBaseModel>(classInstance: any, modelConstructor: new () => T): T {
        if (classInstance instanceof BaseController ||
            classInstance instanceof BaseState ||
            classInstance instanceof BaseAction) {
            return this._allModels.find( (model) => {
                return model instanceof modelConstructor;
            })! as T;
        }
        throw new Error(`${classInstance} is not allow to access models`);
    }
}
export default new ModelStorage();