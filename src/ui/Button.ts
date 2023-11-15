import EventEmitter from "events";
import {NineSlicePlane, Texture, Text, Container} from "pixi.js";

export enum ButtonEvents {
    button_click = "button_click",
}
export class Button extends NineSlicePlane {
    protected label: Text;
    protected bttnTexture: Texture;
    protected isOver: boolean = false;
    protected isButtonDown: boolean = false;
    private _eventEmitter: EventEmitter = new EventEmitter();

    public get eventEmitter(): EventEmitter { return this._eventEmitter; }

    constructor(texture: Texture, 
        leftWidth?: number, 
        topHeight?: number, 
        rightWidth?: number, 
        bottomHeight?: number) {
        super(texture, leftWidth, topHeight, rightWidth, bottomHeight);
        this.bttnTexture = texture;

        this.label = new Text('Button', {
            fontFamily: 'kenvector_future_thin',
            fontSize: 24,
            fill: 0x0,
            align: 'left',
        });
        this.addChild(this.label);

        this.update();

        this.interactive = true;
        this.cursor = 'pointer';

        this.addEventListener("mouseenter", this.onOver.bind(this));
        this.addEventListener("mouseout", this.onOut.bind(this));
        this.addEventListener("mousedown", this.onMouseDown.bind(this));
        this.addEventListener("mouseup", this.onMouseUp.bind(this));

    }

    protected onOver(): void {
        this.isOver = true;
    }

    protected onOut(): void {
        this.isOver = false;
    }

    protected onMouseDown(): void {
        this.isButtonDown = true;
    }

    protected onMouseUp(): void {
        if(this.isButtonDown && this.isOver) {
            this._eventEmitter.emit(ButtonEvents.button_click);
        }
        this.isButtonDown = false;
    }

    protected update(): void {
        this.label.x = (this.width - this.label.width) * 0.5;
        this.label.y = (this.height - this.label.height) * 0.5;
    }

    public set height(value: number) {
        super.height = value;

        this.update();
    }
    public get height(): number {
        return super.height;
    }

    public get width(): number {
        return super.width;
    }
    public set width(value: number) {
        super.width = value;
        
        this.update();
    }

    public get text(): string { return this.label.text; }
    public set text(value: string) {
        this.label.text = value;
        this.update();
    }

}