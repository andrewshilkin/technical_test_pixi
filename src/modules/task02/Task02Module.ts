import {BaseModule} from "../../core/BaseModule";
import {Task02Controller} from "./Task02Controller";
import {Task02View} from "./Task02View";

export class Task02Module extends BaseModule {
    public execute(): void {
        new Task02Controller(
            new Task02View()
        )
    }

}