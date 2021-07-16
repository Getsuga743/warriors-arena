interface MessageData {
    id:number;
    name:string;
    content:string;
}

export interface MessageInterface {
    getElement():HTMLLIElement;
    getId():number;
    getName():string;
    getContent():string
}
export class Message implements MessageInterface{
    private id:number;
    private name:string;
    private content:string;
    private element:HTMLLIElement;
    constructor(message:MessageData){
        this.id = message.id;
        this.name = message.name;
        this.content = message.content
        const messageElement = document.createElement('li');
        const contentElement = document.createElement('div')
        messageElement.className='message__container';
        messageElement.setAttribute('msgId',this.id.toString());
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
