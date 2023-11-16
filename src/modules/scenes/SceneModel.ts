import {IBaseModel} from "../../core/IBaseModel";

export enum SceneTypes {
    none,
    MAIN_MENU,
    TASK_01,
    TASK_02,
}
export class SceneModel implements IBaseModel {
    protected _sceneType: SceneTypes = SceneTypes.none;
    public get scene(): SceneTypes { return this._sceneType; }
    public set scene(sceneType: SceneTypes) { this._sceneType = sceneType; }
}