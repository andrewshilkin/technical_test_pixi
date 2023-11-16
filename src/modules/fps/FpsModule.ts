import {BaseModule} from "../../core/BaseModule";
import {FpsController} from "./FpsController";
import {FpsView} from "./FpsView";

export class FpsModule extends BaseModule {
    public execute(): void {
        new FpsController(
            new FpsView()
        )
    }

}