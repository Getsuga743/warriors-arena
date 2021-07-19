import { Screen } from "./Screen";

export class Game {
    container:HTMLDivElement;
    globalState:{}
    screens:Screen[];
    screen!:Screen;
    constructor(container:HTMLDivElement){
        this.container = container;
        this.screens = [];
        this.globalState={};
    }
    run(){
        if(this.screens){
            this.screen.component.render(this.container);
        }
        
    }
    addScreen(screen:Screen){
        this.screens.push(screen);
    }
    deleteScreen(screen:Screen){
        this.screens = this.screens.filter((s:Screen) => s.name !== screen.name );
    }
    loadScreen(screenName:string){
        if(this.screens){
            const [screen,...args] = this.screens.filter((s:Screen) => s.name === screenName);
            this.setScreen(screen);
        }
    }
    pause(){
        console.log('pause!');
    }
    setGlobalState(state:{}){
        this.globalState = state;
    }
    getGlobalState(){
        return this.globalState
    }
    setScreen(screen:Screen){
        this.screen = screen;
    }

}