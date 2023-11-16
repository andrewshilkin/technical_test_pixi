import {BaseModule} from "../../core/BaseModule";
import {Task01Controller} from "./Task01Controller";
import {Task01View} from "./Task01View";

export class Task01Module extends BaseModule {
    public execute(): void {
        new Task01Controller(
            new Task01View()
        )
    }

}