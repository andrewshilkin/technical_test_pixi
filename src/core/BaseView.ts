import {Container, Texture} from "pixi.js";
import AppRenderer from "./AppRenderer";
import {EventEmitter} from "eventemitter3";

export abstract class BaseView extends EventEmitter {
    protected container: Container = new Container();

    public abstract get layout(): string;
    public abstract init(): void;

    public getTexture(textureName: string): Texture {
        return Texture.from(textureName);
    }
    public addToLayout(): void {
        AppRenderer.addToRenderTree(this.container, this.layout);
    }
    public removeFromParent(): void {
        this.container.parent && this.container.parent.removeChild(this.container);
    }
}

export enum ViewEvents {
    INIT = "ViewEvents.INIT",
    HIDE = "ViewEvents.HIDE",
    SHOW = "ViewEvents.SHOW",
}