import {AppAssetsLoader} from "../../../AppAssetsLoader";
import {BaseAction} from "../../../core/fsm/BaseAction";

export class LoadCommonFontsAction extends BaseAction {
    public execute(): Promise<any> {
        return AppAssetsLoader.getInstance().loadFonts();
    }
}