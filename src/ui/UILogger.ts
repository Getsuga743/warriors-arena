
import { MessagesSubscriber } from "./MessagesObserver";
import { Message } from "./Message";
import { Portrait } from "./Portrait";
export class UILogger extends MessagesSubscriber {
    private display:boolean;
    private container:HTMLDivElement;
    private portraitContainer:HTMLDivElement;
    private textContainer:HTMLDivElement;
    constructor(container:HTMLDivElement){
        super();    
        this.container = container;
        this.container.className = 'container__TextOutput';
        this.portraitContainer = document.createElement('div');
        this.textContainer =  document.createElement('div');
        this.display = true;
    }
    // private isInHtml(m:Message):boolean{
    // 
    // }
    createPortraitContainer(){
        this.portraitContainer = document.createElement('div');
        this.portraitContainer.className="logger__portrait";
        this.container.appendChild(this.portraitContainer);
    }
    createTextLog(){
        const messagesContainer = document.createElement('ul');
        messagesContainer.className = 'logger__messages--container';
        this.textContainer.className = 'logger__text';
        this.textContainer.appendChild(messagesContainer);
        this.container.appendChild(this.textContainer)
    }
    createFullLog(){
        this.createPortraitContainer();
        this.createTextLog();
    }
    getTextLog():HTMLDivElement{
        return this.textContainer;
    }
    setPortrait(portrait:HTMLDivElement){

        if(!this.portraitContainer.childNodes){
            this.portraitContainer.appendChild(portrait);
        }else{
            this.portraitContainer.childNodes.forEach(x => this.portraitContainer.removeChild(x));
            this.portraitContainer.appendChild(portrait);
        }
    }
    updateLogs(){
        this.messages.forEach(el => {
                return this.appendLog(el.getElement());
        })
    }
    appendLog(l:HTMLLIElement){
        const ulContainer = this.container.childNodes[1].childNodes[0];
        ulContainer.appendChild(l);
    }
    getMessages():Message[]{
        return this.messages;
    }
    setDisplay(display:boolean){
        this.display = display;
    }
    toogleDisplay(){
        this.display = !this.display;
    }
    containerDisplay(display:boolean){
        const containerDisplay = display === true ? 'flex' : 'none'
        this.container.style.display = containerDisplay;
    }
}


