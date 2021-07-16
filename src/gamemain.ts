export class Game {
    container:HTMLDivElement;
    constructor(container:HTMLDivElement){
        this.container = container;
    }
    run(){
        console.log('is running');
    }
    load(){
        console.log('is loading');
    }
    pause(){
        console.log('pause!');
    }

}