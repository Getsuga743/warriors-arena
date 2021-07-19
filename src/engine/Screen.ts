import { InlineStyledComponent,Component } from "../libs/components/Component";

export class Screen {
    name:string;
    component!:Component | InlineStyledComponent;
    state:{};
    constructor(name:string,component:Component | InlineStyledComponent,state?:{}){
        this.name = name;
        this.state = state ? state : {};
        this.component = component;
    }
    setComponent(component:Component | InlineStyledComponent){
        this.component = component;
    }
    getComponent(){
        return this.component;
    }
    setState(state:{}){
        this.state = state;
    }
    getState(){
        return this.state;
    }

}

