import {AppAssetsLoader} from "../../../AppAssetsLoader";
import {BaseAction} from "../../../core/fsm/BaseAction";

export class LoadCommonAssetsAction extends BaseAction {
    public execute(): Promise<any> {
        return AppAssetsLoader.getInstance().loadCommonAssets();
    }
}