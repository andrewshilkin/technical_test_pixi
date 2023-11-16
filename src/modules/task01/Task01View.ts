import gsap from "gsap";
import {Sprite, Text} from "pixi.js";
import {BaseView} from "../../core/BaseView";
import {Button, ButtonEvents} from "../../ui/Button";
export enum Task01ViewEvents {
    EXIT_CLICKED = "Task01ViewEvents.EXIT_CLICKED",
} 
export class Task01View extends BaseView {
    protected cardStack: Sprite[];
    protected reversedStack: Sprite[];

    protected endAnimationX: number = 760; 
    protected currentIndex = 0;

    protected cardStackLabel: Text;
    protected reversedStackLabel: Text;
    protected interval: any;

    protected bttn_start: Button;
    protected bttn_exit: Button;

    public get layout(): string {
        return "task01";
    }
    public init(): void {
        this.addToLayout();
        this.container.y = 86;

        this.cardStackLabel = new Text('144', {
            fontFamily: 'kenvector_future_thin',
            fontSize: 24,
            fill: 0x0,
            align: 'left',
        });
        this.cardStackLabel.x = 50;
        this.cardStackLabel.y = 220;

        this.reversedStackLabel = new Text('0', {
            fontFamily: 'kenvector_future_thin',
            fontSize: 24,
            fill: 0x0,
            align: 'left',
        });
        this.reversedStackLabel.x = this.endAnimationX + 50;
        this.reversedStackLabel.y = 220;

        this.bttn_start = new Button(this.getTexture("blue_button"), 6, 13, 6, 13);
        this.bttn_start.text = "Start";
        this.bttn_start.width = 200;
        this.bttn_start.height = 60;
        this.bttn_start.x = 200;
        this.bttn_start.y = 240;

        this.bttn_start.eventEmitter.on(ButtonEvents.button_click, () => {
            this.startMovingStacks();
            this.bttn_start.visible = false;
        });

        this.bttn_exit = new Button(this.getTexture("blue_button"), 6, 13, 6, 13);
        this.bttn_exit.text = "Exit";
        this.bttn_exit.width = 200;
        this.bttn_exit.height = 60;
        this.bttn_exit.x = 420;
        this.bttn_exit.y = 240;

        this.bttn_exit.eventEmitter.on(ButtonEvents.button_click, () => {
            this.stopMovingStacks();
            this.createScene(); // recreate scene

            this.emit(Task01ViewEvents.EXIT_CLICKED);
        });

        this.createScene();

    }

    protected createScene(): void {
        this.container.removeChildren(0);

        this.cardStack = new Array(144);
        this.reversedStack = new Array(144);
        for (let i = 0; i < 144; i++) {
            const card = Sprite.from("cardBack_red");
            this.cardStack[i] = card;
            this.container.addChild(card);
            card.x = i * 1;
        }

        this.container.addChild(this.cardStackLabel);
        this.container.addChild(this.reversedStackLabel);
        this.container.addChild(this.bttn_exit);
        this.container.addChild(this.bttn_start);

        this.cardStackLabel.text = "144";
        this.reversedStackLabel.text = "0";
    }

    public startMovingStacks(): void {
        this.currentIndex = this.cardStack.length - 1;
        this.interval = setInterval(() => {
            if(this.currentIndex <= 0) {
                clearInterval(this.interval);
                this.interval = null;
                this.moveCard();
                console.log({a: this.cardStack, b:this.reversedStack});
            } else {
                this.moveCard();
            }
        }, 1000);
    }

    public stopMovingStacks(): void {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        gsap.globalTimeline.clear();
        this.bttn_start.visible = true;
    }

    protected moveCard(): void {
        gsap.to(this.cardStack[this.currentIndex], {
            duration: 2, 
            x: this.endAnimationX + (this.cardStack.length-1) - this.currentIndex,
            onStart: () => { 
                delete this.cardStack[this.currentIndex];
                this.currentIndex--;
                this.cardStackLabel.text = this.currentIndex + 1;
            },
            onComplete: (card: Sprite, index: number) => {
                this.reversedStack[index] = card;
                this.setCardIndex(card, index);
                this.reversedStackLabel.text = index + 1;
            },
            onCompleteParams: [this.cardStack[this.currentIndex], (this.cardStack.length-1) - this.currentIndex]
        });
    }

    protected setCardIndex(card: Sprite, index: number): void {
        this.container.setChildIndex(card, index);
    }

}