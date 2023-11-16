import {BaseView} from "../../core/BaseView";
import {Button, ButtonEvents} from "../../ui/Button";
import {SceneTypes} from "../scenes/SceneModel";
import {MainMenuEvents} from "./MainMenuEvents";

export enum MainMenuViewEvents {
    BUTTON_CLICKED = "MainMenuViewEvents.BUTTON_CLICKED", 
}
export class MainMenuView extends BaseView {
    public get layout(): string {
        return "mainMenu";
    }

    protected _button01: Button;
    protected _button02: Button;
    protected _button03: Button;

    constructor() {
        super();
    }

    public init(): void {
        this.addToLayout();

        this.container.x = 100;
        this.container.y = 20;

        this._button01 = this.createButton("Task_01", 0);
        this._button02 = this.createButton("Task_02", 1);
        this._button03 = this.createButton("Task_03", 2);

        this._button01.eventEmitter.on(ButtonEvents.button_click, this.makeChoice.bind(this, SceneTypes.TASK_01));
        // this._button02.eventEmitter.on(ButtonEvents.button_click, this.makeChoice.bind(this, SceneTypes.));
        // this._button03.eventEmitter.on(ButtonEvents.button_click, this.makeChoice.bind(this, SceneTypes.));
    }

    protected createButton(text:string, index: number): Button {
        var bttn = new Button(this.getTexture("blue_button"), 6, 13, 6, 13);
        bttn.text = text;
        this.container.addChild(bttn);
        bttn.width = 200;
        bttn.height = 60;
        bttn.y = index * 70;
        return bttn;
    }

    protected makeChoice(scene: SceneTypes): void {
        this.emit(MainMenuViewEvents.BUTTON_CLICKED, {scene: scene});
    }
}