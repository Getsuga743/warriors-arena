interface message {
    id:number;
    name:string;
    content:string;
}

class UILogger {
    private display:boolean;
    private container:HTMLDivElement;
    private portraitContainer:HTMLDivElement;
    private textContainer:HTMLDivElement;
    private messages:Message[];
    constructor(container:HTMLDivElement,
    messages:Message[] = []){
            this.container = container;
            this.messages = messages;
            this.portraitContainer = document.createElement('div');
            this.textContainer = document.createElement('div');
            this.container.appendChild(this.portraitContainer)
            this.container.appendChild(this.textContainer);
            this.display = true;
    }
    
    createPortraitContainer(){
        this.portraitContainer.className="logger__portrait";
    }
    createTextLog(){
        const messagesContainer = document.createElement('ul');
        messagesContainer.className = 'logger__messages--container';
        this.textContainer.className = 'logger__text';
        this.textContainer.appendChild(messagesContainer);
    }
    getTextLog():HTMLDivElement{
        return this.textContainer;
    }
    setPortrait(portrait:HTMLDivElement){
        console.log(this.portraitContainer.childNodes)
        if(!this.portraitContainer.childNodes){
            this.portraitContainer.appendChild(portrait);
        }else{
            this.portraitContainer.childNodes.forEach(x => this.portraitContainer.removeChild(x));
            this.portraitContainer.appendChild(portrait);
        }
    }
    appendMessage(messageElement:HTMLLIElement){
        this.textContainer.childNodes[0].appendChild(messageElement);
    }
    selectElement(message:Message){
        const messageId = message.getId();
        const index = this.messages.filter((m:Message,index:number) => {
            if(m.getId() === messageId){
                return index;
            }
            else{
                return null;
            }
        });
        
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

export class Logger {
    private logger!:UILogger;
    createLogger(container:HTMLDivElement,messages:Message[]){
        if(!this.logger){
            this.logger = new UILogger(container,messages);
            return this.logger;
        }else{
            return this.logger;
        }
    }
    getLogger():UILogger{
        return this.logger;
    }
}

export class Message {
    private id:number;
    private name:string;
    private content:string;
    private element:HTMLLIElement;
    constructor(message:message){
        this.id = message.id;
        this.name = message.name;
        this.content = message.content
        const messageElement = document.createElement('li');
        const contentElement = document.createElement('div')
        messageElement.className='message__container';
        contentElement.className='message--content';
        contentElement.textContent = this.content;
        messageElement.appendChild(contentElement);
        this.element = messageElement;
    }
    getElement():HTMLLIElement{
        return this.element;
    }
    getId():number{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getContent():string{
        return this.content;
    }
}

export class Portrait {
    createPortrait(src:string,name:string):HTMLDivElement{
        const container = document.createElement('div');
        container.innerHTML = `
        <div class="img__container">
            <img src="${src} "class="portraitImg" />
        </div>
        <p className="portrait--name">${name}</p>        
        `
        container.className = 'portrait__container'
        return container;
    }
}