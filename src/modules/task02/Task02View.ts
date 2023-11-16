import {Container, DisplayObject, Sprite, Text} from "pixi.js";
import {BaseView} from "../../core/BaseView";
import {Button, ButtonEvents} from "../../ui/Button";

export enum Task02ViewEvents {
    EXIT_CLICKED = "Task02ViewEvents.EXIT_CLICKED",
} 
export class Task02View extends BaseView {
    protected bttn_start: Button;
    protected bttn_exit: Button;
    protected interval: any;
    protected resultContainer: Container;
    protected imagePaths = [
        'chipBlackWhite',
        'chipBlue',
        'chipBlueWhite',
        'chipGreen',
    ];
      
    protected textOptions = [
        'Random Text 1',
        'Random Text 2',
        'Random Text 3',
    ];
    
    public get layout(): string {
        return "task02";
    }

    public init(): void {
        this.addToLayout();
        this.resultContainer = new Container();
        this.container.addChild(this.resultContainer);

        this.bttn_start = new Button(this.getTexture("blue_button"), 6, 13, 6, 13);
        this.bttn_start.text = "Start";
        this.bttn_start.width = 200;
        this.bttn_start.height = 60;
        this.bttn_start.x = 200;
        this.bttn_start.y = 240;
        this.container.addChild(this.bttn_start);

        this.bttn_start.eventEmitter.on(ButtonEvents.button_click, () => {
            this.bttn_start.visible = false;
            this.generateObject();
            this.interval = setInterval(this.generateObject.bind(this), 2000);
        });

        this.bttn_exit = new Button(this.getTexture("blue_button"), 6, 13, 6, 13);
        this.bttn_exit.text = "Exit";
        this.bttn_exit.width = 200;
        this.bttn_exit.height = 60;
        this.bttn_exit.x = 420;
        this.bttn_exit.y = 240;
        this.container.addChild(this.bttn_exit);

        this.bttn_exit.eventEmitter.on(ButtonEvents.button_click, () => {
            if(this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            this.resultContainer.removeChildren();
            this.bttn_start.visible = true;

            this.emit(Task02ViewEvents.EXIT_CLICKED);
        });
    }

    protected generateObject(): void {
        this.resultContainer.removeChildren();

        const resultObjectCont = new Container();
      
        const itemsAmount = Math.floor(Math.random() * 10) + 2;
      
        for (let i = 0; i < itemsAmount; i++) {
            const randItem: DisplayObject = (Math.random() < 0.5 ? this.getRandomText() : this.getRandomSprite());
            resultObjectCont.addChild(randItem);
        }

        resultObjectCont.children.forEach((child) => {
            child.x = Math.random() * 400;
            child.y = Math.random() * 300;
        });
        resultObjectCont.cacheAsBitmap = true;
        this.resultContainer.addChild(resultObjectCont);
    }

    protected getRandomText(): Text {
        const textContent = this.textOptions[Math.floor(Math.random() * this.textOptions.length)];
        const text = new Text(textContent, {
            fontSize: Math.floor(Math.random() * 20) + 15,
            fill: Math.random() * 0xFFFFFF,
        });
        return text;
    }

    protected getRandomSprite(): Sprite {
        const imagePath = this.imagePaths[Math.floor(Math.random() * this.imagePaths.length)];
        const image = Sprite.from(imagePath);
        image.width = 50;
        image.height = 50;
        return image;
    }
    
}