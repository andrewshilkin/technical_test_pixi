import layout_data from "./layout.json";
import AppRenderer from "../core/AppRenderer";
import {Container} from "pixi.js";

export type ChildrenType = {[key:string]: ILayoutInfo};
export interface ILayoutInfo {
    childs?: ChildrenType;
}
export interface ILayoutsConfig {
    root: ILayoutInfo;
}

export class AppLayoutInitializer {
    
    public createLayouts(): void {
        this.createLayout("root", AppRenderer.stage, layout_data.root.childs as ChildrenType);
    }

    protected loopChilds(childs: ChildrenType, parent: Container): void {
        for (const key in childs) {
            var child = childs[key];
            this.createLayout(key, parent, child.childs);
        }
    }

    protected createLayout(layoutName: string, parent: Container, childs?: ChildrenType): Container {
        const container = new Container();
        container.name = layoutName;
        if(childs)this.loopChilds(childs, container);
        return parent.addChild(container);
    }

}